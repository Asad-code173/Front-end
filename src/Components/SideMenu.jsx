import React, { useState } from 'react';
import Button from './Button';
import Select from './Select';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const SideMenu = () => {
    const [isSideMenu, setIsSideMenu] = useState(false);
    const [isproductopen, setIsProductsOpen] = useState(false);
    const [isproductopen1, setIsProductsOpen1] = useState(false);
    const [issizeopen, setIsSizeOpen] = useState(false);
    const [iscoloropen, setIsColorOpen] = useState(false);
    const [iscategoryOpen, setIsCategoryOpen] = useState(false);
    const toggleSideMenu = () => setIsSideMenu(!isSideMenu);

    return (
        <>
            {/* Desktop Devices */}

            <div className='desktop h-screen sticky left-0 '>
                <span className='md:block md:ml-8 text-2xl font-semibold hidden '>Shopping Options</span>
              
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
                    <Select label = "Men's " options = {['Kurta', 'T-shirts', 'shalwar kammez']}/>
                    <Select label = "Women" options = {['pent-shirt', 'Kurti', 'T-shir']}/>
                    <Select label = "Sizes" options = {['Xl', 'lg', 'Md']}/>
                    <Select label = "color" options = {['red', 'brown', 'green','blue']}/>
                    

                    <Button
                    style = {{color:"black"}}
                        type="submit"
                        className="w-32 ml-16 mb-4 mt-4 border-2 border border-black bg-gray-200"
                    >Clear Filters</Button>
                </div>



            </div>





            {/* Mobile devices  */}
            <Button
                onClick={toggleSideMenu}
                className="ml-4 mb-4 uppercase  rounded-none bg-gray-100 border border border-black   md:hidden"
                style={{ color: 'black' }}
            >
                Shop By
            </Button>
            
            <div className={`fixed inset-0 w-full h-full bg-gray-200 md:hidden transform ${isSideMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
                <div className="flex justify-between">
                    <div className="text-xl mt-[75px] ml-3">Shopping options</div>
                    <XMarkIcon
                        onClick={toggleSideMenu}
                        className="w-6 h-6 mt-20 cursor-pointer"
                    />
                </div>
                <div className=''>
                    {/* category drop down */}
                    <div className="md:hidden  relative w-[460px] ml-4 mb-3 mt-4">
                        <div
                            className={`flex items-center justify-between border-b  px-3 py-1 cursor-pointer ${iscategoryOpen ? 'border-black' : 'border-gray-400'}`}
                            onClick={() => setIsCategoryOpen(!iscategoryOpen)}
                        >
                            <span className='ml-2 text-black'>Category</span>
                            <ChevronDownIcon className='w-6 h-6 -mr-3  text-gray-700' />
                        </div>
                        {iscategoryOpen && (

                            <div className="flex flex-col py-2 px-3">
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="mens" className='w-4 h-4' />
                                    <label htmlFor="mens" className='ml-2 text-gray-700'>Men</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="womens" className='w-4 h-4' />
                                    <label htmlFor="womens" className='ml-2 text-gray-700'>Women</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="fragrances" className='w-4 h-4' />
                                    <label htmlFor="fragrances" className='ml-2 text-gray-700'>Fragrances</label>
                                </div>

                            </div>

                        )}
                    </div>
                    <div className="relative w-[460px] ml-4 mb-3 mt-4">
                        <div
                            className={`flex items-center justify-between border-b  px-3 py-1 cursor-pointer ${isproductopen1 ? 'border-black' : 'border-gray-400'}`}
                            onClick={() => setIsProductsOpen1(!isproductopen1)}
                        >
                            <span className='ml-2 text-black '>Men</span>
                            <ChevronDownIcon className='w-6 h-6 -mr-3 text-gray-700' />
                        </div>
                        {isproductopen1 && (
                            <div className="border-b border-gray-300  z-10">
                                <div className="flex flex-col py-2 px-3">
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="casual" className='w-4 h-4' />
                                        <label htmlFor="casual" className='ml-2 text-gray-700'>Causal</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="kurta" className='w-4 h-4' />
                                        <label htmlFor="kurta" className='ml-2 text-gray-700'>Kurta Pajama</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="shalwar" className='w-4 h-4' />
                                        <label htmlFor="shalwar" className='ml-2 text-gray-700'>Shalwar Kameez</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="tshirts" className='w-4 h-4' />
                                        <label htmlFor="tshirts" className='ml-2 text-gray-700'>T-shirts</label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative w-[460px] ml-4 mb-3 mt-4">
                        <div
                            className={`flex items-center justify-between border-b  px-3 py-1 cursor-pointer ${isproductopen ? 'border-black' : 'border-gray-400'}`}
                            onClick={() => setIsProductsOpen(!isproductopen)}
                        >
                            <span className='ml-2 text-black'>Women</span>
                            <ChevronDownIcon className='w-6 h-6 -mr-3 text-gray-700' />
                        </div>
                        {isproductopen && (
                            <div className="">
                                <div className="flex flex-col py-2 px-3">
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="wcasual" className='w-4 h-4' />
                                        <label htmlFor="wcasual" className='ml-2 text-gray-700'>Causal</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="wkurta" className='w-4 h-4' />
                                        <label htmlFor="wkurta" className='ml-2 text-gray-700'>Kurta Pajama</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="wshalwar" className='w-4 h-4' />
                                        <label htmlFor="wshalwar" className='ml-2 text-gray-700'>Shalwar Kameez</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="wtshirts" className='w-4 h-4' />
                                        <label htmlFor="wtshirts" className='ml-2 text-gray-700'>T-shirts</label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* size drop down */}
                    <div className="relative w-[460px] ml-4 mb-3">
                        <div
                            className={`flex items-center justify-between border-b  px-3 py-1 cursor-pointer ${issizeopen ? 'border-black' : 'border-gray-400'}`}
                            onClick={() => setIsSizeOpen(!issizeopen)}
                        >
                            <span className='ml-2 text-black'>Size</span>
                            <ChevronDownIcon className='w-6 h-6 -mr-3 text-gray-700' />
                        </div>
                        {issizeopen && (
                            <div className="flex flex-row space-x-6 border">
                                <p className='bg-gray-100  mt-3 mb-3 border rounded-full h-6 w-6 flex items-center justify-center'>XS</p>
                                <p className='bg-gray-100  mt-3 mb-3 border rounded-full h-6 w-6 flex items-center justify-center'>S</p>
                                <p className='bg-gray-100  mt-3 mb-3 border rounded-full h-6 w-6 flex items-center justify-center'>M</p>
                                <p className='bg-gray-100  mt-3 mb-3 border rounded-full h-6 w-6 flex items-center justify-center'>L</p>
                                <p className='bg-gray-100  mt-3 mb-3 border rounded-full h-6 w-6 flex items-center justify-center'>XL</p>
                            </div>
                        )}
                    </div>
                    {/* color select box */}
                    <div className="relative w-[460px] ml-4 mb-3 mt-4">
                        <div
                            className={`flex items-center justify-between border-b  px-3 py-1 cursor-pointer ${iscoloropen ? 'border-black' : 'border-gray-400'}`}
                            onClick={() => setIsColorOpen(!iscoloropen)}
                        >
                            <span className='ml-2 text-black'>Colors</span>
                            <ChevronDownIcon className='w-6 h-6 -mr-3 text-gray-700' />
                        </div>
                        {iscoloropen && (
                            <div className="border-b  z-10">
                                <div className="flex flex-col py-2 px-3">
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="red" className='w-4 h-4' />
                                        <label htmlFor="red" className='ml-2 text-gray-700'>Red</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="green" className='w-4 h-4' />
                                        <label htmlFor="green" className='ml-2 text-gray-700'>Green</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="blue" className='w-4 h-4' />
                                        <label htmlFor="blue" className='ml-2 text-gray-700'>Blue</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="checkbox" id="yellow" className='w-4 h-4' />
                                        <label htmlFor="yellow" className='ml-2 text-gray-700'>Yellow</label>
                                    </div>
                                </div>
                            </div>
                        )}
                     </div>
                    <Button
                    style = {{color:"black"}}
                        type="submit"
                        className="w-32 ml-8 mb-4 mt-4 border-2 border border-black bg-gray-200"
                    >Clear Filters</Button>
                </div>
                
            </div>


            <Button
            style = {{color:"black"}}
             className=' mb-4  rounded-none ml-[270px] sm:ml-[440px] uppercase border bg-gray-100 border-black md:hidden'>Sort By</Button>
        </>


        
    );
};

export default SideMenu;
