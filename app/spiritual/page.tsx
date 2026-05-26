"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sun, 
  Book, 
  Feather, 
  Headphones, 
  ArrowRight, 
  Flower2, 
  Quote 
} from "lucide-react";

export default function SpiritualPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-stone-900 py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full blur-[128px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-orange-300 text-sm font-medium mb-6">
               <Flower2 className="w-4 h-4" /> The Inner Journey
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-100 tracking-tight mb-6">
              Wisdom for the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-200">Modern Soul</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 font-light">
              Explore ancient scriptures, guided meditations, and timeless philosophy to find balance in a chaotic world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DAILY WISDOM (Verse of the Day) --- */}
      <section className="-mt-12 relative z-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-stone-200 p-8 text-center">
            <Quote className="w-8 h-8 text-orange-400 mx-auto mb-4 opacity-50" />
            <p className="text-xl md:text-2xl font-serif text-stone-800 italic mb-4">
                "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
            </p>
            <p className="text-sm font-bold text-orange-600 uppercase tracking-widest">
                — Bhagavad Gita 2.47
            </p>
        </div>
      </section>

      {/* --- CATEGORIES GRID --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Bhagavad Gita */}
            <Link href="/spiritual/gita" className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
                    <Book className="w-32 h-32 text-orange-500" />
                </div>
                <div className="p-10">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                        <Book className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Bhagavad Gita</h3>
                    <p className="text-stone-600 mb-6">Decode the divine song. Chapter-wise breakdowns with practical applications for student life.</p>
                    <span className="inline-flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition">
                        Start Reading <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </div>
            </Link>

            {/* Card 2: Meditation */}
            <Link href="/spiritual/meditation" className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
                    <Sun className="w-32 h-32 text-amber-500" />
                </div>
                <div className="p-10">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                        <Headphones className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Meditation Lab</h3>
                    <p className="text-stone-600 mb-6">Guided sessions for focus, anxiety relief, and sleep. Backed by neuroscience and tradition.</p>
                    <span className="inline-flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition">
                        Listen Now <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </div>
            </Link>

            {/* Card 3: Vedic Philosophy */}
            <Link href="/spiritual/vedic" className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
                    <Feather className="w-32 h-32 text-emerald-500" />
                </div>
                <div className="p-10">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                        <Feather className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Vedic Wisdom</h3>
                    <p className="text-stone-600 mb-6">Concepts like Karma, Dharma, and Atman explained simply through modern analogies.</p>
                    <span className="inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition">
                        Explore Concepts <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </div>
            </Link>

        </div>
      </section>

    </div>
  );
}