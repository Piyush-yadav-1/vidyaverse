"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Globe, 
  Heart, 
  Award, 
  ArrowRight, 
  Stethoscope 
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-sm font-semibold mb-6">
               <Stethoscope className="w-4 h-4" /> Revolutionizing MedEd
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Medical Education, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Reimagined.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              VidyaVerse is a next-generation academic platform designed to make complex medical concepts accessible, visual, and easy to master.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION (Split Layout) --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Left: Text */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Medical education is often fragmented, relying on heavy textbooks and disconnected resources. We believe learning shouldn't be a struggle against the material.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At <span className="font-semibold text-indigo-600">VidyaVerse</span>, we combine high-yield video lectures with structured, paper-like notes to create a seamless learning ecosystem for medical students across the globe.
                    </p>
                    
                    <div className="pt-4 grid grid-cols-2 gap-6">
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
                            <h3 className="font-bold text-slate-900">Structured Curriculum</h3>
                            <p className="text-sm text-slate-600">Organized by Subject, Unit, and Topic.</p>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                            <Heart className="w-8 h-8 text-emerald-600 mb-2" />
                            <h3 className="font-bold text-slate-900">Student Centric</h3>
                            <p className="text-sm text-slate-600">Built for clarity, retention, and rapid revision.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Image/Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Medical Study Group" 
                        className="relative rounded-2xl shadow-2xl object-cover h-96 w-full"
                    />
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-indigo-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-300 mb-2">50+</div>
                    <div className="text-indigo-100 font-medium">Detailed Topics</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-300 mb-2">100%</div>
                    <div className="text-indigo-100 font-medium">Free Access</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-300 mb-2">24/7</div>
                    <div className="text-indigo-100 font-medium">Availability</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-indigo-300 mb-2">High</div>
                    <div className="text-indigo-100 font-medium">Yield Notes</div>
                </div>
            </div>
        </div>
      </section>

      {/* --- THE TEAM --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
                VidyaVerse is built by passionate medical students and educators dedicated to simplifying healthcare education.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Founder+Name&background=0D8ABC&color=fff" alt="Founder" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Dr. Aayush Yadav</h3>
                    <p className="text-indigo-600 font-medium mb-4">Founder & Lead Educator</p>
                    <p className="text-slate-500 text-sm">
                        Medical student with a passion for teaching and web development. Creating the bridge between tech and medicine.
                    </p>
                </div>

                {/* Team Member 2 (Placeholder) */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Content+Team&background=10b981&color=fff" alt="Content Team" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Dr. Aayush Yadav</h3>
                    <p className="text-emerald-600 font-medium mb-4">Research & Notes</p>
                    <p className="text-slate-500 text-sm">
                        Dedicated to ensuring every note is accurate, up-to-date, and follows the latest medical guidelines.
                    </p>
                </div>

                {/* Team Member 3 (Placeholder) */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                         <img src="https://ui-avatars.com/api/?name=Tech+Support&background=6366f1&color=fff" alt="Tech" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Piyush</h3>
                    <p className="text-purple-600 font-medium mb-4">Platform Stability</p>
                    <p className="text-slate-500 text-sm">
                        Ensuring VidyaVerse runs smoothly, loads fast, and is accessible on all your devices.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start learning?</h2>
            <p className="text-lg text-slate-600 mb-8">
                Dive into our structured courses and take your medical knowledge to the next level.
            </p>
            <Link 
                href="/academic"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Library
            </Link>
        </div>
      </section>

    </div>
  );
}