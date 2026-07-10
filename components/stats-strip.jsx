"use client";

import React, { useEffect, useState, useRef } from "react";
import { stats } from "@/lib/data/content";

function useCountUp(endValue, duration = 2000, trigger) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime = null;
    let animationFrame;

    const endNumeric = parseInt(endValue.replace(/[^0-9]/g, "")) || 0;
    if (endNumeric === 0) {
      setCount(endNumeric);
      return;
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animatedValue = useCountUp(value, 2000, isVisible);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center py-12 px-6"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tight">
        {isVisible ? animatedValue : "0"}
      </div>
      <div
        className="w-12 h-0.5 bg-[#c8d400] mb-4 transition-all duration-700"
        style={{ width: isVisible ? "3rem" : "0" }}
      />
      <div className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-widest text-center">
        {label}
      </div>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-primary border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <StatItem key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
