"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log("Register response:", data);

      if (!response.ok) {
        throw new Error(
          data.message || "Ro'yxatdan o'tishda xatolik yuz berdi",
        );
      }

      setSuccess("Account muvaffaqiyatli yaratildi!");
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        router.push("/LoginPage");
      }, 1500);
    } catch (error) {
      console.error("Register error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Ro'yxatdan o'tishda xatolik yuz berdi",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5">
      <div className="w-full max-w-[360] rounded-[55px] bg-[#F9C746] px-[38] py-5">
        <div className="mb-5 flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="h-auto w-[140] object-contain"
          />
        </div>
        <h1 className="mb-4 text-center font-serif text-[23px] text-black">
          SignUp
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
            <input
              type="text"
              placeholder="Firstname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-[44] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
            />
          </div>
          <div className="mb-7">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-[44] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
            />
          </div>
          <div className="relative mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="h-[44] w-full rounded-[12] border-2 border-black bg-white px-4 pr-12 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              aria-label="Show password"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 12 5.5 5.5 12 5.5C18.5 5.5 22 12 22 12C22 12 18.5 18.5 12 18.5C5.5 18.5 2 12 2 12Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <p className="mb-7 font-serif text-[11px] text-black">
            Already have an account?{" "}
            <a href="/LoginPage" className="text-blue-700 hover:underline">
              Login
            </a>
          </p>
          {error && (
            <p className="mb-4 text-center font-serif text-[12px] text-red-600">
              {error}
            </p>
          )}
          {success && (
            <p className="mb-4 text-center font-serif text-[12px] text-green-700">
              {success}
            </p>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="h-[46] w-[150] rounded-[18px] bg-black font-serif text-[17px] text-white transition hover:bg-[#222] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Loading..." : "SignUp"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
