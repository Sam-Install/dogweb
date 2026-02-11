'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.jpeg"
              alt="A9 Dog Training Academy"
              fill
              className="object-contain rounded"
            />
          </div>
          <span className="font-bold text-lg whitespace-nowrap">
            A9 Dog Training Academy
          </span>
        </div>

    
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <IoMdCall />
            <span className="text-sm">0789 286 087</span>
          </div>
        </div>

        
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>

    
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-white text-gray-700">
            
            <button
              className="text-2xl mb-8"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
              <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>

            <div className="mt-10 flex items-center gap-2">
              <IoMdCall />
              <span>0789 286 087</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
