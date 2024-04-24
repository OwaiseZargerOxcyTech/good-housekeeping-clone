import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import md5 from "md5";
import fs, { writeFile } from "fs";
import path from "path";
import fetch from "node-fetch";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

async function deleteBlob(blobName) {
  const token =
    "vercel_blob_rw_jUHo6lzVKmb7H9EZ_CKeKUeUhEEokt1LfN6xrmbbhpMkamB"; // Replace with your Vercel token
  const projectId = "prj_tYSSNkO4oeejD8OAxFhmeRgyecqc"; // Replace with your Vercel project ID

  try {
    const response = await fetch(
      `https://api.vercel.com/v2/now/files/${projectId}/${blobName}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete blob");
    }

    console.log("Blob deleted successfully");
  } catch (error) {
    console.error("Error deleting blob:", error);
  }
}

function getBlobNameFromUrl(blobUrl) {
  try {
    const url = new URL(blobUrl);
    const pathParts = url.pathname.split("/");
    const blobName = pathParts[pathParts.length - 1];
    return blobName;
  } catch (error) {
    console.error("Error extracting blob name:", error);
    return null;
  }
}

export async function POST(req, res) {
  const body = await req.json();
  const { apiName } = body;
  if (apiName === "addemployee") {
    try {
      const { username, email, password } = body;

      const hashedPassword = md5(password);

      await prisma.userh.create({
        data: {
          username,
          email,
          password: hashedPassword,
          userRole: "employee",
        },
      });

      return NextResponse.json(
        { result: "successfully created employee" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during employee creation:", error);
      return NextResponse.json(
        { error: "Failed to add employee" },
        { status: 500 }
      );
    }
  } else if (apiName === "blockemployee") {
    try {
      const { selectedId } = body;

      await prisma.userh.update({
        where: { id: selectedId },
        data: {
          blocked: "Y",
        },
      });

      return NextResponse.json(
        { result: "successfully blocked employee" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during blocking employee:", error);
      return NextResponse.json(
        { error: "Failed to block employee" },
        { status: 500 }
      );
    }
  } else if (apiName === "unapproveblog") {
    try {
      const { selectedId } = body;

      const blog = await prisma.blogh.findUnique({ where: { id: selectedId } });

      const BlobName = getBlobNameFromUrl(blog.image);

      deleteBlob(BlobName);

      await prisma.blogh.delete({ where: { id: selectedId } });

      return NextResponse.json(
        { result: "successfully unapproved blog" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during unapproving blog:", error);
      return NextResponse.json(
        { error: "Failed to unapprove blog" },
        { status: 500 }
      );
    }
  } else if (apiName === "updateemployee") {
    try {
      const { selectedId, username, email, password } = body;

      if (username !== "") {
        await prisma.userh.update({
          where: { id: selectedId },
          data: {
            username,
          },
        });
      }

      if (email !== "") {
        await prisma.userh.update({
          where: { id: selectedId },
          data: {
            email,
          },
        });
      }

      if (password !== "") {
        const hashedPassword = md5(password);

        await prisma.userh.update({
          where: { id: selectedId },
          data: {
            password: hashedPassword,
          },
        });
      }

      return NextResponse.json(
        { result: "successfully updated employee" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during employee updation:", error);
      return NextResponse.json(
        { error: "Failed to update employee" },
        { status: 500 }
      );
    }
  } else if (apiName === "requestfordelete") {
    try {
      const { selectedId, published, blogLiveId } = body;

      if (published === "Y") {
        await prisma.blogliveh.update({
          where: { id: selectedId },
          data: {
            delete_request: "Y",
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
            delete_request: "Y",
          },
        });
      } else {
        await prisma.blogh.update({
          where: { id: selectedId },
          data: {
            delete_request: "Y",
          },
        });
        await prisma.blogliveh.update({
          where: { id: blogLiveId },
          data: {
            delete_request: "Y",
          },
        });
      }

      return NextResponse.json(
        { result: "successfully requested blog for delete" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during blog delete request:", error);
      return NextResponse.json(
        { error: "Failed to request blog for delete" },
        { status: 500 }
      );
    }
  } else if (apiName === "canceldeleterequest") {
    try {
      const { selectedId, published, blogLiveId } = body;

      if (published === "Y") {
        await prisma.blogliveh.update({
          where: { id: selectedId },
          data: {
            delete_request: "N",
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
            delete_request: "N",
          },
        });
      } else {
        await prisma.blogh.update({
          where: { id: selectedId },
          data: {
            delete_request: "N",
          },
        });
        await prisma.blogliveh.update({
          where: { id: blogLiveId },
          data: {
            delete_request: "N",
          },
        });
      }

      return NextResponse.json(
        { result: "successfully cancelled delete request" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during cancelling delete request:", error);
      return NextResponse.json(
        { error: "Failed to cancel delete request" },
        { status: 500 }
      );
    }
  } else if (apiName === "approveblog") {
    try {
      const { selectedId } = body;

      const blog = await prisma.blogh.findUnique({
        where: { id: selectedId },
      });

      if (blog.bloglive_id === null) {
        await prisma.blogliveh.create({
          data: {
            title: blog.title,
            description: blog.description,
            content: blog.content,
            image: blog.image,
            slug: blog.slug,
            published: "Y",
            delete_request: blog.delete_request,
            author: {
              connect: { id: blog.author_id },
            },
            category: {
              connect: { id: blog.category_id },
            },
          },
        });

        await prisma.blogh.delete({ where: { id: blog.id } });
      } else {
        const liveblog = await prisma.blogliveh.findFirst({
          where: { id: blog.bloglive_id },
        });
        if (
          blog.image !== null &&
          blog.image !== "null" &&
          blog.image !== undefined &&
          blog.image !== ""
        ) {
          const BlobName = getBlobNameFromUrl(liveblog.image);

          deleteBlob(BlobName);

          await prisma.blogliveh.update({
            where: { id: blog.bloglive_id },
            data: {
              title: blog.title,
              description: blog.description,
              content: blog.content,
              published: "Y",
              image: blog.image,
              delete_request: blog.delete_request,
              author_id: blog.author_id,
              category_id: blog.category_id,
            },
          });
        } else {
          await prisma.blogliveh.update({
            where: { id: blog.bloglive_id },
            data: {
              title: blog.title,
              description: blog.description,
              content: blog.content,
              published: "Y",
              delete_request: blog.delete_request,
              author_id: blog.author_id,
              category_id: blog.category_id,
            },
          });
        }
        await prisma.blogh.delete({ where: { id: blog.id } });
      }

      return NextResponse.json(
        { result: "successfully approved blog" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during approving blog:", error);
      return NextResponse.json(
        { error: "Failed to approve blog" },
        { status: 500 }
      );
    }
  } else if (apiName === "getcategories") {
    try {
      const categories = await prisma.categoryh.findMany({});

      return NextResponse.json({ result: categories }, { status: 200 });
    } catch (error) {
      console.error("Error during getting categories data:", error);
      return NextResponse.json(
        { error: "Failed to get categories data" },
        { status: 500 }
      );
    }
  } else if (apiName === "addcategory") {
    try {
      const { category, selectedIsActive } = body;

      await prisma.categoryh.create({
        data: {
          name: category,
          is_active: selectedIsActive,
        },
      });

      return NextResponse.json(
        { result: "successfully created category" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during category creation:", error);
      return NextResponse.json(
        { error: "Failed to add category" },
        { status: 500 }
      );
    }
  } else if (apiName === "updatecategory") {
    try {
      const { category, selectedId, selectedIsActive } = body;

      await prisma.categoryh.update({
        where: { id: selectedId },
        data: {
          name: category,
          is_active: selectedIsActive,
        },
      });

      return NextResponse.json(
        { result: "successfully updated category" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during category updation:", error);
      return NextResponse.json(
        { error: "Failed to update category" },
        { status: 500 }
      );
    }
  } else if (apiName === "deletecategory") {
    try {
      const { selectedId } = body;

      await prisma.categoryh.delete({
        where: { id: selectedId },
      });

      return NextResponse.json(
        { result: "successfully deleted category" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during deleting category:", error);
      return NextResponse.json(
        { error: "Failed to delete category" },
        { status: 500 }
      );
    }
  } else if (apiName === "getpublishedblogs") {
    try {
      const { category } = body;

      const categoryData = await prisma.categoryh.findUnique({
        where: { name: category },
      });

      const blogs = await prisma.blogliveh.findMany({
        where: { published: "Y", category_id: categoryData.id },
      });

      return NextResponse.json({ result: blogs }, { status: 200 });
    } catch (error) {
      console.error("Error during getting blogs data:", error);
      return NextResponse.json(
        { error: "Failed to get blogs data" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Invalid API name" }, { status: 400 });
}
