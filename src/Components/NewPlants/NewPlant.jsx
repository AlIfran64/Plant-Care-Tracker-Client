import React from 'react';

const NewPlant = ({ singlePlant }) => {

  // Destructure
  const { image, plantName, category, lastWatered, nextWatering, description } = singlePlant;


  return (
    <div className=' rounded-xl p-3 shadow-lg'>
      {/* image */}
      <div className='border-2 border-gray-100 rounded-xl p-3'>
        <img className='w-[450px] h-[320px] rounded-xl' src={image} alt="image" />

        <div className='px-3'>
          <div className='mt-5'>
            <h1 className='text-2xl font-semibold'>{plantName}</h1>
            <p>{category}</p>
          </div>

          <p className='line-clamp-4 text-justify mt-2 text-gray-500'>{description}</p>

          {/* line */}
          <div className='border-b border-gray-400 border-dashed my-3'></div>

          <p><b>Last Watered Date:</b> {lastWatered}</p>
          <p><b>Next Watering Date:</b> {nextWatering}</p>


          <div className='mt-5'>
            <button className='bg-[#1f7158] text-white py-3 px-6 w-full rounded-lg text-xl'>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlant;