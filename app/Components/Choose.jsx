'use client';

import React from 'react';
import { FaDog, FaUserTie, FaMapMarkedAlt, FaHeart } from 'react-icons/fa';

const Choose = () => {
  const reasons = [
    {
      icon: <FaUserTie className="text-3xl text-yellow-400" />,
      title: 'Expert Trainers',
      description:
        'Certified professionals with years of hands-on experience in obedience, behavior correction, and advanced skill training. Your dog is in capable hands.',
    },
    {
      icon: <FaDog className="text-3xl text-yellow-400" />,
      title: 'Personalized Programs',
      description:
        'Custom training plans for every dog based on breed, age, and temperament to ensure effective, long-lasting results.',
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-yellow-400" />,
      title: 'Nationwide Reach',
      description:
        'Based in Diani but serving clients across Kenya — from Nairobi to Mombasa — we bring top-quality training wherever you are.',
    },
    {
      icon: <FaHeart className="text-3xl text-yellow-400" />,
      title: 'Compassionate Approach',
      description:
        'Gentle, reward-based methods that strengthen the bond between dogs and owners, making training stress-free and enjoyable.',
    },
  ];

  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Why Work With Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
