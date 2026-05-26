"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import Ticker from "./components/Ticker";
import CalendarWidget from "./components/CalendarWidget";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. SCROLLING TICKER (Full Width) */}
      <Ticker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 2. HERO SECTION (Split Layout: Text Left | Calendar Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8 mb-20">
          
          {/* Left Side: Content */}
          <div className="text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Unlock Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Full Potential
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-600 max-w-lg leading-relaxed"
            >
              Welcome to <strong>VidyaVerse</strong>, where we bridge the gap between rigorous 
              <span className="text-indigo-600 font-semibold"> Academic Excellence</span> and 
              profound <span className="text-purple-600 font-semibold"> Spiritual Wisdom</span>. 
              Manage your schedule, access lecture notes, and find your inner peace—all in one place.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-2"
            >
              <Link href="/academic" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition flex items-center">
                Start Learning <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/spiritual" className="bg-white text-purple-600 border-2 border-purple-100 px-8 py-3 rounded-full font-bold shadow-sm hover:border-purple-300 hover:bg-purple-50 transition">
                Spiritual Zone
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Calendar & Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* The Calendar Widget */}
            <div className="relative z-10 w-full max-w-sm">
              <CalendarWidget />
              
              
            
            </div>
          </motion.div>
        </div>

        {/* 3. FEATURE CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm border border-indigo-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Academic Library</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Dive into our comprehensive database of resources tailored for Year 1 through Year 4. 
              Access high-quality video lectures, detailed PDF notes, and previous year question papers.
            </p>
            <Link href="/academic" className="text-indigo-600 font-semibold hover:underline">Browse Subjects &rarr;</Link>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm border border-purple-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Spiritual Sanctuary</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              A dedicated space for mindfulness. Explore daily affirmations, meditation guides, and 
              ancient wisdom to maintain mental balance amidst your rigorous academic schedule.
            </p>
            <Link href="/spiritual" className="text-purple-600 font-semibold hover:underline">Enter Sanctuary &rarr;</Link>
          </motion.div>
        </div>

        {/* 5. NEW SECTION: STUDENT VOICES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Student Voices</h2>
            <p className="text-slate-600 mt-2">Hear from those balancing grades and growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 italic">"The academic notes are lifesavers during exam week, but the meditation tracks kept me sane. Truly the best of both worlds."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">AS</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Amit Sharma</p>
                  <p className="text-xs text-slate-500">Year 3, MBBS</p>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 italic">"I used to get panic attacks before math tests. The 'Exam Anxiety' guided session in the Spiritual Zone actually works."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600">PR</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Priya Rao</p>
                  <p className="text-xs text-slate-500">Year 2, MBBS</p>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6 italic">"Finally, a platform that understands students are humans, not robots. The UI is beautiful and the content is top-tier."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">RK</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Rahul Kumar</p>
                  <p className="text-xs text-slate-500">Year 4, MBBS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. EXPANDED CONTENT SECTION (Mission) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission at VidyaVerse</h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg mb-8">
            We believe that true education is not just about filling a bucket, but lighting a fire. 
            At VidyaVerse, we strive to create a holistic ecosystem where students can excel in their 
            careers without losing touch with their inner selves. By integrating modern technology with 
            timeless values, we are shaping the leaders of tomorrow.
          </p>
        </div>

      </div>
    </div>
  );
}