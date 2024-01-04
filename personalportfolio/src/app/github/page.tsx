import { NextResponse } from "next/server";
import React from "react";
import { GET_REPOSITORY } from "./query";
import { client } from "../../../client";



export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_REPOSITORY,
    variables: {
      username: "vercel",
      repository: "next.js",
    },
  });

  return {
    props: {
      data,
    },
  };
}

export default function repo() {

    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        testing
        
      </main>
    );
}