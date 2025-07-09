import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
      <div className='bg-gray-200 min-h-screen'>
        <Header />
    
        <div className='flex '>
          <Sidebar />
          <div className='ml-8 sm:ml-64 mt-10 w-full pb-20'>
          <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminLayout

