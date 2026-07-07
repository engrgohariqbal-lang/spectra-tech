import React from "react";
import { Play } from "lucide-react";

export const metadata = {
  title: "Videos",
  description: "Watch videos of our products, factory, and service center.",
};

const videoCategories = [
  {
    title: "Factory & Operations",
    videos: [
      { id: 1, title: "Inside Our Manufacturing Facility" },
      { id: 2, title: "Quality Control Processes" }
    ]
  },
  {
    title: "Product Demonstrations",
    videos: [
      { id: 3, title: "OES Spectrometer in Action" },
      { id: 4, title: "Handheld XRF Quick Guide" },
      { id: 5, title: "Carbon Sulfur Analyzer Setup" }
    ]
  },
  {
    title: "Service Center",
    videos: [
      { id: 6, title: "Routine Maintenance Tutorial" }
    ]
  }
];

export default function VideoPage() {
  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Video Library</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Explore our video resources for product demonstrations, facility tours, and service guides.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {videoCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.videos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all mb-4">
                      {/* Placeholder for YouTube Embed or Thumbnail */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-700/80 group-hover:bg-slate-700/50 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                          <Play className="w-6 h-6 ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <span className="text-white font-bold text-sm tracking-wider uppercase">Video {video.id}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-slate-800 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
