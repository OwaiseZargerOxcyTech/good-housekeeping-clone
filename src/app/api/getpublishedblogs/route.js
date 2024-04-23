import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const body = await req.json();

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
