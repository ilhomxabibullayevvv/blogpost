import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Barcha maydonlarni to'ldiring",
        },
        {
          status: 400,
        },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          message: "Password kamida 8 ta belgidan iborat bo'lishi kerak",
        },
        {
          status: 400,
        },
      );
    }

    console.log("New user:", {
      name,
      email,
      password,
    });

    return NextResponse.json(
      {
        message: "Account muvaffaqiyatli yaratildi!",
        user: {
          name,
          email,
        },
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Serverda xatolik yuz berdi",
      },
      {
        status: 500,
      },
    );
  }
}
