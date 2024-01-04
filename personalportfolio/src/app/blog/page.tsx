import React from "react";
import Image from "next/image";
import { PostCard, PostWidget, BlogHeader } from "./components";
import { client, urlFor } from "../lib/sanity";
import { simpleblogcard } from "../lib/interface";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
      description,
      "currentSlug": slug.current,    
      titleImage,
  }
  `;
  const data = await client.fetch(query)
  return data;
}


export default async function Blog() {
  const data: simpleblogcard[] = await getData();
  console.log(data);
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto px-10 mb-8">
        <BlogHeader />
      </div>
      <div className="container mx-auto px-10">
          <div className="grid grid-cols 1 lg:grid-cols-4 mt-5">
            {data.map((post, idx ) => (
              <PostCard key={idx}>
                <Image 
                src={urlFor(post.titleImage).url()} 
                alt="image" 
                width={500} 
                height={500}
                className="rounded-t-lg h-[200px] object-cover"/>
              </PostCard>
            ))}
          </div>
      <div className="sticky realtive top-4">
        <PostWidget />
      </div>
      </div>
      </div>
  );
}

