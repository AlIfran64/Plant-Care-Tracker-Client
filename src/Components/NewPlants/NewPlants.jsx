import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import NewPlant from './NewPlant';

const NewPlants = () => {
  // load data
  const newPlantsData = useLoaderData();

  const initialNewPlantsData = newPlantsData.slice(0, 6);

  const [data, setData] = useState(initialNewPlantsData);
  const [button, setButton] = useState(false);

  return (
    <div className='w-11/12 mx-auto my-32 text-neutral-900 dark:text-neutral-100 transition-colors duration-300'>
      <h1 className='text-center text-4xl font-bold'>New Plants</h1>
      <p className='text-xl text-center mt-3'>Meet Your New Green Companions</p>

      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center gap-5 mt-15'>
        {
          data.map((singlePlant) => (
            <NewPlant key={singlePlant._id} singlePlant={singlePlant} />
          ))
        }
      </div>

      {/* Buttons */}
      <div className='flex justify-center mt-8'>
        {
          button ? (
            <div
              onClick={() => {
                setData(initialNewPlantsData);
                setButton(!button);
              }}
              className='inline-block'
            >
              <button className='mt-10 py-3 px-15 bg-[#1f7158] text-xl text-white rounded-lg'>
                See Less
              </button>
            </div>
          ) : (
            <div
              onClick={() => {
                setData(newPlantsData);
                setButton(!button);
              }}
              className='inline-block'
            >
              <button className='mt-10 py-3 px-15 bg-[#1f7158] dark:bg-black text-xl text-white rounded-lg cursor-pointer'>
                See All
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default NewPlants;
