"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, Star } from "lucide-react";
import { spiritualContent } from "../spiritualData"; // Import the data we just created

export default function GitaIndexPage() {
  const data = spiritualContent["gita"];

  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* --- HEADER --- */}
      <div className="bg-stone-900 text-stone-100 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
            <Link 
                href="/spiritual" 
                className="inline-flex items-center text-stone-400 hover:text-white transition mb-6 text-sm"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Spiritual Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4">
                {data.title}
            </h1>
            <p className="text-xl text-stone-300 italic font-serif">
                "{data.subtitle}"
            </p>
        </div>
      </div>

      {/* --- CHAPTER LIST --- */}
      <div className="max-w-3xl mx-auto px-4 py-12 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
            
            {/* List Header */}
            <div className="bg-amber-50 px-6 py-4 border-b border-amber-100 flex items-center justify-between">
                <span className="font-bold text-amber-900 uppercase tracking-wider text-xs">Table of Contents</span>
                <BookOpen className="w-5 h-5 text-amber-800 opacity-50" />
            </div>

            {/* Chapters */}
            <div className="divide-y divide-stone-100">
                {data.chapters.map((chapter: any) => (
                    <Link 
                        key={chapter.id} 
                        href={`/spiritual/gita/${chapter.slug}`} // This will go to the specific chapter page
                        className="block p-6 hover:bg-stone-50 transition group"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-serif font-bold text-stone-800 group-hover:text-amber-700 transition">
                                    {chapter.title}
                                </h3>
                                <p className="text-stone-500 text-sm mt-1 max-w-lg">
                                    {chapter.desc}
                                </p>
                            </div>
                            <div className="text-stone-300 group-hover:text-amber-600 transition">
                                <ChevronRight className="w-6 h-6" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            {/* Footer Note */}
            <div className="p-6 bg-stone-50 text-center border-t border-stone-100">
                <p className="text-sm text-stone-500">
                    More chapters are being translated and added weekly.
                </p>
            </div>

        </div>
      </div>

    </div>
  );
}