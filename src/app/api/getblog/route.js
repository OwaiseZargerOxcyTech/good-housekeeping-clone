import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { slug } = body;

    let blog;

    blog = await prisma.blogh.findFirst({ where: { slug } });

    if (!blog) {
      blog = await prisma.blogliveh.findFirst({ where: { slug } });
    }

    const categoryData = await prisma.categoryh.findUnique({
      where: { id: blog.category_id },
    });

    const result = { ...blog, category: categoryData.name };

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error during blog fetching:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
