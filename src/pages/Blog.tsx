import { useState, useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { BlogFeed } from "@/components/BlogFeed";
import { NewsFilter } from "@/components/NewsFilter";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
          Community Updates
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Stay informed about the latest developments in West Garfield Park and surrounding neighborhoods. 
          Our automated system collects and curates news relevant to our community's mission.
        </p>
        <NewsFilter />
        <BlogFeed />
      </div>
    </div>
  );
};

export default Blog;