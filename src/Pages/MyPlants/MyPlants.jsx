import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import MyPlant from './MyPlant';



const MyPlants = () => {


  // load data
  const data = useLoaderData();

  // get current user info
  const { user } = useContext(AuthContext);

  const myPlants = data.filter((item) => item.userEmail === user.email);
  console.log(myPlants);


  return (
    <div className='mt-36 w-11/12 mx-auto'>


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
          <div>
            {
              myPlants.map((plant) => <MyPlant key={plant._id} plant={plant}></MyPlant>)
            }
          </div>
      }






    </div>
  );
};

export default MyPlants;