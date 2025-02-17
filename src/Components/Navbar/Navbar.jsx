import { ShoppingCartIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import Login from '../../Pages/Login';


// const navItems = [
//   { name: 'Home', href: '#' },
//   { name: 'Mens', href: '#' },
//   { name: 'Womans', href: '#' },
//   { name: 'Boys and Girls', href: '#' },
//   { name: 'Fragrances', href: '#' },
// ];
const navItems = [
  {
    name: 'Home',
    path: '/',
    active: true

  },
  {
    name: 'Mens',
    path: '/men',
    active: false,
  },
  {
    name: 'Women',
    path: '/women',
    active: false,
  },


]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className='flex  sticky top-0 z-50 bg-white justify-between items-center px-4 '>
        <div className="logo flex gap-2 items-center">
          {isMenuOpen
            ? <XMarkIcon className='w-6 h-6 mt-3 md:hidden' onClick={() => setIsMenuOpen(false)} />
            : <Bars3Icon className='w-6 h-6 mt-3 md:hidden' onClick={() => setIsMenuOpen(true)} />}
          <img className='mt-6 ml-3 mb-3 w-14' src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6994d6b6/images/FooterImages/Khaadi-Logo.png' alt="Khaadi Logo" />
        </div>

        <div className="icons flex items-center gap-1">
          <Link to="/login" ><FaUser className='md:w-8 h-6 mt-2' aria-label="User" /></Link>
          <Link to="/cart"><ShoppingCartIcon className='h-6 md:w-8 mt-2' aria-label="Shopping cart" /></Link>
        </div>
        <div id="menu" className='hidden text-[#191919] md:flex mt-3 absolute left-1/2 transform -translate-x-1/2 gap-12'>
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "underline" : "hover:text-gray-400"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <hr />

      <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-4">
          <XMarkIcon className='w-6 h-6 mb-4 self-end' onClick={() => setIsMenuOpen(false)} />
          {navItems.map(item => (
            <Link key={item.name} to={item.path} className="hover:text-gray-400 mb-2">{item.name}</Link>
          ))}
        </div>
      </div>

    </>

  );
}

export default Navbar;
