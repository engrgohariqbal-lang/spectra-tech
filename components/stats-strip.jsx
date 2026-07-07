"use client";

import React, { useEffect, useState, useRef } from "react";
import { stats } from "@/lib/data/content";

function useCountUp(endValue, duration = 2000, trigger) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    let animationFrame;
    
    // Extract numeric part (e.g. "200+" -> 200)
    const endNumeric = parseInt(endValue.replace(/[^0-9]/g, "")) || 0;
    if (endNumeric === 0) {
      setCount(endNumeric);
      return;
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * endNumeric));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [endValue, duration, trigger]);

  // Re-append any non-numeric suffix (e.g., "+")
  const suffix = endValue.replace(/[0-9]/g, "");
  return count + suffix;
}

function StatItem({ value, label }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animatedValue = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-white mb-4">
        {isVisible ? animatedValue : "0"}
      </div>
      <div className="w-12 h-1 bg-accent mb-4 rounded-full transition-all duration-1000 delay-300" style={{ width: isVisible ? '3rem' : '0' }}></div>
      <div className="text-sm md:text-base font-medium text-slate-200">
        {label}
      </div>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary/20 md:divide-white/10">
          {stats.map((stat, idx) => (
            <StatItem key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
