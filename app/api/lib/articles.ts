export type Article = {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    _id: "1",
    title: "Exam blog post demo",
    description:
      "Exam is hard but you will make it! This is a demo article description.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200",
    author: "Ibrokhim Jalalov",
    tags: ["exam", "passed", "failed"],
  },
  {
    _id: "2",
    title: "Next.js haqida",
    description:
      "Next.js React asosida qurilgan zamonaviy framework bo‘lib, frontend va backend imkoniyatlarini bir joyda ishlatishga yordam beradi.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    author: "Ibrokhim Jalalov",
    tags: ["nextjs", "react", "javascript"],
  },
];
