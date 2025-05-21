import React from 'react';
import { Link } from 'react-router';

const SinglePlant = ({ plant }) => {
  const { plantName, category, image, wateringFrequency, _id } = plant;

  return (
    <tr className="text-lg">
      <td >
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                src={image}
                alt={`${plantName} image`} />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{plantName}</div>
          </div>
        </div>
      </td>
      <td className="text-lg text-center">{category}</td>
      <td className="text-lg text-center">{wateringFrequency}</td>
      <td className='flex justify-center'>
        <Link to={`/viewDetails/${_id}`}>
          <button className="bg-[#1F7158] text-white text-lg py-2 px-6 rounded-md cursor-pointer">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default SinglePlant;
