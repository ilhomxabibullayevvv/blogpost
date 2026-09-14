import Image from "next/image";

export default function Login() {
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
          Login
        </h1>
        <form>
          <div className="mb-7">
            <input
              type="email"
              placeholder="Email"
              className="h-[44] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
            />
          </div>
          <div className="relative mb-3">
            <input
              type="password"
              placeholder="Password"
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
            Don’t you have an account?{" "}
            <a href="/SignUpPage" className="text-blue-700 hover:underline">
              Sign Up.
            </a>
          </p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[46] w-[150] rounded-[18px] bg-black font-serif text-[17px] text-white transition hover:bg-[#222]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
