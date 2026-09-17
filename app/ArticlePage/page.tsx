import { Suspense } from "react";
import Header from "../componemts/Header";
import Article from "../componemts/Article/Article";

export default function ArticlePage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <main className="min-h-screen">
            <section className="mx-auto max-w-[1200] px-5 py-16">
              <p className="text-white">Loading...</p>
            </section>
          </main>
        }
      >
        <Article />
      </Suspense>
    </>
  );
}
