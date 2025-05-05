import React from 'react';
import SideMenu from './Components/SideMenu';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="flex bg-gray-100 min-h-screen">
     
          <SideMenu />
        {/* Content area with padding-left instead of margin */}
        <div className="flex-1 pl-[20%]  overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
