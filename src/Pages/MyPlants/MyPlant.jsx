import React from 'react';
import { Link } from 'react-router';

const MyPlant = ({ plant }) => {

  // Destructuring
  const { image, plantName, category,
    wateringFrequency, healthStatus } = plant;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm mx-auto hover:shadow-lg transition">
      <div className="flex items-center space-x-4 p-4">
        <img
          src={image}
          alt={plantName}
          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-[#1F7158]">{plantName}</h2>
          <p className="text-sm text-gray-600">Category: {category}</p>
          <p className="text-sm text-gray-600">Water: {wateringFrequency}</p>
          <p className="text-sm text-gray-600">Health: {healthStatus}</p>
        </div>
      </div>

      <div className="flex justify-between px-4 pb-4">
        <Link>
          <button className="bg-yellow-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-yellow-600">
            Update
          </button>
        </Link>
        <button
          className="bg-red-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyPlant;