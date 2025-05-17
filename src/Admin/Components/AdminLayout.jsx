import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);
  return (
    <>
      <div className='bg-gray-200 min-h-screen'>
        <Header />

        <div className='flex '>
          <Sidebar />
          <div className='ml-8 sm:ml-64 mt-10 w-full'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminLayout

