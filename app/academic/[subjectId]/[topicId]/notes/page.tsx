"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, PlayCircle, BookOpen } from "lucide-react";
import { topicContent } from "../../../topicData"; // Import shared data

export default function NotesPage() {
  const params = useParams();

  // Handle array or string params safely
  const subjectId = Array.isArray(params.subjectId) ? params.subjectId[0] : params.subjectId;
  const topicId = Array.isArray(params.topicId) ? params.topicId[0] : params.topicId;

  const content = topicContent[topicId as string];

  if (!content) return <div className="p-10 text-center">Topic not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-white">
      
      {/* HEADER NAV */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
        <Link href={`/academic/${subjectId}/${topicId}`} className="text-sm text-slate-500 hover:text-indigo-600 flex items-center transition">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Video
        </Link>
        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full flex items-center">
            <BookOpen className="w-3 h-3 mr-1"/> Reading Mode
        </span>
      </div>

      {/* TITLE HEADER */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">{content.title}</h1>
        <p className="text-slate-500 text-sm">Official Lecture Notes</p>
      </div>

      {/* PAPER-LIKE NOTES CONTAINER */}
      <article className="prose prose-lg prose-slate mx-auto prose-headings:text-indigo-900 prose-a:text-indigo-600 prose-li:marker:text-indigo-400">
        
        {/* Render HTML Notes */}
        <div dangerouslySetInnerHTML={{ __html: content.notes }} />
        
      </article>

      {/* FOOTER NAV */}
      <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
        <Link 
            href={`/academic/${subjectId}/${topicId}`}
            className="inline-flex items-center px-6 py-3 bg-indigo-50 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition"
        >
            <PlayCircle className="w-5 h-5 mr-2" />
            Watch Lecture Video
        </Link>
      </div>

    </div>
  );
}