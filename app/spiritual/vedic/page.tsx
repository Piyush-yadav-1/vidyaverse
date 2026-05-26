"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Feather, 
  RefreshCw, 
  Scale, 
  Sun, 
  Eye, 
  Heart, 
  Sparkles 
} from "lucide-react";
import { spiritualContent } from "../spiritualData";

// Helper to map string icon names to actual components
const IconMap: any = {
  refresh: RefreshCw,
  scale: Scale,
  sun: Sun,
  feather: Feather,
  eye: Eye,
  heart: Heart
};

export default function VedicPage() {
  const data = spiritualContent["vedic"];

  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-emerald-900 py-24 overflow-hidden">
        {/* Abstract Nature Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <Link 
            href="/spiritual" 
            className="absolute top-0 left-4 text-emerald-200 hover:text-white flex items-center transition md:left-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800/50 backdrop-blur-sm mb-6 border border-emerald-700">
               <Feather className="w-8 h-8 text-emerald-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-tight">
              {data?.title}
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light">
              {data?.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONCEPTS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {data?.concepts.map((item: any, index: number) => {
                const IconComponent = IconMap[item.icon] || Sparkles;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 hover:border-emerald-200 transition-colors group"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                <IconComponent className="w-6 h-6 text-emerald-700" />
                            </div>
                            <span className="text-xs font-bold text-stone-300 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                                Concept {index + 1}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-stone-800 mb-1">
                            {item.term}
                        </h3>
                        <p className="text-sm font-bold text-emerald-600 mb-4 uppercase tracking-wide">
                            {item.translation}
                        </p>
                        
                        <p className="text-stone-600 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                );
            })}

        </div>
      </section>

      {/* --- FOOTER QUOTE --- */}
      <section className="pb-24 pt-10 text-center px-4">
        <div className="max-w-2xl mx-auto">
            <p className="text-2xl font-serif italic text-stone-400">
                "Truth is one, the wise call it by many names."
            </p>
            <p className="text-sm font-bold text-stone-300 mt-4 uppercase">
                — Rig Veda
            </p>
        </div>
      </section>

    </div>
  );
}