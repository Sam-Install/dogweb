'use client';

import React from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Vision & Mission
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300">
          <FaEye className="text-3xl text-yellow-400" />
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-gray-700 text-justify">
            To be Kenya’s leading dog training academy, renowned for excellence, compassion, and innovation, where every dog achieves its full potential and owners experience lifelong harmony with their pets.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-start gap-4 hover:scale-105 transition-transform duration-300">
          <FaBullseye className="text-3xl text-yellow-400" />
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-gray-700 text-justify">
            To provide professional, personalized dog training services across Kenya using positive reinforcement methods, building strong owner-dog relationships, and promoting well-behaved, confident, and happy dogs nationwide.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
