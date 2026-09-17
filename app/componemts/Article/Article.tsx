"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Article = {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  tags?: string[];
};

export default function Article() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError("Post ID topilmadi");
      setLoading(false);
      return;
    }

    const getArticle = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();

        console.log("Article:", data);

        if (!response.ok) {
          throw new Error(data.message || "Postni olishda xatolik");
        }

        const post = data.data || data.blog || data;

        setArticle(post);
      } catch (error) {
        console.error("Get article error:", error);

        setError(
          error instanceof Error ? error.message : "Postni olishda xatolik",
        );
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen">
        <section className="mx-auto max-w-[1200] px-5 py-16">
          <p className="text-white">Loading...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <section className="mx-auto max-w-[1200] px-5 py-16">
          <p className="text-red-500">{error}</p>
        </section>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="min-h-screen">
        <section className="mx-auto max-w-[1200] px-5 py-16">
          <p className="text-white">Post topilmadi.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[1200] px-5 py-16">
        <div className="flex items-center justify-between gap-5">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            {article.title}
          </h1>
          {article.tags && article.tags.length > 0 && (
            <p className="mb-4 shrink-0 text-sm font-medium text-white">
              #{article.tags[0]}
            </p>
          )}
        </div>
        <div className="relative mb-10 h-[376] w-full overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mb-8 flex items-center gap-3">
          <Image
            src="/author.png"
            alt={article.author}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-white">{article.author}</p>
            <p className="text-xs text-gray-400">Author</p>
          </div>
        </div>
        <article className="max-w-[820]">
          <p className="text-base leading-8 text-white">
            {article.description}
          </p>
        </article>
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#F0DE36] px-3 py-1 text-sm text-white"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
