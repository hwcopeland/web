import React from "react"; 
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

export default function Blog() {
    return (
      <div className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <h1 className="text-5xl text-center">
            Blog
        </h1>
        <Posts />
      </div>
    );
  }