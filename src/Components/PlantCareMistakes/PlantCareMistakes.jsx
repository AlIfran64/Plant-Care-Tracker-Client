import React from 'react';

const PlantCareMistakes = () => {
  return (
    <section className="w-11/12 mx-auto my-32 bg-neutral-100 py-24 px-6 rounded-xl">
      <h2 className="text-4xl font-semibold text-center">Plant Care Mistakes</h2>
      <p className="text-center text-xl mt-3">
        Avoid these to help your plants thrive!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold mb-2">Overwatering</h3>
          <p className="text-gray-700 text-base">
            One of the most common mistakes. Too much water can drown roots and lead to rot. Always check soil moisture before watering.
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold mb-2">Insufficient Light</h3>
          <p className="text-gray-700 text-base">
            Placing your plant in a low-light area when it needs bright sunlight can stunt its growth. Know your plant's light needs.
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold mb-2">Wrong Pot Size</h3>
          <p className="text-gray-700 text-base">
            Using pots that are too large or too small can hinder root development and water absorption. Choose the right size for your plant's growth stage.
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold mb-2">Neglecting Drainage</h3>
          <p className="text-gray-700 text-base">
            Pots without drainage holes trap water, causing root rot. Always use containers with proper drainage.
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold  mb-2">Using Tap Water</h3>
          <p className="text-gray-700 text-base">
            Some plants are sensitive to chemicals in tap water. Use filtered or distilled water for better plant health.
          </p>
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold mb-2">Ignoring Pest Problems</h3>
          <p className="text-gray-700 text-base">
            Small pests like spider mites or aphids can cause major damage if left untreated. Inspect your plants regularly and take action early.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantCareMistakes;
