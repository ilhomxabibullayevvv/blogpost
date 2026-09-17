"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Article = {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  tags?: string[];
};

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        console.log("Blogs response:", data);

        if (!response.ok) {
          throw new Error(data.message || "Postlarni olishda xatolik");
        }

        const posts = Array.isArray(data)
          ? data
          : data.blogs || data.data || [];

        setArticles(posts);
      } catch (error) {
        console.error("Get articles error:", error);

        setError(
          error instanceof Error ? error.message : "Postlarni olishda xatolik",
        );
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-[1200] px-5 py-16">
        <h2 className="mb-10 text-3xl font-bold text-white">All articles</h2>
        <p className="text-white">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-[1200] px-5 py-16">
        <h2 className="mb-10 text-3xl font-bold text-white">All articles</h2>
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1200] px-5 py-16">
      <h2 className="mb-10 text-3xl font-bold text-white">All articles</h2>
      {articles.length === 0 ? (
        <p className="text-white">Hozircha postlar mavjud emas.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/ArticlePage?id=${article._id}`}
              className="block"
            >
              <article className="overflow-hidden rounded-xl border-[3px] border-[#F0DE36] bg-black transition hover:scale-[1.02]">
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
                      src="/author.png"
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
      )}
    </section>
  );
}
