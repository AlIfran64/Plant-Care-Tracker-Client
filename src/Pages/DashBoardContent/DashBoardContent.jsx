import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { FaLeaf, FaUserCheck } from 'react-icons/fa';
import { MdOutlineLocalFlorist } from 'react-icons/md';

const DashBoardContent = () => {
  const { user, loading } = useContext(AuthContext);
  const plants = useLoaderData();

  const myPlants = plants.filter((item) => item.userEmail === user?.email);

  if (loading) return <div className="p-10 text-lg">Loading user info...</div>;

  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-100 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Welcome, {user?.displayName || 'User'}! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Here's a quick snapshot of your plant contributions and account info.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Total Plants */}
        <div className="bg-gradient-to-r from-[#1F7158] to-[#28a17c] text-white rounded-xl shadow-md p-6 flex items-center gap-5">
          <FaLeaf className="text-4xl flex-shrink-0" />
          <div>
            <h3 className="text-md font-medium">Total Plants in System</h3>
            <p className="text-4xl font-bold mt-1">{plants.length}</p>
          </div>
        </div>

        {/* My Plants */}
        <div className="bg-gradient-to-r from-[#1F588C] to-[#3c89c5] text-white rounded-xl shadow-md p-6 flex items-center gap-5">
          <MdOutlineLocalFlorist className="text-4xl flex-shrink-0" />
          <div>
            <h3 className="text-md font-medium">Your Uploaded Plants</h3>
            <p className="text-4xl font-bold mt-1">{myPlants.length}</p>
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <FaUserCheck className="text-[#1F7158]" /> Account Information
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-[#1F7158] object-cover flex-shrink-0"
            />
          )}
          <div className="space-y-2 text-gray-700 dark:text-gray-200 text-base w-full break-words">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
              <p><strong>Name:</strong> {user?.displayName || 'N/A'}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Email Verified:</strong> {user?.emailVerified ? 'Yes' : 'No'}</p>
              <p><strong>Account Created:</strong> {user?.metadata?.creationTime || 'Unknown'}</p>
              <p><strong>Last Login:</strong> {user?.metadata?.lastSignInTime || 'Unknown'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardContent;
