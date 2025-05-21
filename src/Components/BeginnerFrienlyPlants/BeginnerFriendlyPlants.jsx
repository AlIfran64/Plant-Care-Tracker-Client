import React from 'react';

const BeginnerFriendlyPlants = () => {
  return (
    <section className='w-11/12 mx-auto my-32'>
      <h1 className='text-4xl font-bold text-center '>Beginner-Friendly Plants</h1>
      <p className='text-center text-xl mt-3'>
        Start Your Green Journey with These Simple Choices
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-16'>
        {[
          "p1.webp", "p2.webp", "p3.webp", "p4.webp", "p5.jpeg", "p6.jpeg",
          "p7.webp", "p8.jpg", "p9.webp", "p10.webp", "p11.webp", "p12.jpg",
        ].map((img, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden'
          >
            <img
              src={`/assets/images/${img}`}
              alt={`Plant ${index + 1}`}
              className='w-full h-60 object-cover'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeginnerFriendlyPlants;
