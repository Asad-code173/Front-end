import { ShoppingCartIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Mens',
    path: '/men',
    subCategories: [
      { name: 'Shirts', path: '/men/shirts' },
      { name: 'Trousers', path: '/men/trousers' },
      { name: 'Shoes', path: '/men/shoes' },
    ]
  },
  {
    name: 'Women',
    path: '/women',
    subCategories: [
      { name: 'Kurtas', path: '/women/kurtas' },
      { name: 'Tops', path: '/women/tops' },
      { name: 'Shoes', path: '/women/shoes' },
    ]
  },
  {
    name: 'Boys & Girls',
    path: '/boys-girls',
    subCategories: [
      { name: 'Kids Shirts', path: '/boys-girls/shirts' },
      { name: 'Kids Pants', path: '/boys-girls/pants' },
      { name: 'Kids Shoes', path: '/boys-girls/shoes' },
    ]
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  return (
    <>
      {/* Top Navbar */}
      <nav className='flex sticky top-0 z-50 bg-white justify-between items-center px-4'>
        <div className="logo flex gap-2 items-center">
          {isMenuOpen
            ? <XMarkIcon className='w-6 h-6 mt-3 md:hidden' onClick={() => setIsMenuOpen(false)} />
            : <Bars3Icon className='w-6 h-6 mt-3 md:hidden' onClick={() => setIsMenuOpen(true)} />}
          <img className='mt-6 ml-3 mb-3 w-14' src='https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6994d6b6/images/FooterImages/Khaadi-Logo.png' alt="Khaadi Logo" />
        </div>

        {/* Icons */}
        <div className="icons flex items-center gap-1">
          <Link to="/login" ><FaUser className='md:w-8 h-6 mt-2' aria-label="User" /></Link>
          <Link to="/cart"><ShoppingCartIcon className='h-6 md:w-8 mt-2' aria-label="Shopping cart" /></Link>
        </div>

        {/* Desktop Menu */}
        <div id="menu" className='hidden text-[#191919] md:flex mt-3 absolute left-1/2 transform -translate-x-1/2 gap-12'>
          {navItems.map(item => (
            <div key={item.name} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:text-gray-400"
                }
              >
                {item.name}
              </NavLink>

              {/* Dropdown on hover */}
              {item.subCategories && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.subCategories.map(sub => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <hr />

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-4">
          <XMarkIcon className='w-6 h-6 mb-4 self-end' onClick={() => setIsMenuOpen(false)} />

          {navItems.map(item => (
            <div key={item.name} className="mb-2">
              {/* Main category */}
              <button
                className="flex justify-between items-center w-full text-left hover:text-gray-400"
                onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
              >
                <span>{item.name}</span>
                {item.subCategories && (
                  <span>{openDropdown === item.name ? "-" : "+"}</span>
                )}
              </button>

              
              {item.subCategories && openDropdown === item.name && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {item.subCategories.map(sub => (
                    <Link key={sub.name} to={sub.path} className="text-sm text-gray-600 hover:text-gray-800">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
