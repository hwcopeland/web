import React from "react"; 
import Navbar from "../components/Navbar";
import { PostCard, PostWidget, Categories, BlogHeader } from "../components";
import { getPosts } from "../services";


export default function Blog({posts}) {
    return (
      <div className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
        <div className="container mx-auto px-10 mb-8">
                <BlogHeader/>
        </div>
        <div className="grid grid-col-1 lg:grid-col-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
                {posts.map((post, index) => <PostCard post={post} key={post.title} />)}
            </div>
            <div className="lg:col-span-4 col-span-1">
                <div className="sticky realtive top-4">
                    <PostWidget/>
                    <Categories/>
                </div>
            </div>
        </div>
      </div>
    );
  }

  export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
      props: {posts}
    };
  }



