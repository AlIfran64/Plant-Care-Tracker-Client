import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if (user && user?.email) {
    return children
  }

  return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoutes;