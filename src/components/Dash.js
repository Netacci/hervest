import React from 'react';
import Up from '../images/up.svg';
import Left from '../images/left.svg';
import Right from '../images/right.svg';
import { balance } from '../data/balance';

const Dash = () => {
  return (
    <>
      <div className='flex p-6 w-full bg-primary rounded-xl  shadow-md justify-between dark:bg-gray-800 dark:border-gray-700 mt-5 p-16  relative'>
        <img src={Up} alt='icon' className='absolute top-0 left-60' />
        <img src={Left} alt='icon' className='absolute bottom-0 left-0' />
        <img src={Right} alt='icon' className='absolute bottom-0 right-40' />
        {balance.map((acct) => {
          return (
            <div>
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