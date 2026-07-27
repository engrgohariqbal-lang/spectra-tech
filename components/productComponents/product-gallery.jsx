"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProductGallery({ images = [], productName = "Product Image" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
  });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position as a percentage
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleImageClick = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsZoomed(!isZoomed); // Fallback for desktop click
    } else {
      setLightboxIndex(activeIndex);
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
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
        onClick={handleImageClick}
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
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none items-center gap-1.5 border border-slate-100">
          <ZoomIn className="w-3.5 h-3.5" />
          Hover to Zoom
        </div>
        <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 shadow-sm opacity-100 pointer-events-none flex items-center gap-1.5 border border-slate-100">
          <ZoomIn className="w-3.5 h-3.5" />
          Tap to Open
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
      
      {/* Lightbox Modal for Mobile/Tablet */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-[#111] flex items-center justify-center transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center p-4 sm:p-8" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all z-[110]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}
            
            <div className="relative w-full h-[80vh] flex items-center justify-center">
              <Image
                src={images[lightboxIndex]}
                alt={`${productName} - Lightbox View ${lightboxIndex + 1}`}
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all z-[110]"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}
          </div>
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
