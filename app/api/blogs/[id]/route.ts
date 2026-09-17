import { NextResponse } from "next/server";
import { articles } from "../../../../app/api/lib/articles";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const article = articles.find((item) => item._id === id);

    if (!article) {
      return NextResponse.json(
        {
          message: "Post topilmadi",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      data: article,
    });
  } catch (error) {
    console.error("Get article error:", error);

    return NextResponse.json(
      {
        message: "Serverda xatolik yuz berdi",
      },
      { status: 500 },
    );
  }
}
