import PostCard from "@/components/PostCard";
import React from "react";

const PostPage = async () => {
  const res = await fetch(
    "http://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const posts = await res.json();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4 mt-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
