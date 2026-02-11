'use client';

import React from 'react';
import Image from 'next/image';

const Gall = () => {
  const images = [
    '/dogo.jpeg',
    '/hero1.jpeg',
    '/ceo.jpeg',
    '/yo.jpeg'

  ];

  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg group"
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gall;
