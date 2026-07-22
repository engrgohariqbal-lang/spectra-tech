"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ZoomIn } from "lucide-react";

export function ProductGallery({ images = [], productName = "Product Image" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
  });
  const containerRef = useRef(null);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] sm:aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
        <span className="text-slate-400 font-medium">No Image Available</span>
      </div>
    );
  }

  const handleMouseMove = (e) => {
    if (!containerRef.current || !isZoomed) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position as a percentage
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      {/* Main Image Container */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-square bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-crosshair group shadow-sm transition-all duration-300"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsZoomed(!isZoomed)} // Fallback for touch/click
      >
        <Image
          src={images[activeIndex]}
          alt={`${productName} - View ${activeIndex + 1}`}
          fill
          unoptimized
          className={cn(
            "object-contain p-8 transition-transform duration-200 ease-out",
            isZoomed ? "scale-[2.5]" : "scale-100 group-hover:scale-105"
          )}
          style={isZoomed ? zoomStyle : undefined}
          priority
        />
        
        {/* Helper Badge (disappears on hover) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 border border-slate-100">
          <ZoomIn className="w-3.5 h-3.5" />
          Hover to Zoom
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-white",
                activeIndex === idx 
                  ? "border-primary shadow-md opacity-100" 
                  : "border-transparent opacity-60 hover:opacity-100 hover:border-slate-200"
              )}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                unoptimized
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
