import React from "react";
import { PostCard, PostWidget, BlogHeader } from "./components";
import { getPosts } from "./services/queries";

export default function Blog({ posts }) {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto px-10 mb-8">
        <BlogHeader />
      </div>
          <div className="lg:col-span-8 col-span-1">
            {posts && posts.length > 0 ? (
              posts.map((post, index) => (
                <PostCard post={post} key={post.title} />
              ))
            ) : (
              <p>No posts found.</p>
            )}

        <div className="lg:col-span-4 col-span-1">
          <div className="sticky realtive top-4">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getData() {
  try {
    const posts = await getPosts();
    console.log(posts); // Debug statement

    return {
      result: { posts }
    };
  } catch (error) {
    console.error(error);
    return {
      result: { posts: [] }
    };
  }
}
