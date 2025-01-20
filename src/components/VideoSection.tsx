import React from 'react';

export const VideoSection = () => {
  return (
    <section className="w-full bg-primary py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/d_k73EtTE4A"
            title="Legacy Families of West Garfield Park"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};