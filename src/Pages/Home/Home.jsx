import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import NewPlants from '../../Components/NewPlants/NewPlants';
import Features from '../../Components/Features/Features';
import { IoLeafOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Features></Features>

      <div>
        <NewPlants></NewPlants>
      </div>


    </div>
  );
};

export default Home;