'use client';

import Image from 'next/image';
import React from 'react';

const Abs = () => {
  return (
    <div className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col sm:flex-row gap-8 items-center">

    
        <div className="w-full sm:w-1/2">
          <h1 className="text-gray-700 text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-6 text-justify">
            A9 Dog Training Academy, based in the beautiful Mwabungo area of Diani South Coast, is a premier dog training service provider across Kenya. We specialize in obedience training, behavioral correction, and advanced skill development for dogs of all breeds. Our mission is to build stronger bonds between dogs and their owners through professional, compassionate, and positive reinforcement methods. With years of experience and a team of certified trainers, we provide personalized programs tailored to each dog’s needs. From puppies to adult dogs, our services ensure that your furry companions are happy, disciplined, and well-adjusted. Whether you are in Nairobi, Mombasa, Kisumu, or anywhere across the country, we are committed to delivering high-quality dog training that transforms both pets and owners alike.
          </p>

          <h2 className="text-gray-700 text-2xl font-semibold mb-2">Word From Our CEO</h2>
          <p className="text-gray-700 text-justify">
            At A9 Dog Training Academy, we believe that every dog deserves expert guidance and every owner deserves peace of mind. Our goal is to create a safe, positive, and effective training environment where dogs thrive and owners gain confidence. We are passionate about helping you and your dog achieve a lifelong, harmonious relationship.
          </p>
        </div>

        
        <div className="w-full sm:w-1/2 h-80 sm:h-[500px] md:h-[550px] lg:h-[600px] relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/ceo.jpeg"
            alt="A9 Dog Training Academy CEO"
            fill
            className="object-cover rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Abs;
