'use client';

import React from 'react';
import Image from 'next/image';

const Service = () => {
  const services = [
    {
      title: 'Protection Training',
      description:
        'Professional training to ensure your dog can protect your home, family, or business while remaining disciplined and controlled.',
      image: '/protection.jpeg',
    },
    {
      title: 'Aggression Management',
      description:
        'Specialized programs to address aggressive behavior, ensuring your dog becomes calm, obedient, and safe around people and other animals.',
      image: '/dogo.jpeg',
    },
    {
      title: 'Obedience Training',
      description:
        'Fundamental obedience training for dogs of all ages, focusing on commands, manners, and socialization.',
      image: '/ob.jpeg',
    },
    {
      title: 'Grooming',
      description:
        'Professional grooming services to keep your dog clean, healthy, and looking its best.',
      image: '/grooming.jpeg',
    },
    {
      title: 'Dog Walks',
      description:
        'Regular, supervised walks to keep your dog active, healthy, and happy while maintaining discipline.',
      image: '/dogwalk.jpeg',
    },
    {
      title: 'Dog Boarding',
      description:
        'Safe and comfortable boarding facilities for your dog while you are away, with personalized care and attention.',
      image: '/dogboarding.jpeg',
    },
    {
      title: 'Pet Food Sales',
      description:
        'High-quality dog food and treats to support your dog’s health and nutrition.',
      image: '/petfood.jpeg',
    },
    {
      title: 'Detection Training',
      description:
        'Specialized training for scent detection, security, and search operations.',
      image: '/detection.jpeg',
    },
    {
      title: 'Advanced Obedience',
      description:
        'Advanced training for highly disciplined dogs capable of performing complex commands and tasks.',
      image: '/hero1.jpeg',
    },
  ];

  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">
          For customized training or any other enquiry, reach out to us
        </h3>
        <a
          href="https://wa.me/254799897797"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg text-base transition"
        >
          Make an Enquiry
        </a>
      </div>
    </section>
  );
};

export default Service;
