import { NextResponse } from "next/server";
import { articles, type Article } from "../../../app/api/lib/articles";

export async function GET() {
  return NextResponse.json({
    data: articles,
  });
}

export async function POST(request: Request) {
  try {
    const token = request.headers.get("authorization");

    if (!token) {
      return NextResponse.json(
        {
          message: "Token topilmadi. Avval login qiling.",
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    const { title, description, image, tags, author } = body;

    if (!title || !description || !image || !author) {
      return NextResponse.json(
        {
          message: "Barcha maydonlarni to'ldiring",
        },
        { status: 400 },
      );
    }

    const newArticle: Article = {
      _id: Date.now().toString(),
      title,
      description,
      image,
      author,
      tags: Array.isArray(tags) ? tags : [],
    };

    articles.push(newArticle);

    return NextResponse.json(
      {
        message: "Post muvaffaqiyatli yaratildi!",
        data: newArticle,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create blog error:", error);

    return NextResponse.json(
      {
        message: "Post yaratishda xatolik yuz berdi",
      },
      { status: 500 },
    );
  }
}
