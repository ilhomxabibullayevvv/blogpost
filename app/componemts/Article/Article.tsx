import Image from "next/image";

export default function Article() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[1200] px-5 py-16">
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            Is Iphone worth to buy?
          </h1>
          <p className="mb-4 text-sm font-medium text-white">#technology</p>
        </div>
        <div className="relative mb-10 h-[376] w-full overflow-hidden rounded-xl">
          <Image
            src="/nature.png"
            alt="Is Iphone worth to buy?"
            fill
            className="object-cover"
          />
        </div>
        <article className="max-w-[820]">
          <p className="text-base leading-8 text-white">
            Medium is a blogging platform, like WordPress or Blogger. Medium is
            the new project from the guys who brought you Twitter. Medium is
            chaotically, arrhythmically produced by a combination of top-notch
            editors, paid writers, PR flacks, startup bros, and hacks.
          </p>
        </article>
      </section>
    </main>
  );
}
