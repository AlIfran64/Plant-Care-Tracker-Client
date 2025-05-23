import React, { useContext } from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext/AuthContext';


const AddPlant = () => {

  const { user } = useContext(AuthContext);



  // Handle Add Plant
  const handleAddPLant = (e) => {
    e.preventDefault();


    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const addPlantData = Object.fromEntries(formData.entries());


    // Post add plant data to db
    fetch('https://plantify-server-beige.vercel.app/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addPlantData),
      // …
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Plant Added Successfully!")
          form.reset();
        }
      })

  }
  return (
    <div className=' mx-auto bg-[url("/assets/images/background.png")] bg-no-repeat bg-cover py-12 md:py-36'>

      <div className='bg-[#F2F2F2] max-w-7xl mx-auto rounded-lg p-24'>
        <h1 className='text-4xl font-semibold text-center mb-5 text-[#374151]'>Add Plant</h1>
        <p className='text-center text-xl leading-7 sub-heading'>Fill in the details below to contribute a new plant to our green community.</p>

        {/* form */}
        <div className='mt-20'>

          <form onSubmit={handleAddPLant}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Image URL */}
              <div>
                <label className="font-semibold text-xl">Image URL</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter image URL"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                />
              </div>

              {/* Plant Name */}
              <div>
                <label className="font-semibold text-xl">Plant Name</label>
                <input
                  type="text"
                  name="plantName"
                  placeholder="Enter plant name"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="font-semibold text-xl">Category</label>
                <select
                  name="category"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                >
                  <option value="">Select category</option>
                  <option value="succulent">Succulent</option>
                  <option value="fern">Fern</option>
                  <option value="flowering">Flowering</option>
                  <option value="herb">Herb</option>
                  <option value="cactus">Cactus</option>
                </select>
              </div>

              {/* Care Level */}
              <div>
                <label className="font-semibold text-xl">Care Level</label>
                <select
                  name="careLevel"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                >
                  <option value="">Select care level</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>

              {/* Watering Frequency */}
              <div>
                <label className="font-semibold text-xl">Watering Frequency</label>
                <input
                  type="text"
                  name="wateringFrequency"
                  placeholder="e.g., every 3 days"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                />
              </div>

              {/* Last Watered Date */}
              <div>
                <label className="font-semibold text-xl">Last Watered Date</label>
                <input
                  type="date"
                  name="lastWatered"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                />
              </div>

              {/* Next Watering Date */}
              <div>
                <label className="font-semibold text-xl">Next Watering Date</label>
                <input
                  type="date"
                  name="nextWatering"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                />
              </div>

              {/* Health Status */}
              <div>
                <label className="font-semibold text-xl">Health Status</label>
                <input
                  type="text"
                  name="healthStatus"
                  placeholder="Enter plant health status"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md"
                  required
                />
              </div>

              {/* User Email */}
              <div>
                <label className="font-semibold text-xl">User Email</label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter your email"
                  value={user?.email || ''}
                  readOnly
                  className="bg-gray-100 text-gray-500 border border-gray-300 py-3 px-4 w-full mt-2 rounded-md cursor-not-allowed"
                  required
                />
              </div>

              {/* User Name */}
              <div>
                <label className="font-semibold text-xl">User Name</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  value={user?.displayName || ''}
                  readOnly
                  className="bg-gray-100 text-gray-500 border border-gray-300 py-3 px-4 w-full mt-2 rounded-md cursor-not-allowed"
                  required
                />
              </div>

              {/* Description (Full Width) */}
              <div className="lg:col-span-2">
                <label className="font-semibold text-xl">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter plant description"
                  className="bg-white py-3 px-4 w-full mt-2 rounded-md h-32 resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1F7158] text-white text-xl py-3 rounded-md mt-6 cursor-pointer"
            >
              Add Plant
            </button>
          </form>

        </div>
      </div>
    </div>


  );
};

export default AddPlant;