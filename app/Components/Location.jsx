'use client';

import React from 'react';

const Location = () => {
  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-8">

        
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Our Location</h1>
          <p className="text-gray-700 text-justify">
            A9 Dog Training Academy is based in Mwabungo, in the heart of Diani South Coast, Kenya. Our headquarters serve as the central hub for professional dog training services, from obedience and behavioral correction to advanced skill development. While our main facility is located in Mwabungo, our training services stretch across the country, providing expertise and support to dog owners nationwide. Whether you are nearby or across Kenya, we are committed to delivering high-quality training, guidance, and care to ensure your furry companions are happy, disciplined, and well-adjusted.
          </p>
        </div>

    
        <div className="w-full sm:w-1/2 h-80 sm:h-96 relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="A9 Dog Training Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127915.21006567897!2d39.5594463539632!3d-4.306541257127979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840115f0f0d5767%3A0xf5c8e6e8c8922a5b!2sMwabungo%2C%20Diani%2C%20Kenya!5e0!3m2!1sen!2sus!4v1697123456789!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;
