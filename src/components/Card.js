import React from 'react';
import Icon from '../images/icon.svg';

const Card = () => {
  return (
    <>
      <div className='block p-6 max-w-sm w-full   bg-white rounded-xl  shadow-md  dark:bg-gray-800 dark:border-gray-700  mt-10 mr-8 pb-14'>
        <div className='flex items-center '>
          <img src={Icon} alt='icon' />
          <p className='ml-5'>Saving for rainy days</p>
        </div>
        <h3 className='font-bold text-2xl md:text-3xl mt-3'>₦400,000</h3>

        <div className='h-2 w-full bg-grayBg mt-4'>
          <div className='bg-secondary w-5/12 h-2'></div>
        </div>
      </div>
    </>
  );
};

export default Card;
