import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const [navModal, setNavModal] = useState(false);



  return (
    <div
      className="lg:w-11/12 mx-auto py-4 px-8 lg:rounded-full flex justify-between items-center 
                bg-white shadow-xl backdrop-blur-sm relative z-30">
      {/* left */}
      <div className="flex items-center gap-2">

        {/* hamburger */}

        <div className='md:hidden' onClick={() => setNavModal(!navModal)}>
          <RxHamburgerMenu size={25} />
        </div>

        {/* Modal */}
        {
          navModal && <div className='absolute top-15 z-50 flex flex-col bg-white p-6 rounded-lg w-70'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>Home</NavLink>
            <NavLink to={'/allPlants'} className={({ isActive }) => isActive ? 'px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>All Plants</NavLink>
            <NavLink to={'/addPlant'} className={({ isActive }) => isActive ? 'px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>Add Plant</NavLink>
            <NavLink to={'/myPlants'} className={({ isActive }) => isActive ? 'px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>My Plants</NavLink>
          </div>
        }




        <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../../../assets/images/logo.png" alt="logo" />
        <h1 className="text-xl lg:text-3xl font-bold">Plantify</h1>
      </div>

      {/* middle */}
      <div className="hidden md:flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>Home</NavLink>
        <NavLink to="/allPlants" className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>All Plants</NavLink>
        <NavLink to="/addPlant" className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>Add Plant</NavLink>
        <NavLink to="/myPlants" className={({ isActive }) => isActive ? "underline text-[#1F7158] font-semibold text-lg" : "text-lg"}>My Plants</NavLink>
      </div>

      {/* right */}
      <div className="flex gap-4">
        <Link to={'/login'}>
          <button className="py-2 px-4 border-2 border-[#1F7158] rounded-lg font-medium text-[#1F7158] cursor-pointer">Login</button>
        </Link>
        <Link to={'/register'}>
          <button className="py-2 px-4 border-2 border-[#1F7158] bg-[#1F7158] text-white rounded-lg font-medium cursor-pointer">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
