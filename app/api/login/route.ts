import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email va passwordni kiriting",
        },
        { status: 400 },
      );
    }

    // Hozircha test
    console.log("Login:", {
      email,
      password,
    });

    return NextResponse.json({
      message: "Login muvaffaqiyatli!",
      token: "test-token",
      user: {
        email,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Serverda xatolik yuz berdi",
      },
      { status: 500 },
    );
  }
}
