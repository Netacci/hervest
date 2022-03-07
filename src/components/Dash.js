import React from 'react';
import Up from '../images/up.svg';
import Left from '../images/left.svg';
import Right from '../images/right.svg';
import { balance } from '../data/balance';

const Dash = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row md:flex-wrap  xl:flex-none w-full justify-around dark:bg-gray-800 dark:border-gray-700 mt-10 p-4 md:p-16 bg-primary rounded-xl  relative  shadow-md mx-auto '>
        <img
          src={Up}
          alt='icon'
          className='hidden lg:block absolute top-0 left-60'
        />
        <img
          src={Left}
          alt='icon'
          className=' hidden lg:block absolute bottom-0 left-0'
        />
        <img
          src={Right}
          alt='icon'
          className=' hidden lg:block absolute bottom-0 right-40'
        />
        {balance.map((acct) => {
          return (
            <div
              key={acct.title}
              className='mt-3 mb-4 md:mb-0 md:mt-6 mr-3 xl:mr-0 lg:mt-4 xl:mt-0'
            >
              <p className='font-light font-sm text-bgBody'>{acct.title}</p>

              <p className='font-bold text-xl text-white'>{acct.num}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dash;
