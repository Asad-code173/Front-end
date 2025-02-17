import React, { useState } from 'react';
import {
  BellIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import image from "../../assets/Mens/image.png";

const Header = () => {

  const [openSetting, SetopenSetting] = useState();

  return (
    <header className='bg-white w-full h-16 sticky top-0 shadow-md flex items-center justify-end px-4 sm:px-6 lg:px-10 gap-4 '>

      {/* search Bar */}
      <div className='flex flex-1 justify-center'>

        <div class="hidden sm:flex items-center sm:ml-20 lg:ml-32 xl:ml-44 border border-gray-300 rounded-2xl overflow-hidden">

          <input
            type="text"
            placeholder="Search here..."
            class="px-4 py-2 w-72 outline-none text-gray-700 "
          />
          <MagnifyingGlassIcon className='w-6 h-6 mx-2 text-gray-700 cursor-pointer' />

        </div>
      </div>

      <MagnifyingGlassIcon className='w-5 h-5  text-gray-700 cursor-pointer hover:text-black transition-colors duration-200 sm:hidden' />
      <BellIcon className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer' />
      <EnvelopeIcon className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer' />
      <span className='profile flex items-center gap-3 sm:gap-4'>
        <button onClick={() => SetopenSetting(!openSetting)}>
          <img
            src={image}
            alt='Profile'
            className='w-7 h-7 sm:w-9 sm:h-9 rounded-full shadow-sm cursor-pointer'
          />
        </button>

        <span className='profile-name flex flex-col leading-tight'>
          <span className='name text-sm sm:text-base text-[#111] font-semibold'>Asad Ali</span>
          <span className='role text-xs sm:text-sm text-gray-500'>Admin</span>
        </span>

        {
          openSetting && (
            <div
              className={`absolute right-2 top-14 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden 
                        transition-all duration-300 ease-out transform 
                        ${openSetting ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"}`}
            >
              <ul className="py-2">
                <li className="flex items-center px-4 hover:text-blue-500 py-2 text-sm text-[#111] cursor-pointer transition-colors duration-200">
                  <Cog6ToothIcon className="w-5 h-5 mr-3 text-gray-500 hover:text-black" />
                  Settings
                </li>
                <li className="flex items-center px-4 py-2 text-sm text-[#111] hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                  <ArrowRightStartOnRectangleIcon className="w-5 h-5 mr-3 text-gray-500 hover:text-black" />
                  Logout
                </li>
              </ul>
            </div>


          )}
      </span>
    </header>
  );
}

export default Header;
