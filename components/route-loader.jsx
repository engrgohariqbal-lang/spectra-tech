"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function LoaderContent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lastPathname = useRef(pathname);
  const lastSearchParams = useRef(searchParams);
  const loadingStartTime = useRef(0);

  useEffect(() => {
    // Check if pathname or search params actually changed
    const pathChanged = pathname !== lastPathname.current;
    const searchChanged =
      searchParams.toString() !== lastSearchParams.current.toString();

    if (pathChanged || searchChanged) {
      if (isLoading) {
        const elapsed = Date.now() - loadingStartTime.current;
        const minDelay = 700; // Minimum time to show the loader to prevent quick flashes (700ms)
        const remainingTime = Math.max(0, minDelay - elapsed);

        const timer = setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);

        // Update current refs
        lastPathname.current = pathname;
        lastSearchParams.current = searchParams;

        return () => clearTimeout(timer);
      }
    }

    // Always keep refs up to date if loading is false
    if (!isLoading) {
      lastPathname.current = pathname;
      lastSearchParams.current = searchParams;
    }
  }, [pathname, searchParams, isLoading]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Find the closest anchor tag
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, hash links, javascript:, target="_blank", or modifier clicks
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//");
      const isSpecial =
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:");
      const isHash = href.startsWith("#");
      const isTargetBlank = anchor.getAttribute("target") === "_blank";
      const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

      if (isExternal || isSpecial || isHash || isTargetBlank || isModified) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Only load if navigating to a different page or query parameter
        const isDifferentPage = targetUrl.pathname !== currentUrl.pathname;
        const isDifferentSearch = targetUrl.search !== currentUrl.search;

        if (isDifferentPage || isDifferentSearch) {
          loadingStartTime.current = Date.now();
          setIsLoading(true);
        }
      } catch (err) {
        // Ignore parsing errors
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-md select-none pointer-events-auto"
        >
          {/* Main loader card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative px-12 py-10 rounded-2xl bg-slate-900/60 border border-white/10 shadow-2xl flex flex-col items-center justify-center max-w-sm w-full mx-4 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-[#1a5fad]/20 to-teal-500/20 blur-3xl opacity-60 rounded-full" />

            {/* Animation Container */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              {/* Outer Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a5fad] to-teal-400 opacity-20 blur-xl animate-pulse" />

              {/* Outer Slow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
                className="absolute inset-0 rounded-full border border-dashed border-[#1a5fad]/40"
              />

              {/* Inner Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                className="absolute inset-2 rounded-full border-2 border-t-[#1a5fad] border-r-teal-400 border-b-transparent border-l-transparent shadow-[0_0_15px_rgba(26,95,173,0.3)]"
              />

              {/* Central Favicon Container */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  repeat: Infinity,
                  ease: "easeInOut",
                  duration: 2,
                }}
                className="relative w-16 h-16 rounded-full bg-white/95 p-3 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200"
              >
                <img
                  src="/favicon.ico"
                  alt="SpectraTech Logo"
                  className="w-full h-full object-contain select-none"
                  draggable="false"
                />
              </motion.div>
            </div>

            {/* Loading text */}
            <div className="relative text-center z-10">
              <motion.h3
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="text-white font-semibold text-lg tracking-wide"
              >
                SpectraTech
              </motion.h3>

              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="text-slate-400 text-sm font-medium">
                  Navigating
                </span>
                <span className="flex gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function RouteLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderContent />
    </Suspense>
  );
}
