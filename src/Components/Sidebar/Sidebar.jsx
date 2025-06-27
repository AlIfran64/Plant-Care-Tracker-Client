import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FaHome, FaLeaf, FaPlus, FaThList, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 min-h-screen bg-[#1F7158] px-6 py-8 sticky top-0 shadow-xl">
      {/* User Info */}
      <div className="text-center mb-10 text-white">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-white mx-auto mb-3 shadow-md"
          />
        ) : (
          <FaUserCircle className="w-20 h-20 text-white/70 mx-auto mb-3" />
        )}
        <h2 className="text-lg font-semibold">{user?.displayName || 'Anonymous'}</h2>
        <p className="text-sm opacity-90">{user?.email}</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-sm font-medium">
        {[
          { to: '/', icon: <FaHome />, label: 'Home' },
          { to: '/dashBoard', icon: <FaThList />, label: 'Dashboard' },
          { to: '/allPlants', icon: <FaLeaf />, label: 'All Plants' },
          { to: '/addPlant', icon: <FaPlus />, label: 'Add Plant' },
          { to: '/myPlants', icon: <FaLeaf />, label: 'My Plants' },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive
                ? 'bg-white text-[#1F7158] shadow-md font-semibold'
                : 'text-white hover:bg-white hover:text-[#1F7158] transition-all duration-200'
              }`
            }
          >
            {icon} {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
