import React from 'react';
import Icon from '../images/icon.svg';

const Card = () => {
  return (
    <>
      <div className='block p-6 max-w-sm w-full  md:w-4/12 bg-white rounded-lg  shadow-md  dark:bg-gray-800 dark:border-gray-700  mt-5 mr-8'>
        <div className='flex items-center '>
          <img src={Icon} alt='icon' />
          <p className='ml-5'>Saving for rainy days</p>
        </div>
        <h3 className='font-bold text-3xl mt-3'>₦400,000</h3>

        <div className='h-2 w-full bg-secondary mt-4'></div>
      </div>
    </>
  );
};

export default Card;
