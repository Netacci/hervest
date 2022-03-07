import React from 'react';

import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex justify-center items-center flex-col mt-48 py-2 px-4  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200  text-primary'>
        <div className='text-7xl'>404</div>
        <div className='text-3xl mt-3'>PAGE NOT FOUND</div>

        <button
          className='py-4 px-5 rounded mt-4 text-xl bg-primary text-white'
          onClick={() => navigate('/dashboard')}
        >
          Return to Dashboard
        </button>
      </div>
    </>
  );
};

export default NotFound;
