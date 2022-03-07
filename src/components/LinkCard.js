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
        className={`grid linkcard p-3 py-3 lg:px-6 w-full lg:w-5/12  xl:w-7/12  rounded-xl  shadow-md  dark:bg-gray-800 dark:border-gray-700  mt-10 mr-8 ${classes}`}
      >
        <p className='font-bold col-start-1 self-center'>{title}</p>

        <p className={`text-xs row-start-2   self-start ${classText}`}>
          {text}
        </p>
        {image}

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
