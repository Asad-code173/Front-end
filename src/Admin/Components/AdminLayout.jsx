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
        <div className='flex  '>
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminLayout

