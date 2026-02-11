'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

    
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.jpeg"
                alt="A9 Dog Training Academy"
                fill
                className="object-contain rounded"
              />
            </div>
            <span className="text-xl font-bold">A9 Dog Training Academy</span>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            A9 Dog Training Academy, based in Mwabungo, Diani South Coast, provides professional dog training services across Kenya. From obedience and behavioral training to advanced skill development, we ensure every dog is happy, disciplined, and well-adjusted. Our expert trainers deliver personalized programs with a compassionate, positive approach, making us a trusted choice for pet owners nationwide.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row sm:justify-between md:w-1/2 gap-8">

          
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <a href="/" className="hover:text-yellow-400 transition">Home</a>
            <a href="/about" className="hover:text-yellow-400 transition">About</a>
            <a href="/gallery" className="hover:text-yellow-400 transition">Gallery</a>
            <a href="/contact" className="hover:text-yellow-400 transition">Contact Us</a>
          </div>

          
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/254799897797" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaWhatsapp />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                <FaTiktok />
              </a>
            </div>
          </div>

        </div>
      </div>

      
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} A9 Dog Training Academy. All rights reserved.
      </div>


      <div className="mt-2 text-center text-gray-400 text-sm">
        Created by ButcherCodes,butchercodeke@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
