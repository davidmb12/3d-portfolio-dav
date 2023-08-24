import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo5, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <nav className={`${styles.padding} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo5} className='w-20 h-20 object-contain' alt="" />
          <p className='text-white text-[18px] font-bold cursor-pointer'>David <span className='sm:block hidden'>| Software Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li>
              <a href={`#{nav.id}`}></a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
