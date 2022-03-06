import React from 'react';
// import { dashLinkData } from './../data/dashLinkData';
import { Link } from 'react-router-dom';

const LinkCard = ({
  classes,
  title,
  text,
  image,
  button,
  btnText,
  classText,
}) => {
  return (
    <>
      <div
        className={`p-3 py-6 w-full  md:w-6/12  rounded-xl  shadow-md  dark:bg-gray-800 dark:border-gray-700  mt-5 mr-8 ${classes}`}
      >
        <p className='font-bold '>{title}</p>
        <div className='flex items-center '>
          <p className={`ml-5 text-xs ${classText}`}>{text}</p>
          {image}
        </div>
        <div>
          {' '}
          {button}
          <Link to='/share' className='ml-3 text-secondary'>
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default LinkCard;
