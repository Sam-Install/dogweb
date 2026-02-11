'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  '/hero1.jpeg',
  '/logo.jpeg'
];

export default function Hero4() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover w-full h-full"
          />
          
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Home/Contacts
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl">
         Contact Us we Would Love To Hear From You
        </p>
      </div>

    </section>
  );
}
