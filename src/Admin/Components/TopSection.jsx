import React from 'react'
// import { MdAccountCircle } from 'react-icons/md'

const TopSection = () => {
  return (
    <div className='container max-w-5xl px-4'>
      <div className='grid grid-cols-1 w-44  sm:grid-cols-2 sm:gap-y-3 sm:w-[100%] sm:-ml-[12%] md:-ml-0 md:grid-cols-3 md:w-full lg:grid-cols-4 mt-6 space-y-5  sm:space-y-0 gap-x-14 '>
        <div className='bg-white border border-black rounded-sm shadow-lg'>
          <div className='flex flex-col p-2'>
            <span>Transactions</span>
            <span>Rs 34000</span>
            <span>Asad</span>
            <span>Ali</span>
          </div>
        </div>
        <div className='bg-white border border-black rounded-sm shadow-lg'>
          <div className='flex flex-col p-2'>
            <span>Revenues</span>
            <span>Rs 34000</span>
          </div>
        </div>
        <div className='bg-white border border-black rounded-sm shadow-lg'>
          
            {/* <MdAccountCircle className=" text-6xl ml-[70%] " /> */}
         
          <div className='flex flex-col p-2'>
            <span>Customers</span>
            <span>Rs 34000</span>
          </div>
        </div>
        <div className='bg-white border border-black rounded-sm shadow-lg'>
          <div className='flex flex-col p-2'>
            <span>Products</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection
