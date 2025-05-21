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
    <div>
      <Banner></Banner>

      <Features></Features>

      <NewPlants></NewPlants>

      <PlantCareMistakes></PlantCareMistakes>

      <BeginnerFriendlyPlants></BeginnerFriendlyPlants>

      <Testimonials></Testimonials>

      <Faq></Faq>

    </div>
  );
};

export default Home;