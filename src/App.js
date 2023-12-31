// Desc: This is the main file for the application
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bio from "./pages/bio";
import Landing from "./pages/landing";
import Blog from "./pages/blog";
import "./index.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/bio" element={<Bio/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
}
