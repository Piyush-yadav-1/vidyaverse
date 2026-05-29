"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Search, Menu, X, BookOpen, Sparkles, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, Suspense } from 'react';

// Master List for Dropdown (Global Search)
const subjectsList = [
  { name: "Anatomy", slug: "anatomy" },
  { name: "Physiology", slug: "physiology" },
  { name: "Biochemistry", slug: "biochemistry" },
  { name: "Pharmacology", slug: "pharmacology" },
  { name: "Microbiology", slug: "microbiology" },
  { name: "Pathology", slug: "pathology" },
  { name: "Forensic Medicine", slug: "forensic-medicine" },
  { name: "PSM", slug: "psm" },
  { name: "General Medicine", slug: "medicine" },
  { name: "General Surgery", slug: "surgery" },
  { name: "OBG", slug: "obg" },
  { name: "Pediatrics", slug: "pediatrics" },
  { name: "Ophthalmology", slug: "ophthalmology" },
  { name: "ENT", slug: "ent" },
  { name: "Anesthesia", slug: "anesthesia" },
  { name: "Psychiatry", slug: "psychiatry" },
  { name: "Orthopedics", slug: "orthopedics" },
  { name: "Radiology", slug: "radiology" },
  { name: "Dermatology", slug: "dermatology" },
];

function InnerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<{ name: string; slug: string }[]>([]);
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Local state for input
  const initialQuery = searchParams ? (searchParams.get('q') || "") : "";
  const [query, setQuery] = useState(initialQuery);
  const searchRef = useRef<HTMLDivElement>(null);

  // Sync state if URL changes safely
  useEffect(() => {
    const queryParam = searchParams ? searchParams.get('q') : null;
    
    // Wrap state dispatch in a microtask/timeout to push it out of the sync rendering loop
    const timer = setTimeout(() => {
      setQuery(queryParam || "");
    }, 0);

    return () => clearTimeout(timer);
  }, [searchParams]);

  // Debouncing Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathname === '/academic') {
        const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
        if (query) params.set('q', query);
        else params.delete('q');
        router.replace(`/academic?${params.toString()}`);
        setSuggestions([]); 
      } else {
        if (query.length > 0) {
          const filtered = subjectsList.filter(subject => 
            subject.name.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filtered);
        } else {
          setSuggestions([]);
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, pathname, router, searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSelect = (slug: string) => {
    router.push(`/academic/${slug}`);
    setQuery("");       
    setSuggestions([]); 
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- HELPER FOR ACTIVE LINKS ---
  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
    return isActive 
      ? "text-indigo-600 font-bold transition" 
      : "text-gray-600 hover:text-indigo-600 font-medium transition";
  };

  return (
    <nav className="fixed w-full z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/newlogo.png" alt="VidyaVerse Logo" width={60} height={60} className="w-10 h-10 object-contain"/>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                Vidya<span className="text-indigo-600">Verse</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8 items-center">
            
            <Link href="/" className={getLinkClass('/')}>
              Home
            </Link>
            
            <Link href="/about" className={getLinkClass('/about')}>
              About
            </Link>
            
            <Link href="/academic" className={`flex items-center ${getLinkClass('/academic')}`}>
              <BookOpen className={`w-4 h-4 mr-1.5 ${pathname?.startsWith('/academic') ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600"}`}/> 
              Academic
            </Link>

            {/* Spiritual Button with Special Active State */}
            <Link 
              href="/spiritual" 
              className={`flex items-center px-3 py-1 rounded-full transition ${
                pathname?.startsWith('/spiritual') 
                  ? "bg-purple-100 text-purple-700 font-bold" 
                  : "bg-purple-50 text-gray-600 hover:text-purple-700 font-medium"
              }`}
            >
              <Sparkles className="w-4 h-4 mr-1.5"/> 
              Spiritual
            </Link>

          </div>

          {/* SEARCH BAR */}
          <div className="hidden md:flex items-center ml-4 relative" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder={pathname === '/academic' ? "Filter subjects..." : "Search subjects..."}
                value={query}
                onChange={handleInputChange}
                className="bg-gray-100 text-gray-800 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-56 transition-all"
              />
              <button className="absolute right-2 top-2 text-gray-400 hover:text-indigo-600">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* DROPDOWN RESULTS */}
            {suggestions.length > 0 && pathname !== '/academic' && (
              <div className="absolute top-12 left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden py-2 z-50">
                {suggestions.map((subject) => (
                  <button
                    key={subject.slug}
                    onClick={() => handleSelect(subject.slug)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 flex items-center justify-between group transition-colors"
                  >
                    {subject.name}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE MENU BTN */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Main exported component wrapped in a native Suspense boundary
export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-16 bg-white border-b border-gray-200 fixed w-full top-0 z-[100]" />}>
      <InnerNavbar />
    </Suspense>
  );
}
