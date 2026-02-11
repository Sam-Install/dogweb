'use client';

import React from 'react';

const Conta = () => {
  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
    
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Contact Us</h2>
          
          <div>
            <h3 className="font-semibold text-gray-600">Location:</h3>
            <p className="text-gray-700">Mwabungo, Diani, South Coast, Kenya</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600">Phone:</h3>
            <p className="text-gray-700">0799 897 797</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600">Email:</h3>
            <p className="text-gray-700">amonmwanjala@gmail.com</p>
          </div>
        </div>

        
        <div className="md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Mwabungo Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.850230874312!2d39.61172627615249!3d-4.328356896245689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401eaf28c02b29%3A0xabcdef1234567890!2sMwabungo%2C%20Diani%2C%20Kenya!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Conta;
