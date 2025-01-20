import React from "react";

export const VideoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square w-full max-w-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/zOS5H_aTGKM"
              title="Legacy Families Community Impact"
              className="w-full h-full rounded-2xl shadow-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] tracking-tight">
              Building Community Resilience
            </h2>
            <p className="text-lg text-[#221F26] leading-relaxed">
              This inspiring video showcases the transformative impact of community-driven initiatives in neighborhoods facing systemic challenges. At Legacy Families, we recognize that strong communities are built on the foundation of empowered families and accessible resources.
            </p>
            <p className="text-lg text-[#221F26] leading-relaxed">
              Our mission aligns perfectly with these principles of community transformation. Through our work in West Garfield Park, we're creating sustainable solutions that address health disparities, promote economic development, and foster community wellbeing. The Sankofa Wellness Village represents our commitment to building spaces that nurture both individual and collective growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};