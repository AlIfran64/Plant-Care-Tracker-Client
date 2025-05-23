import React from 'react';
import { Link } from 'react-router';

const NewPlant = ({ singlePlant }) => {

  // Destructure
  const { image, plantName, category, description, _id } = singlePlant;

  return (
    <div className='rounded-xl p-3 shadow-lg bg-white dark:bg-neutral-800 transition-colors duration-300'>
      {/* image */}
      <div className='border-2 border-gray-100 dark:border-neutral-700 rounded-xl p-3'>
        <img className='w-[450px] h-[320px] mx-auto rounded-xl' src={image} alt="image" />

        <div className='px-3 text-neutral-900 dark:text-neutral-100'>
          <div className='mt-5'>
            <h1 className='text-2xl font-semibold'>{plantName}</h1>
            <p className='text-lg'>{category}</p>
          </div>

          <p className='line-clamp-6 text-justify mt-3 text-gray-500 dark:text-gray-300'>{description}</p>

          {/* line */}
          <div className='border-b border-gray-400 dark:border-gray-600 border-dashed my-3'></div>

          <div className='mt-5'>
            <Link to={`/viewDetails/${_id}`}>
              <button className='bg-black dark:bg-[#1F7158] text-white py-3 px-6 w-full rounded-lg text-xl cursor-pointer'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlant;
