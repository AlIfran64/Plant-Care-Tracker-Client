import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import MyPlant from './MyPlant';



const MyPlants = () => {


  // load data
  const data = useLoaderData();

  // immediate delete plant card from website. No reloading needed.
  const [plants, setPlants] = useState(data);

  // get current user info
  const { user } = useContext(AuthContext);

  const myPlants = plants.filter((item) => item.userEmail === user.email);



  return (
    <div className='lg:mt-40 mb-20 mt-20 w-11/12 mx-auto'>

      <h1 className='text-4xl font-bold text-center'>My Plants</h1>
      <p className='text-center text-xl mt-3 mb-16'>Track, manage, and nurture your personal plant collection with ease.</p>


      {
        myPlants.length === 0 ?

          <div className='p-20 rounded-2xl bg-[#F2F2F2]'>
            <h1 className='text-center text-4xl font-semibold'>No Plants Added Yet!</h1>
            <p className='text-center mt-10 text-xl'>Wants to Add Plant? Click Below</p>

            <div className='mt-5 flex justify-center'>
              <Link to={'/addPlant'}>
                <button className='py-3 px-6 bg-[#1F7158] text-white text-xl rounded-lg'>Add Plant</button>
              </Link>
            </div>
          </div>
          :
          <div className='grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center gap-10'>
            {
              myPlants.map((plant) => <MyPlant
                key={plant._id}
                plant={plant}
                plants={plants}
                setPlants={setPlants}
              ></MyPlant>)
            }
          </div>
      }






    </div>
  );
};

export default MyPlants;