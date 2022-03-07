import React, { useContext, useState } from 'react';
import { sideNavData } from '../data/sideNavData';
import Logo from '../images/logo.svg';
import { NavContext } from '../context/NavContext';

import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isNavOpen] = useContext(NavContext);
  const [active, setActive] = useState('Dashboard');

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
              <Link
                to={nav.link}
                key={nav.title}
                onClick={() => setActive(nav.title)}
              >
                <div
                  className={`flex  text-sm text-text font-semibold  items-center  hover:rounded-xl hover:text-primary focus:bg-primary hover:bg-navHover transition-all duration-400 ease-in active:text-primary active:bg-navHover pl-5 ${
                    active === nav.title
                      ? 'text-primary bg-navHover rounded-xl '
                      : ''
                  } `}
                >
                  {nav.icon}
                  <p className=' p-5  '>{nav.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
