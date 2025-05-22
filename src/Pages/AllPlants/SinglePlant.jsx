import React from 'react';
import { Link } from 'react-router';

const SinglePlant = ({ plant }) => {
  const { plantName, category, image, wateringFrequency, _id } = plant;

  return (
    <tr className="text-base sm:text-lg">
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16 sm:w-24 sm:h-24">
              <img src={image} alt={`${plantName} image`} />
            </div>
          </div>
          <div>
            <div className="font-bold text-base sm:text-xl">{plantName}</div>
          </div>
        </div>
      </td>
      <td className="text-base sm:text-lg text-center">{category}</td>
      <td className="text-base sm:text-lg text-center">{wateringFrequency}</td>
      <td>
        <div className="flex justify-center items-center">
          <Link to={`/viewDetails/${_id}`}>
            <button className="bg-[#1F7158] text-white text-xs sm:text-sm md:text-lg py-2 px-4 rounded-md cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </td>
    </tr>

  );
};

export default SinglePlant;
