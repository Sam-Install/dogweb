'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactBanner = () => {
  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="bg-gray-900 rounded-xl shadow-xl p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
        
        
        <div className="text-center sm:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Train Your Dog?
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl">
            Book a professional training session now and give your furry friend the guidance they deserve. Our experts are ready to help across Kenya.
          </p>
        </div>

        
        <div>
          <a
            href="https://wa.me/254799897797"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg sm:text-xl transition"
          >
            <FaWhatsapp className="text-2xl" />
            Book a Session
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactBanner;
