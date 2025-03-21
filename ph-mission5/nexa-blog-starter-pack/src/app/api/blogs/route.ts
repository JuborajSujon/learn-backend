import { NextResponse } from "next/server";

export const blogs = [
  {
    id: "1",
    title: "The Rise of Quantum Computing",
    description:
      "Dive into the fascinating world of quantum computing, where traditional binary bits make way for qubits, unlocking unprecedented computational power. Explore the potential applications, challenges, and the race among tech giants to achieve quantum supremacy.",
    publish_date: "2025-03-01",
    author_name: "Mezbaul Abedin Persian",
    blog_image:
      "https://www.insights.onegiantleap.com/content/images/2023/10/Content-Hub-Blog---The-rise-of-quantum-computing.png",
    total_likes: "1200",
  },
  {
    id: "2",
    title: "Augmented Reality: Bridging the Digital and Physical Worlds",
    description:
      "Discover the transformative impact of augmented reality (AR) on various industries, from gaming and education to healthcare and manufacturing. Uncover the latest AR technologies, groundbreaking applications, and the future possibilities of this immersive tech.",
    publish_date: "2025-03-02",
    author_name: "Mir Hussain",
    blog_image:
      "https://media.licdn.com/dms/image/D4D12AQHvTniQX6OVlQ/article-cover_image-shrink_720_1280/0/1670407089131?e=2147483647&v=beta&t=p_20uM0MxufGmxjzczZz4HxCp9BbhLADoQmsWR4KD1I",
    total_likes: "950",
  },
];
export const GET = async () => {
  return NextResponse.json(blogs);
};

export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = { ...blog, id: blogs.length + 1 };
  blogs.push(newBlog);
  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
