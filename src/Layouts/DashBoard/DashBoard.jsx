import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../Components/Sidebar/Sidebar';

const DashBoard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Outlet for nested dashboard routes */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
