import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer' // <--- 1. Import the Footer

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VidyaVerse',
  description: 'Academic & Spiritual Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 2. Added 'flex flex-col' to body so Footer pushes to bottom */}
      <body className={`${inter.className} min-h-screen relative flex flex-col`}>
        
        {/* --- BACKGROUND LAYER START --- */}
        <div className="fixed inset-0 -z-10">
          
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
          
          {/* Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Image 
              src="/public/logo.png" 
              alt="Background Watermark" 
              width={800} 
              height={800}
              className="object-contain"
            />
          </div>
        </div>
        {/* --- BACKGROUND LAYER END --- */}

        <Navbar />
        
        {/* 3. Added 'flex-grow' to main. This pushes the footer down if content is short */}
        <main className="pt-20 flex-grow"> 
          {children}
        </main>

        <Footer /> {/* <--- 4. Added Footer here */}
      </body>
    </html>
  )
}
