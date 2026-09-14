import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-[1200] items-center justify-between px-5 py-5">
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={60}
          className="h-auto w-[180] object-contain"
        />
        <nav className="flex items-center gap-6">
          <a
            href="/LoginPage"
            className="text-sm font-medium text-white transition hover:text-[#F0DE36]"
          >
            Log In
          </a>
          <a
            href="/SignUpPage"
            className="text-sm font-medium text-white transition hover:text-[#F0DE36]"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}
