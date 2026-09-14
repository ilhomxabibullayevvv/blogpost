"use client";

import { useState } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Ibrokhim Jalalov");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      title,
      author,
      image,
      tag,
      description,
    });
  };

  return (
    <main className="min-h-screen bg-black px-5 py-12">
      <div className="mx-auto w-full max-w-[700]">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="font-serif text-4xl font-bold text-white">
            Dashboard
          </h1>
          <button
            type="button"
            className="rounded-[12] bg-[#F9C746] px-5 py-2 font-serif text-sm font-semibold text-black transition hover:bg-[#e7b633]"
          >
            Sign Out
          </button>
        </div>
        <div className="rounded-[30px] bg-[#F9C746] p-8">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-black">
            Create New Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-serif text-sm text-black">
                Post title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                className="h-[46] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="mb-2 block font-serif text-sm text-black">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="h-[46] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="mb-2 block font-serif text-sm text-black">
                Post image
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Post image"
                className="h-[46] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="mb-2 block font-serif text-sm text-black">
                Post tag
              </label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Post tag"
                className="h-[46] w-full rounded-[12] border-2 border-black bg-white px-4 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="mb-2 block font-serif text-sm text-black">
                Post description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Post description"
                rows={6}
                className="w-full resize-none rounded-[12] border-2 border-black bg-white px-4 py-3 font-serif text-[16px] text-black outline-none placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="h-[48] w-[170] rounded-[18px] bg-black font-serif text-[17px] text-white transition hover:bg-[#222]"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
        <p className="mt-6 text-center font-serif text-sm text-gray-400">
          Ibrokhim Jalalov
        </p>
      </div>
    </main>
  );
}
