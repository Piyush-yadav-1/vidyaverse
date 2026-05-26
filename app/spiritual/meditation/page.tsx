"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { ArrowLeft, Play, Pause, Headphones, Clock, Heart } from "lucide-react";
import { spiritualContent } from "../spiritualData";

export default function MeditationPage() {
  const data = spiritualContent["meditation"];
  
  // State to track which track is playing (0, 1, 2...)
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    if (playingId === index) {
      setPlayingId(null); // Pause if clicking the same track
    } else {
      setPlayingId(index); // Play new track
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-teal-900 h-96 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center z-10">
           <Link 
                href="/spiritual" 
                className="absolute top-8 left-8 text-teal-200 hover:text-white flex items-center transition"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>
            
            {/* Animated Content using Framer Motion */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-800/50 backdrop-blur-sm mb-6 border border-teal-700">
                    <Headphones className="w-8 h-8 text-teal-300" />
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-tight">
                    {data?.title || "Meditation Lab"}
                </h1>
                <p className="text-xl text-teal-100 max-w-2xl mx-auto font-light">
                    {data?.subtitle || "Tools for the Mind"}. Scientifically designed frequencies and guided visualization.
                </p>
            </motion.div>
        </div>
      </div>

      {/* --- AUDIO LIST --- */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
            
            <div className="p-6 border-b border-stone-100 bg-stone-50/50 flex justify-between items-center">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Available Sessions</span>
                <span className="text-xs font-bold text-teal-600">{data?.sessions?.length || 0} Tracks</span>
            </div>

            <div className="divide-y divide-stone-100">
                {data?.sessions?.map((session: any, index: number) => (
                    <div 
                        key={index} 
                        className={`p-6 transition-all duration-300 ${playingId === index ? 'bg-teal-50/50' : 'hover:bg-stone-50'}`}
                    >
                        <div className="flex items-center gap-6">
                            
                            {/* Play Button */}
                            <button 
                                onClick={() => togglePlay(index)}
                                className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md ${
                                    playingId === index 
                                    ? 'bg-teal-600 text-white scale-110' 
                                    : 'bg-white text-stone-800 border border-stone-200 hover:border-teal-400 hover:text-teal-600'
                                }`}
                            >
                                {playingId === index ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
                            </button>

                            {/* Info */}
                            <div className="flex-1">
                                <h3 className={`text-lg font-bold ${playingId === index ? 'text-teal-800' : 'text-stone-800'}`}>
                                    {session.title}
                                </h3>
                                <div className="flex items-center gap-4 mt-2 text-sm text-stone-500">
                                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {session.duration}</span>
                                    <span className="flex items-center"><Heart className="w-3 h-3 mr-1" /> Guided</span>
                                </div>
                            </div>

                            {/* Fake Audio Visualizer - Only shows when playing */}
                            {playingId === index && (
                                <div className="hidden sm:flex gap-1 h-8 items-end">
                                    <div className="w-1 bg-teal-400 animate-[bounce_1s_infinite]"></div>
                                    <div className="w-1 bg-teal-400 animate-[bounce_1.2s_infinite]"></div>
                                    <div className="w-1 bg-teal-400 animate-[bounce_0.8s_infinite]"></div>
                                    <div className="w-1 bg-teal-400 animate-[bounce_1.1s_infinite]"></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

    </div>
  );
}