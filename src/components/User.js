import React, { useContext } from 'react';
import pic from '../images/picturee.png';

import Dash from './Dash';
import LinkCard from './LinkCard';
import save from '../images/save-plan.svg';
import invest from '../images/invest.svg';
import invite from '../images/invite.svg';
import { Icon } from '@iconify/react';
import { NavContext } from '../context/NavContext';
import CardSlider from './Slider';

const User = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext);
  return (
    <>
      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className='text-3xl absolute right-10 md:right-20 top-12 cursor-pointer lg:hidden'
      >
        <Icon
          icon={isNavOpen ? 'ant-design:close-outlined' : 'bx:menu-alt-left'}
        />
      </div>
      <div className='mt-1  pt-5 text-center mx-auto px-6 md:px-20 lg:px-10 lg:text-left lg:pl-80 mb-20  '>
        <div className='flex items-center '>
          <img src={pic} alt='profile' className='w-20 rounded-xl' />
          <p className='text-text text-left text-base md:text-xl pl-4'>
            Hello, <br />{' '}
            <span className='text-xl md:text-2xl font-bold'>Netacci</span>
          </p>
        </div>
        <Dash />
        <div className='text-text mt-10 text-center lg:text-left'>
          <h2 className=' font-bold text-2xl md:text-4xl'>Watch your plans</h2>
          <p className='text-base md:text-xl font-light mt-3'>
            A goal without a plan is just a wish
          </p>
        </div>
        <div>
          <CardSlider />
        </div>
        <div className='flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:justify-center'>
          <LinkCard
            title='Create a savings plan'
            text='Earn upto 12%'
            image={<img src={save} alt='icon' className='row-span-2' />}
            classes='bg-primary text-white'
          />
          <LinkCard
            title='Invest in a Female Farmer'
            text='Get up to 25% returns per annum'
            image={<img src={invest} alt='icon' className='row-span-2' />}
            classes='bg-secondary text-white'
          />
          <LinkCard
            title='Invite your girls to HerVest'
            text='Share your girl code'
            image={<img src={invite} alt='icon' className='row-span-2' />}
            classes='bg-grayBg text-primary'
            classText='text-secondary'
            button={
              <button className='bg-primary text-white p-2 font-bold text-xl rounded-lg'>
                HG7IB
              </button>
            }
            btnText='Share'
          />
        </div>
      </div>
    </>
  );
};

export default User;
