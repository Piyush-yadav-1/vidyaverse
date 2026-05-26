"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { 
  Activity, FlaskConical, Pill, Bug, Microscope, Users, Fingerprint, 
  Stethoscope, Scissors, Baby, Smile, Eye, Ear, Syringe, Brain, Bone, 
  Scan, Sun, ArrowRight 
} from "lucide-react";

const subjects = [
  { name: "Anatomy", icon: <Activity />, color: "text-rose-500 bg-rose-50 border-rose-100", link: "/academic/anatomy" },
  { name: "Physiology", icon: <Activity />, color: "text-pink-500 bg-pink-50 border-pink-100", link: "/academic/physiology" },
  { name: "Biochemistry", icon: <FlaskConical />, color: "text-emerald-500 bg-emerald-50 border-emerald-100", link: "/academic/biochemistry" },
  { name: "Pharmacology", icon: <Pill />, color: "text-indigo-500 bg-indigo-50 border-indigo-100", link: "/academic/pharmacology" },
  { name: "Microbiology", icon: <Bug />, color: "text-lime-600 bg-lime-50 border-lime-100", link: "/academic/microbiology" },
  { name: "Pathology", icon: <Microscope />, color: "text-purple-600 bg-purple-50 border-purple-100", link: "/academic/pathology" },
  { name: "Forensic Medicine", icon: <Fingerprint />, color: "text-slate-600 bg-slate-100 border-slate-200", link: "/academic/forensic-medicine" },
  { name: "PSM", icon: <Users />, color: "text-sky-600 bg-sky-50 border-sky-100", link: "/academic/psm" },
  { name: "Medicine", icon: <Stethoscope />, color: "text-blue-600 bg-blue-50 border-blue-100", link: "/academic/medicine" },
  { name: "Surgery", icon: <Scissors />, color: "text-red-600 bg-red-50 border-red-100", link: "/academic/surgery" },
  { name: "OBG", icon: <Baby />, color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100", link: "/academic/obg" },
  { name: "Pediatrics", icon: <Smile />, color: "text-orange-500 bg-orange-50 border-orange-100", link: "/academic/pediatrics" },
  { name: "Ophthalmology", icon: <Eye />, color: "text-cyan-600 bg-cyan-50 border-cyan-100", link: "/academic/ophthalmology" },
  { name: "ENT", icon: <Ear />, color: "text-amber-600 bg-amber-50 border-amber-100", link: "/academic/ent" },
  { name: "Anesthesia", icon: <Syringe />, color: "text-teal-600 bg-teal-50 border-teal-100", link: "/academic/anesthesia" },
  { name: "Psychiatry", icon: <Brain />, color: "text-violet-600 bg-violet-50 border-violet-100", link: "/academic/psychiatry" },
  { name: "Orthopedics", icon: <Bone />, color: "text-stone-600 bg-stone-100 border-stone-200", link: "/academic/orthopedics" },
  { name: "Radiology", icon: <Scan />, color: "text-gray-800 bg-gray-100 border-gray-200", link: "/academic/radiology" },
  { name: "Dermatology", icon: <Sun />, color: "text-yellow-600 bg-yellow-50 border-yellow-100", link: "/academic/dermatology" },
];

function InnerAcademicPage() {
  const searchParams = useSearchParams();
  const query = searchParams ? (searchParams.get('q') || "") : "";

  // Filter subjects based on the Navbar search
  const filteredSubjects = subjects.filter(subject => 
    subject.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* HEADER */}
      <div className="flex flex-col items-center mb-16 space-y-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          Subject <span className="text-indigo-600">Directory</span>
        </motion.h1>
      </div>

      {/* GRID SECTION */}
      {filteredSubjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSubjects.map((item, index) => (
            <Link href={item.link} key={item.name}>
                <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group h-full flex flex-col items-start"
                >
                <div className={`p-3 rounded-xl ${item.color} mb-4`}>
                    <div className="w-8 h-8">{item.icon}</div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                </h2>
                <div className="mt-auto pt-4 w-full flex items-center text-sm font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    View Resources <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                </motion.div>
            </Link>
            ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <p className="text-xl text-slate-400">No subjects found matching "{query}"</p>
        </div>
      )}
    </div>
  );
}

// Default export wrapped with Suspense to resolve the Next.js compilation requirement
export default function AcademicPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    }>
      <InnerAcademicPage />
    </Suspense>
  );
}