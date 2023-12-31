import React from "react";
import Navbar from "../components/Navbar";
import Biography from "../components/Biography";

export default function Bio() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
        <Biography/>
      </main>
    );
}