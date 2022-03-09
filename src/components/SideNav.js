import React, { useContext } from 'react';
import { sideNavData } from '../data/sideNavData';
import Logo from '../images/logo.svg';
import { NavContext } from '../context/NavContext';

import { NavLink } from 'react-router-dom';

const SideNav = () => {
  const [isNavOpen] = useContext(NavContext);

  return (
    <>
      <div
        className={` z-10 mb-10  lg:translate-x-0   sidenav top-0 shadow-md fixed h-full bg-white w-72 p-8 overflow-y-scroll
         ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}
         ease-in-out duration-300   `}
      >
        <img src={Logo} alt='logo' />
        <h3 className='text-gray mt-12'>MENU</h3>
        <div className='mt-3'>
          {sideNavData.map((nav) => {
            return (
              <NavLink
                to={nav.link}
                key={nav.title}
                className={({ isActive }) =>
                  isActive
                    ? 'flex  text-sm  font-semibold  items-center  hover:rounded-xl hover:text-primary focus:bg-primary hover:bg-navHover transition-all duration-400 ease-in active:text-primary active:bg-navHover pl-5 text-primary bg-navHover rounded-xl '
                    : 'text-text bg-none flex  text-sm  font-semibold  items-center  hover:rounded-xl hover:text-primary focus:bg-primary hover:bg-navHover transition-all duration-400 ease-in active:text-primary active:bg-navHover pl-5'
                }
              >
                {nav.icon}
                <p className=' p-5  '>{nav.title}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
