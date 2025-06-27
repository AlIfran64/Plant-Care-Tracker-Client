import React from 'react';
import { Link } from 'react-router';

const NewPlant = ({ singlePlant }) => {
  const { image, plantName, category, description, _id } = singlePlant;

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={`Plant - ${plantName}`}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-neutral-900 dark:text-neutral-100">
        {/* Name & Category */}
        <h2 className="text-2xl font-bold mb-1">{plantName}</h2>
        <p className="text-base text-gray-500 dark:text-gray-300 mb-2">{category}</p>

        {/* Description */}
        <p className="line-clamp-4 text-justify text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 dark:border-gray-600 my-4"></div>

        {/* Button */}
        <Link to={`/viewDetails/${_id}`}>
          <button className="w-full bg-[#1F7158] hover:bg-[#155b45] text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewPlant;
