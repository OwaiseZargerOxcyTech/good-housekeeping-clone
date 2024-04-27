import { NextRequest, NextResponse } from "next/server";
import fs, { writeFile } from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { put } from "@vercel/blob";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    const data = await req.formData();
    const image = data.get("image");
    const title = data.get("title");
    const description = data.get("description");
    const content = data.get("content");
    const published = data.get("published");
    const author_id = data.get("author_id");
    const category_id = data.get("category_id");
    const blogLiveId = data.get("blogLiveId");
    let selectedId = data.get("selectedId");
    selectedId = parseInt(selectedId);
    const previousimage = data.get("previousimage");
    let blob;
    if (!image) {
      return NextResponse.json({ success1: false });
    }

    let slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-");

    if (
      (blogLiveId !== undefined &&
        blogLiveId !== null &&
        blogLiveId !== "null" &&
        blogLiveId !== "") ||
      published === "Y"
    ) {
      slug = `${slug}-00000`;
    }

    if (published === "Y") {
      await prisma.blogliveh.update({
        where: { id: selectedId },
        data: {
          author_id: parseInt(author_id),
        },
      });
    } else if (
      blogLiveId === undefined ||
      blogLiveId === null ||
      blogLiveId === "null" ||
      blogLiveId === ""
    ) {
      await prisma.blogh.update({
        where: { id: selectedId },
        data: {
          author_id: parseInt(author_id),
        },
      });
    } else {
      await prisma.blogh.update({
        where: { id: selectedId },
        data: {
          author_id: parseInt(author_id),
        },
      });
      await prisma.blogliveh.update({
        where: { id: parseInt(blogLiveId) },
        data: {
          author_id: parseInt(author_id),
        },
      });
    }

    if (published === "Y" && typeof image === "string") {
      const blog1 = await prisma.blogliveh.findUnique({
        where: { id: selectedId },
      });
      if (
        blog1.title === title &&
        blog1.description === description &&
        blog1.content === content &&
        blog1.category_id == category_id
      ) {
        return NextResponse.json(
          {
            result: "blog updated successfully, only author need to be updated",
          },
          { status: 200 }
        );
      }
    }

    if (typeof image === "object") {
      const filenameParts = image.name.split(".");
      const fileExtension = filenameParts[filenameParts.length - 1];

      blob = await put(`${slug}.${fileExtension}`, image, {
        access: "public",
      });
    }

    if (typeof image === "string") {
      if (published === "Y") {
        await prisma.blogh.create({
          data: {
            title,
            description,
            content,
            slug,
            image: "",
            published: "N",
            author_id: parseInt(author_id),
            bloglive_id: selectedId,
            category_id: parseInt(category_id),
          },
        });
      } else {
        await prisma.blogh.update({
          where: { id: selectedId },
          data: {
            title,
            description,
            content,
            slug,
            published: "N",
            author_id: parseInt(author_id),
            category_id: parseInt(category_id),
          },
        });
      }

      return NextResponse.json(
        { result: "blog updated successfully" },
        { status: 200 }
      );
    }

    if (typeof image === "object") {
      if (published === "Y") {
        await prisma.blogh.create({
          data: {
            title,
            description,
            content,
            slug,
            image: blob.url,
            published: "N",
            author_id: parseInt(author_id),
            bloglive_id: selectedId,
            category_id: parseInt(category_id),
          },
        });
      } else {
        await prisma.blogh.update({
          where: { id: selectedId },
          data: {
            title,
            description,
            content,
            slug,
            image: blob.url,
            published: "N",
            author_id: parseInt(author_id),
            category_id: parseInt(category_id),
          },
        });
      }

      return NextResponse.json(
        { result: "blog updated successfully" },
        { status: 200 }
      );
    }
    // Respond with success message
  } catch (error) {
    console.error("Error during blog addition:", error);
    return NextResponse.json(
      { success1: false, error: "Failed to add blog" },
      { status: 500 }
    );
  }
}
