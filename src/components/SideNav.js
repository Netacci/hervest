import React, { useState } from 'react';
import { sideNavData } from '../data/sideNavData';
import Logo from '../images/logo.svg';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <>
      <div
        className={` mb-10  lg:translate-x-0   sidenav top-0 shadow-md fixed h-full bg-white w-72 p-8 mt-4 overflow-y-scroll
         ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}
         ease-in-out duration-300   `}
      >
        <img src={Logo} alt='logo' />
        <h3 className='text-gray mt-12'>MENU</h3>
        <div className='mt-3'>
          {sideNavData.map((nav) => {
            return (
              <div className='flex  text-sm text-text font-semibold  items-center  hover:rounded-xl hover:text-primary focus:bg-primary hover:bg-navHover transition-all duration-400 ease-in active:text-primary pl-5'>
                {nav.icon}
                <p className=' p-5  '>{nav.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
