import React from 'react';
import pic from '../images/picturee.png';
import Card from './Card';
import Dash from './Dash';
import LinkCard from './LinkCard';
import save from '../images/save-plan.svg';
import invest from '../images/invest.svg';
import invite from '../images/invite.svg';

const User = () => {
  return (
    <>
      <div className='mt-10 container pt-5 text-center lg:text-left lg:pl-80  '>
        <div className='flex items-center '>
          <img src={pic} alt='profile' className='w-20 rounded-xl' />
          <p className='text-text text-xl pl-4'>
            Hello, <br /> <span className='text-2xl font-bold'>Netacci</span>
          </p>
        </div>
        <Dash />
        <div className='text-text mt-10'>
          <h2 className=' font-bold text-4xl'>Watch your plans</h2>
          <p className='text-xl font-light mt-3'>
            A goal without a plan is just a wish
          </p>
        </div>
        <div className='flex flex-row'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='flex flex-row'>
          <LinkCard
            title='Create a savings plan'
            text='Earn upto 12%'
            image={<img src={save} alt='icon' />}
          />
          <LinkCard
            title='Invest in a Female Farmer'
            text='Get up to 25% returns per annum'
            image={<img src={invest} alt='icon' />}
          />
          <LinkCard
            title='Invite your gilrs to HerVest'
            text='Share your girl code'
            image={<img src={invite} alt='icon' />}
            button={
              <button className='bg-primary p-2 font-bold text-xl'>
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
