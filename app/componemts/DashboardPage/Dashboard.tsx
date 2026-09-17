"use client";

import { useState } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [author] = useState("Ibrokhim Jalalov");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token topilmadi. Avval login qiling.");
      }

      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          image,
          tags: [tag],
          author,
        }),
      });

      const data = await response.json();

      console.log("Created post:", data);

      if (!response.ok) {
        throw new Error(data.message || "Post yaratishda xatolik");
      }

      setMessage("Post muvaffaqiyatli yaratildi!");
      setTitle("");
      setImage("");
      setTag("");
      setDescription("");
    } catch (error) {
      console.error("Create post error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Post yaratishda xatolik yuz berdi",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/LoginPage";
  };

  return (
    <main className="min-h-screen px-5 py-8">
      <div className="mx-auto w-full max-w-[1200]">
        <div className="flex min-h-[720] gap-8 p-8">
          <aside className="flex w-[210] shrink-0 flex-col rounded-[23px] bg-[#F9C746] p-4">
            <h2 className="text-center font-serif text-[25px] text-black">
              Dashboard
            </h2>
            <div className="mt-5 rounded-[17px] bg-white px-4 py-4">
              <p className="font-serif text-[14px] text-black">
                Ibrokhim Jalalov
              </p>
              <p className="mt-1 font-serif text-[9px] text-[#999999]">
                Author
              </p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-auto font-serif text-[14px] text-black transition hover:opacity-60"
            >
              Sign Out?
            </button>
          </aside>
          <section className="min-w-0 flex-1">
            <h1 className="border-b border-[#333333] pb-4 font-serif text-[24px] text-white">
              Create New Post
            </h1>
            <form onSubmit={handleSubmit} className="pt-7">
              <div>
                <label className="mb-2 block font-serif text-[14px] text-white">
                  Post title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter post title"
                  className="h-[34] w-full rounded-[12] bg-white px-3 font-serif text-[14px] text-black outline-none"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-serif text-[14px] text-white">
                    Post image
                  </label>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    placeholder="Image URL"
                    className="h-[34] w-full rounded-[12] bg-white px-3 font-serif text-[14px] text-black outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-serif text-[14px] text-white">
                    Post tag
                  </label>
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                    placeholder="javascript"
                    className="h-[34] w-full rounded-[12] bg-white px-3 font-serif text-[14px] text-black outline-none"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="mb-2 block font-serif text-[14px] text-white">
                  Post description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={6}
                  placeholder="Write your post description..."
                  className="w-full resize-none rounded-[12] bg-white px-3 py-3 font-serif text-[14px] text-black outline-none"
                />
              </div>
              {message && (
                <p className="mt-4 text-center font-serif text-[14px] text-green-400">
                  {message}
                </p>
              )}
              {error && (
                <p className="mt-4 text-center font-serif text-[14px] text-red-500">
                  {error}
                </p>
              )}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[46] w-[176] rounded-[8] bg-[#F9C746] font-serif text-[14px] text-black transition hover:bg-[#e7b633] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Create Post"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
