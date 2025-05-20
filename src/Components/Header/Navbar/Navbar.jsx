import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto py-4 px-8 rounded-full flex justify-between items-center border'>

      {/* left */}
      <div className='flex justify-start items-center gap-2'>
        <img className='w-10 h-10' src="../../../assets/images/leaf-gradient-illustration-design.png" alt="logo" />
        <h1 className='text-3xl  font-bold'>Plantify</h1>
      </div>


      {/* middle */}
      <div className='flex justify-center items-center gap-4'>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>Home</NavLink>
        <NavLink to={'/allPlants'} className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>All Plants</NavLink>
        <NavLink to={'addPlant'} className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>Add Plant</NavLink>
        <NavLink to={'/myPlants'} className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>My Plants</NavLink>
      </div>



      {/* right */}
      <div className='flex justify-end items-center gap-4'>

        {/* Login */}
        <Link>
          <button className='py-2 px-4 border-2 border-[#1F7158] rounded-lg font-medium text-[#1F7158] cursor-pointer'>Login</button>
        </Link>


        {/* Register */}
        <Link>
          <button className='py-2 px-4 border-2 border-[#1F7158] bg-[#1F7158] rounded-lg text-white font-medium cursor-pointer'>Register</button>
        </Link>
      </div>


    </div>
  );
};

export default Navbar;