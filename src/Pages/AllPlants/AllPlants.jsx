import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from './SinglePlant';


const AllPlants = () => {

  // load data
  const allPlantsData = useLoaderData();


  return (
    <div className='lg:mt-40 mt-20 max-w-7xl mx-auto px-4 sm:px-6'>
      <h1 className='text-center text-4xl font-bold'>All Plants</h1>
      <p className='text-center text-xl mt-3'>All Your Beloved Plants in One Place</p>

      <div className='mt-10 border border-gray-200 p-4 sm:p-10 rounded-2xl'>
        <div className="overflow-x-auto">
          <table className="table w-full min-w-[600px]">
            <thead>
              <tr>
                <th className='text-xl'>Plant Name</th>
                <th className='text-xl text-center'>Category</th>
                <th className='text-xl text-center'>Watering Frequency</th>
                <th className='text-xl text-center'>Next Watering</th>
                <th className='text-xl text-center'>Details</th>
              </tr>
            </thead>
            <tbody>
              {
                allPlantsData.map((plant) => <SinglePlant key={plant._id} plant={plant}></SinglePlant>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default AllPlants;

// orginal