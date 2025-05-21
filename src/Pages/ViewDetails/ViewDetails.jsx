import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
  // load data
  const data = useLoaderData();
  console.log(data);

  // destructuring
  const {
    image,
    plantName,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWatered,
    nextWatering,
    healthStatus,
    userEmail,
    userName
  } = data;

  return (
    <div className='w-11/12 mx-auto my-40'>
      <h1 className='text-5xl font-bold text-center'>View Details</h1>
      <p className='text-center text-2xl mt-4'>Everything You Need to Care for This Plant</p>

      <div className='border border-gray-300 mt-16 p-10 rounded-xl flex justify-between items-stretch gap-10'>

        {/* left */}
        <div className='w-1/2'>
          <img className='rounded-xl object-cover h-full' src={image} alt="image" />
        </div>

        {/* right */}
        <div className='w-1/2'>
          <h1 className='text-4xl font-semibold'>{plantName}</h1>
          <p className='text-2xl mt-2 text-gray-600'>{category}</p>
          <p className='text-xl text-justify my-5'>{description}</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='bg-gray-100 rounded-xl p-5'>
              <p className='text-base text-gray-500'>Care Level</p>
              <p className='text-lg font-medium text-gray-800'>{careLevel || 'N/A'}</p>
            </div>
            <div className='bg-gray-100 rounded-xl p-5'>
              <p className='text-base text-gray-500'>Watering Frequency</p>
              <p className='text-lg font-medium text-gray-800'>{wateringFrequency || 'N/A'}</p>
            </div>
            <div className='bg-gray-100 rounded-xl p-5'>
              <p className='text-base text-gray-500'>Last Watered</p>
              <p className='text-lg font-medium text-gray-800'>{lastWatered || 'N/A'}</p>
            </div>
            <div className='bg-gray-100 rounded-xl p-5'>
              <p className='text-base text-gray-500'>Next Watering</p>
              <p className='text-lg font-medium text-gray-800'>{nextWatering || 'N/A'}</p>
            </div>
            <div className='bg-gray-100 rounded-xl p-5'>
              <p className='text-base text-gray-500'>Health Status</p>
              <p className='text-lg font-medium text-gray-800'>{healthStatus || 'N/A'}</p>
            </div>
          </div>

          <div className='pt-5 border-t border-gray-300 mt-8'>
            <h3 className='text-2xl font-semibold text-gray-800'>Added By</h3>
            <p className='text-lg text-gray-700'>{userName}</p>
            <p className='text-md text-gray-600'>{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
