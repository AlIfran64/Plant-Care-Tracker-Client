import React from 'react';
import { CiAlignTop, CiCircleQuestion, CiShoppingCart } from "react-icons/ci";
import { PiAddressBookTabsThin } from 'react-icons/pi';

const Features = () => {
  return (
    <div className="py-12 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div className="p-6 text-neutral-900 dark:text-neutral-100">
          <CiAlignTop className='mb-3' size={50} />
          <h3 className="text-xl font-semibold mb-2">Top Picks This Season</h3>
          <p>Explore our most-loved plants for every style and skill level.</p>
        </div>

        <div className="p-6 text-neutral-900 dark:text-neutral-100">
          <CiCircleQuestion className='mb-3' size={50} />
          <h3 className="text-xl font-semibold mb-2">Why Plantify?</h3>
          <p>Sustainably packaged, carefully nurtured, and backed by plant care experts.</p>
        </div>

        <div className="p-6 text-neutral-900 dark:text-neutral-100">
          <PiAddressBookTabsThin className='mb-3' size={50} />
          <h3 className="text-xl font-semibold mb-2">Join the Green Community</h3>
          <p>Learn, share, and grow with fellow plant lovers across the globe.</p>
        </div>

        <div className="p-6 text-neutral-900 dark:text-neutral-100">
          <CiShoppingCart className='mb-3' size={50} />
          <h3 className="text-xl font-semibold mb-2">Shop by Lifestyle</h3>
          <p>Low-light, pet-friendly, air-purifying—find plants that match your space.</p>
        </div>

      </div>
    </div>
  );
};

export default Features;
