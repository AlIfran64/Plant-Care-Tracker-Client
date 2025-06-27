import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from '../../../src/Pages/AllPlants/SinglePlant'

const AllPlants = () => {
  const allPlantsData = useLoaderData();

  const [sortOrder, setSortOrder] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('');

  // Unique categories for filter dropdown
  const uniqueCategories = useMemo(() => {
    return [...new Set(allPlantsData.map(plant => plant.category))];
  }, [allPlantsData]);

  // Apply filtering and sorting
  const displayedPlants = useMemo(() => {
    let filtered = [...allPlantsData];

    if (filterCategory) {
      filtered = filtered.filter(plant => plant.category === filterCategory);
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.nextWatering);
      const dateB = new Date(b.nextWatering);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [allPlantsData, sortOrder, filterCategory]);

  return (
    <div className='lg:mt-40 mt-20 max-w-7xl mx-auto px-4 sm:px-6 my-20'>
      <h1 className='text-center text-4xl font-bold'>All Plants</h1>
      <p className='text-center text-xl mt-3'>All Your Beloved Plants in One Place</p>

      {/* Sorting and Filtering UI */}
      <div className='flex flex-wrap justify-between gap-4 lg:mt-20 mt-10'>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className='p-2 border rounded-md'
        >
          <option value='asc'>Sort by Next Watering (Asc)</option>
          <option value='desc'>Sort by Next Watering (Desc)</option>
        </select>

        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          value={filterCategory}
          className='p-2 border rounded-md'
        >
          <option value=''>Filter by Category</option>
          {uniqueCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {displayedPlants.map(plant => (
          <SinglePlant key={plant._id} plant={plant}></SinglePlant>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
