"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, Share2 } from "lucide-react";
import { chapterText } from "../../spiritualData"; 

export default function ChapterReader() {
  const params = useParams();
  const slug = Array.isArray(params.chapterSlug) ? params.chapterSlug[0] : params.chapterSlug;
  
  const content = chapterText[slug as string];
  const [openPurport, setOpenPurport] = useState<number | null>(null);

  const togglePurport = (index: number) => {
    setOpenPurport(openPurport === index ? null : index);
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
            <h1 className="text-2xl font-serif text-stone-600">Chapter Content Coming Soon</h1>
            <Link href="/spiritual/gita" className="text-amber-600 hover:underline mt-4 block">Return to Index</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/spiritual/gita" className="text-stone-500 hover:text-amber-700 transition">
                <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="text-center">
                <h2 className="font-serif font-bold text-stone-900">{content.title}</h2>
                <p className="text-xs text-amber-600 font-bold">{content.sanskritTitle}</p>
            </div>
            <button className="text-stone-400 hover:text-amber-600">
                <BookOpen className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        
        {/* Intro Card */}
        <div className="bg-amber-50 rounded-xl p-8 mb-10 text-center border border-amber-100">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-2 tracking-wide">
                {content.sanskritTitle}
            </h1>
            <p className="text-amber-800 italic font-serif mt-2">
                {content.summary}
            </p>
        </div>

        {/* Verses Loop */}
        <div className="space-y-8">
            {content.verses.map((verse: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                    
                    {/* Verse Header */}
                    <div className="bg-stone-100 px-6 py-3 border-b border-stone-200 flex justify-between items-center">
                        <span className="font-bold text-stone-600 text-sm">Shloka {verse.number}</span>
                        <Share2 className="w-4 h-4 text-stone-400 cursor-pointer hover:text-amber-600" />
                    </div>

                    <div className="p-6 md:p-8">
                        {/* 1. ORIGINAL SANSKRIT (Larger Font) */}
                        <div className="text-center mb-6">
                            <p className="font-serif text-2xl md:text-3xl text-stone-900 leading-relaxed whitespace-pre-line font-medium text-amber-950">
                                {verse.sanskrit}
                            </p>
                        </div>

                        {/* 2. TRANSLITERATION (Phonetic) */}
                        <div className="text-center mb-8 border-b border-stone-100 pb-6">
                            <p className="text-stone-500 italic text-sm md:text-base leading-relaxed whitespace-pre-line font-serif">
                                {verse.transliteration}
                            </p>
                        </div>

                        {/* 3. TRANSLATION */}
                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Translation</h4>
                            <p className="text-lg text-stone-800 font-serif leading-relaxed">
                                {verse.translation}
                            </p>
                        </div>

                        {/* 4. PURPORT */}
                        <div className="border-t border-stone-100 pt-4">
                            <button 
                                onClick={() => togglePurport(index)}
                                className="flex items-center text-amber-700 font-semibold text-sm hover:text-amber-800 transition"
                            >
                                {openPurport === index ? "Hide Meaning" : "Read Meaning"}
                                {openPurport === index ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                            </button>

                            {openPurport === index && (
                                <div className="mt-4 bg-stone-50 p-4 rounded-lg text-stone-700 text-sm leading-7 font-serif">
                                    <span className="font-bold block mb-1 text-stone-900">Purport:</span>
                                    {verse.purport}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}