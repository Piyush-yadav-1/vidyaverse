"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, FileText, Lock, ArrowRight, PlayCircle } from "lucide-react";
import { topicContent } from "../../topicData"; // Import data

export default function VideoPage() {
  const params = useParams();
  
  // Handle array or string params safely
  const subjectId = Array.isArray(params.subjectId) ? params.subjectId[0] : params.subjectId;
  const topicId = Array.isArray(params.topicId) ? params.topicId[0] : params.topicId;

  const content = topicContent[topicId as string];

  if (!content) return <div className="p-10 text-center">Topic not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      
      {/* HEADER NAV */}
      <div className="flex items-center justify-between mb-6">
        <Link href={`/academic/${subjectId}`} className="text-sm text-slate-500 hover:text-indigo-600 flex items-center transition">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to {subjectId}
        </Link>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center">
                <PlayCircle className="w-3 h-3 mr-1"/> Video Mode
            </span>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{content.title}</h1>
      <p className="text-slate-500 mb-8 flex items-center gap-2">
        <Clock className="w-4 h-4" /> Duration: {content.duration}
      </p>

      {/* VIDEO PLAYER */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl aspect-video mb-10 relative">
        {content.videoUrl === "coming-soon" ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-900">
             <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <Lock className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lecture Coming Soon</h3>
              <p className="text-slate-400">Content is being recorded.</p>
          </div>
        ) : (
          <iframe 
            width="100%" height="100%" src={content.videoUrl} title="Video" 
            allowFullScreen className="absolute inset-0 border-0"
          />
        )}
      </div>

      {/* NAVIGATION TO NOTES */}
      <div className="flex justify-end">
        <Link 
            href={`/academic/${subjectId}/${topicId}/notes`}
            className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-indigo-600 hover:shadow-md px-6 py-4 rounded-xl transition-all w-full md:w-auto"
        >
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition">
                <FileText className="w-6 h-6" />
            </div>
            <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Next Step</p>
                <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-700">Read Lecture Notes</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 ml-auto transition" />
        </Link>
      </div>

    </div>
  );
}