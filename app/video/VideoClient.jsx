"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function VideoClient({ videoCategories }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/60 z-10" />
          <Image
            src="https://picsum.photos/seed/spectratech-video-hero/1920/1080"
            alt="Video Library"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                Media Center
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Explore Our <br className="hidden md:block" /> Video Library
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Watch detailed product demonstrations, take a tour of our
              facility, and discover our service guides.
            </motion.p>
          </motion.div>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-[50px] md:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.44,189.2,92.83,233.15,78,277.1,67.31,321.39,56.44Z"
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 relative z-30 -mt-10 md:-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
            {videoCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
              >
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-5 mb-10 border-b border-slate-200 pb-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl shrink-0 border border-primary/10 shadow-sm">
                    {String(catIdx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {category.title}
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.videos.map((video) => (
                    <motion.div
                      key={video.id}
                      variants={fadeIn}
                      className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                      <div className="relative aspect-video bg-slate-900 overflow-hidden w-full p-2 rounded-t-3xl border-b border-slate-100">
                        <div className="w-full h-full relative rounded-2xl overflow-hidden">
                          <Image
                            src={`https://picsum.photos/seed/spectratech-vid-${video.id}/600/400`}
                            alt={video.title}
                            fill
                            className="object-cover opacity-70 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                          />
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30 pl-1.5 border-2 border-white/20">
                              <Play className="w-8 h-8" fill="currentColor" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="mt-6 flex items-center text-sm font-bold text-primary uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                          Watch Video <Play className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
