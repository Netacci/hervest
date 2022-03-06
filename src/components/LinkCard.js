import React from 'react';
// import { dashLinkData } from './../data/dashLinkData';
import { Link } from 'react-router-dom';

const LinkCard = ({ classes, title, text, image, button, btnText }) => {
  return (
    <>
      <div
        className={`block p-6 max-w-sm w-full  md:w-4/12  rounded-lg  shadow-md  dark:bg-gray-800 dark:border-gray-700  mt-5 mr-8 ${classes}`}
      >
        <p className='font-boldtext-white'>{title}</p>
        <div className='flex items-center '>
          <p className='ml-5 text-xs'>{text}</p>
          {image}
          {button}
          <Link to='/share'>{btnText}</Link>
        </div>
      </div>
    </>
  );
};

export default LinkCard;
