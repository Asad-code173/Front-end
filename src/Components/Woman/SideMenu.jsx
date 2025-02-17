import React, { useState } from 'react';

import Select from '../Select';
import Button from "../Button"



const SideMenu = () => {
  return (
    <>
    <div className='desktop'>
                <span className='md:block  md:ml-8 text-2xl font-semibold hidden '>Shopping Options</span>
              


                <span className='md:block ml-12 text-xl font-semibold block underline mt-3 hidden'>Categories</span>
                <div className='md:block hidden'>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="mens" className='w-4 h-4 ml-12' />
                        <label htmlFor="mens" className='ml-2 text-gray-700 ml-2'>Mens</label>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="mens" className='w-4 h-4 ml-12' />
                        <label htmlFor="mens" className='ml-2 text-gray-700 ml-2'>Women</label>
                    </div>
                    <div className="flex items-center mt-3">
                        <input type="checkbox" id="mens" className='w-4 h-4 ml-12' />
                        <label htmlFor="mens" className='ml-2 text-gray-700 ml-2'>Fragrances</label>
                    </div>
                    <span className='ml-8 text-xl font-semibold block underline mt-3'>Products</span>
                    <Select label = "Women " options = {['Kurta', 'T-shirts', 'shalwar kammez']}/>
                    
                    <Select label = "Sizes" options = {['Xl', 'lg', 'Md']}/>
                    <Select label = "color" options = {['red', 'brown', 'green','blue']}/>
                    

                    <Button
                    style = {{color:"black"}}
                        type="submit"
                        className="w-32 ml-16 mb-4 mt-4 border-2 border border-black bg-gray-200"
                    >Clear Filters</Button>
                </div>



            </div>
    </>
    
  )
}

export default SideMenu
