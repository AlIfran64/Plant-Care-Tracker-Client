import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <img className='w-[400px]' src="/assets/images/Error page.png" alt="error image" />
        <div className='my-20 mx-auto flex justify-center'>
          <Link to={'/'}><button className='py-3 px-6 bg-[#1f7158] text-white text-xl rounded-md cursor-pointer font-medium'>Back to homepage</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;