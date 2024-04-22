import { NextRequest, NextResponse } from "next/server";
import fs, { writeFile } from "fs";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
  try {
    const data = await req.formData();
    const image = data.get("image");
    const title = data.get("title");
    const desc = data.get("desc");
    const content = data.get("content");
    let published = data.get("published");
    const authorId = data.get("authorId");
    const categoryId = data.get("categoryId");
    let newBlog;
    let slug;

    const prisma = new PrismaClient();

    slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-");

    newBlog = await prisma.blogh.create({
      data: {
        title,
        slug,
        description: desc,
        content,
        published,
        author_id: parseInt(authorId),
        category_id: parseInt(categoryId),
      },
    });

    if (image !== "") {
      const filenameParts = image.name.split(".");
      const fileExtension = filenameParts[filenameParts.length - 1];

      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const path = `./public/blog_images/${slug}.${fileExtension}`;
      await new Promise((resolve, reject) => {
        fs.writeFile(path, buffer, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });

      const imagePath = `/blog_images/${slug}.${fileExtension}`;

      await prisma.blogh.update({
        where: { id: newBlog.id },
        data: {
          image: imagePath,
        },
      });
    }

    return NextResponse.json({ result: "success" }, { status: 200 });

    // Respond with success message
  } catch (error) {
    console.error("Error during blog addition:", error);
    return NextResponse.json(
      { success1: false, error: "Failed to add blog" },
      { status: 500 }
    );
  }
}
