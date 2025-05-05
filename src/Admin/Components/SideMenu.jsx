import { Bars3Icon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import useSideMenu from "../Hooks/useSideMenu";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
    const [sidemenuopen, SetSideMenuOpen] = useState(false);
    const location = useLocation();
    const SideItems = useSideMenu();

    return (
        <>
            {/* Menu Icon for Mobile */}
            <div className='ml-3 mt-4 sm:hidden'>
                <Bars3Icon
                    onClick={() => SetSideMenuOpen(!sidemenuopen)}
                    className='w-6 h-6 cursor-pointer' />
            </div>

            {/* Desktop SideMenu */}
            <div id='desktop' className='bg-white w-1/5 fixed inset-0 h-full hidden md:block'>
                <h2 className='text-2xl font-bold mb-8 ml-2'>Logo.</h2>
                {SideItems.map((item) =>
                    <Link
                        key={item.url}
                        to={item.url}
                        className={`ml-8 flex items-center space-x-2 p-2${location.pathname === item.url ? '' : ''}`}
                    >
                        <item.Icon className='text-xl' />
                        <span className='ml-2'>{item.text}</span>
                    </Link>
                )}
            </div>

            {sidemenuopen && (
                <div
                    className={`bg-white w-36 fixed inset-y-0 left-0 transform ${
                        sidemenuopen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out sm:hidden`}
                >
                    <div id='menuicon' className='ml-28 mt-4'>
                        <Bars3Icon
                            className='w-6 h-6 cursor-pointer'
                            onClick={() => SetSideMenuOpen(!sidemenuopen)} />
                    </div>
                    <h2 className='text-2xl font-bold mb-8 ml-2'>Logo.</h2>
                    {SideItems.map((item) =>
                        <Link
                            key={item.url}
                            to={item.url}
                            className={`ml-3 flex items-center space-x-2 p-2${location.pathname === item.url ? '' : ''}`}
                        >
                            <item.Icon className='text-sm' />
                            <span className='ml-2'>{item.text}</span>
                        </Link>
                    )}
                </div>
            )}
        </>
    );
}

export default SideMenu;
