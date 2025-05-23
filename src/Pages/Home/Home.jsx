import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import NewPlants from '../../Components/NewPlants/NewPlants';
import Features from '../../Components/Features/Features';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Faq from '../../Components/Faq/Faq';
import PlantCareMistakes from '../../Components/PlantCareMistakes/PlantCareMistakes';
import BeginnerFriendlyPlants from '../../Components/BeginnerFrienlyPlants/BeginnerFriendlyPlants';

const Home = () => {
  return (
    <div className="bg-white dark:bg-[#1D232A] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Banner />
      <Features />
      <NewPlants />
      <PlantCareMistakes />
      <BeginnerFriendlyPlants />
      <Testimonials />
      <Faq />

      <div>
        <img src="/assets/images/lush-greenery-vibrant-collection-ferns-tropical-foliage.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
