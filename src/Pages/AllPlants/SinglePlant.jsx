import React from 'react';
import { Link } from 'react-router';

const SinglePlantCard = ({ plant }) => {
  const { plantName, category, image, wateringFrequency, _id, nextWatering } = plant;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-5 hover:shadow-lg transition-all duration-300">
      <img
        src={image || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={plantName}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">{plantName}</h2>
        <p className="text-gray-600"><strong>Category:</strong> {category}</p>
        <p className="text-gray-600"><strong>Watering:</strong> {wateringFrequency}</p>
        <p className="text-gray-600"><strong>Next Watering:</strong> {nextWatering}</p>
      </div>
      <div className="mt-4">
        <Link to={`/viewDetails/${_id}`}>
          <button className="bg-[#1F7158] text-white py-2 px-4 rounded-md hover:bg-[#155B45]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePlantCard;
