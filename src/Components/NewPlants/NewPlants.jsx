import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import NewPlant from './NewPlant';

const NewPlants = () => {




  // load data
  const newPlantsData = useLoaderData();
  console.log(newPlantsData);

  const initialNewPlantsData = newPlantsData.slice(0, 6);
  console.log(initialNewPlantsData);

  const [data, setData] = useState(initialNewPlantsData);
  const [button, setButton] = useState(false);



  return (
    <div className='w-11/12 mx-auto my-32'>
      <h1 className='text-center text-4xl font-semibold'>New Plants</h1>
      <p className='text-xl text-center mt-3'>Meet Your New Green Companions</p>


      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center gap-5 mt-15'>
        {
          data.map((singlePlant) => <NewPlant key={singlePlant._id} singlePlant={singlePlant}></NewPlant>)
        }
      </div>


      {/* Buttons */}
      <div className='flex justify-center mt-8'>
        {
          button ?
            <div onClick={() => {
              setData(initialNewPlantsData)
              setButton(!button);
            }} className=' inline-block'>
              <button className='mt-10 py-3 px-15 bg-[#1f7158] text-xl text-white rounded-lg'>See Less</button>
            </div>
            :
            <div onClick={() => {
              setData(newPlantsData);
              setButton(!button);
            }} className='inline-block'>
              <button onClick={() => setButton(!button)} className='mt-10 py-3 px-15 bg-[#1f7158] text-xl text-white rounded-lg'>See All</button>
            </div>
        }
      </div>








    </div>
  );
};

export default NewPlants;