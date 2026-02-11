'use client';

import React from 'react';
import Image from 'next/image';

const Abouts = () => {
  return (
    <div className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col sm:flex-row gap-8 items-center">

    
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl font-bold mb-4">A9 Dog Training Academy</h1>
          <h2 className="text-gray-800 mb-4">
            Intro <span className="text-orange-400">Who We Are</span>
          </h2>
          <p className="text-gray-700 text-justify">
            A9 Dog Training Academy, based in the beautiful coastal town of Diani, is a leading dog training service provider in Kenya. With years of experience, we specialize in obedience training, behavioral correction, and advanced skill development for dogs of all breeds. Our professional trainers are committed to ensuring your furry companions are disciplined, happy, and well-adjusted. While our headquarters are in Diani, our services extend across the country, reaching pet owners in Nairobi, Mombasa, Kisumu, and beyond. At A9 Dog Training Academy, we believe in building a strong bond between dogs and their owners through compassionate, effective, and consistent training methods, making us the trusted choice for dog lovers nationwide.
          </p>
        </div>

        
        <div className="w-full sm:w-1/2 flex gap-4">

          <div className="w-2/3 h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/dogo.jpeg"
              alt="Dog Training Main"
              fill
              className="object-cover rounded-lg"
            />
          </div>

        
          <div className="w-1/3 flex flex-col gap-4">
            <div className="relative h-48 sm:h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero1.jpeg"
                alt="Dog Training 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48 sm:h-48 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ob.jpeg"
                alt="Dog Training 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Abouts;
