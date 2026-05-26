import { BookOpen, Sparkles, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-4">Vidya<span className="text-indigo-500">Verse</span></h2>
          <p className="text-sm leading-relaxed mb-6 text-slate-400">
            A next-generation platform merging university curriculum with ancient spiritual wisdom. Empowering minds, enriching souls.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition">X</div>
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition">In</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link href="/academic" className="hover:text-indigo-400 transition">Academic Library</Link></li>
            <li><Link href="/spiritual" className="hover:text-purple-400 transition">Spiritual Zone</Link></li>
            <li><Link href="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Student Hub</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition">Exam Schedule</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Study Materials</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Video Lectures</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Meditation Tracks</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>University Campus, Sonipat, Haryana, India 131001</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>contact@vidyaverse.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>+91 83078 21174</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} VidyaVerse. All rights reserved. Built for Excellence.
      </div>
    </footer>
  );
}