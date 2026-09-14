import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      id: 1,
      slug: "it-is-about-nature-1",
      title: "It is about Nature",
      description:
        "It is about nature lorem ipsum dolor sit amet. Dolor sit It is about nature lorem ipsum dolor sit amet....",
      author: "Ibrokhim Jalalov",
      image: "/nature.png",
      authorImage: "/author.png",
    },
    {
      id: 2,
      slug: "it-is-about-nature-2",
      title: "It is about Nature",
      description:
        "It is about nature lorem ipsum dolor sit amet. Dolor sit It is about nature lorem ipsum dolor sit amet....",
      author: "Ibrokhim Jalalov",
      image: "/nature.png",
      authorImage: "/author.png",
    },
    {
      id: 3,
      slug: "it-is-about-nature-3",
      title: "It is about Nature",
      description:
        "It is about nature lorem ipsum dolor sit amet. Dolor sit It is about nature lorem ipsum dolor sit amet....",
      author: "Ibrokhim Jalalov",
      image: "/nature.png",
      authorImage: "/author.png",
    },
    {
      id: 4,
      slug: "it-is-about-nature-4",
      title: "It is about Nature",
      description:
        "It is about nature lorem ipsum dolor sit amet. Dolor sit It is about nature lorem ipsum dolor sit amet....",
      author: "Ibrokhim Jalalov",
      image: "/nature.png",
      authorImage: "/author.png",
    },
  ];

  return (
    <section className="mx-auto max-w-[1200] px-5 py-16">
      <h2 className="mb-10 text-3xl font-bold text-white">All articles</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <Link key={article.id} href="/ArticlePage" className="block">
            <article className="overflow-hidden rounded-xl border-[3px] border-[#F0DE36] bg-black">
              <div className="relative h-[172] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-xl font-semibold text-gray-600">
                  {article.title}
                </h3>
                <p className="mb-6 text-sm leading-6 text-gray-500">
                  {article.description}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      {article.author}
                    </p>
                    <p className="text-xs text-gray-400">Author</p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
