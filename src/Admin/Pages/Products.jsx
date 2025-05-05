import React, { useState } from 'react'
import { FaFolderPlus, FaTrash, FaPencil } from 'react-icons/fa6';
import { Button, Input } from '../../Components';

const Categories = () => {

    const [isProductopen, setIsProductOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-2xl'>Products</h1>
                </div>
                <button
                    onClick={() => setIsProductOpen(true)}
                    className='cursor-pointer text-2xl'
                >
                    <FaFolderPlus title="Add Category" className='mr-8' />
                </button>
            </div>

            {isProductopen && (
                <div className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50">
                   <div className="bg-white w-9/12 sm:w-8/12 sm:ml-52 sm:mr-20 md:max-w-lg mt-16 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out animate-slideInTop 
+ max-h-[90vh] overflow-y-auto">


                        <div className="modal-header flex justify-between items-center p-4 border-b">
                            <h5 className="modal-title text-xl font-semibold">Add Products</h5>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setIsProductOpen(false)}
                            >
                                <span className="text-2xl">&times;</span>
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form className="p-4 space-y-4">
                            <div className="flex flex-col space-y-4">
                                {/* Row for Product Name and Price */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Product Name */}
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label className="text-sm mb-2 ml-1 font-medium">Product Name</label>
                                        <Input
                                            className="w-full"
                                            placeholder="White Kurta"
                                        />
                                    </div>

                                    {/* Price */}
                                    <div className="flex flex-col w-full sm:w-1/2">
                                        <label className="text-sm mb-2 ml-1 font-medium">Price</label>
                                        <Input
                                            className="w-full"
                                            placeholder="Rs 2000"
                                        />
                                    </div>
                                </div>

                                {/* Field for Category */}
                                <div className='flex flex-col'>
                                    <label className="text-sm mb-2 ml-1 font-medium">Category</label>
                                    <Input
                                        className="w-full"
                                        placeholder="Men's Wear"
                                    />
                                </div>

                                {/* Field for Quantity */}
                                {/* Field for Image Upload */}
                                <div className='flex flex-col'>
                                    <label className="text-sm mb-2 ml-1 font-medium">Image</label>
                                    <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
                                        <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m10 0v12m-5 4h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2h-3.586a1 1 0 01-.707-.293l-1.414-1.414A2 2 0 0011.586 4H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-sm text-gray-500 mb-1">Drag and drop your image here</p>
                                        <p className="text-xs text-gray-400">or click to upload</p>
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => console.log(e.target.files[0])}
                                        />
                                    </div>
                                </div>


                                {/* Field for Description */}
                                <div className='flex flex-col'>
                                    <label className="text-sm mb-2 ml-1 font-medium">Description</label>
                                    <Input
                                        className="w-full"
                                        placeholder="Lightweight cotton kurta for men."
                                    />
                                </div>
                            </div>

                            <div className="modal-footer p-3 mb-4  border-t">
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>

                    </div>
                </div>
            )}



             <div className='mt-5  '>
                    <table className='w-96 sm:w-4/5 '>
                      <thead className='bg-white '>
                        <tr className=''>
                          <th className='text-left px-4 font-semibold text-sm text-gray-700'>S.No</th>
                          <th className='py-3 px-4 text-left text-sm font-semibold text-gray-700'>Product Name</th>
                          <th className='py-3  px-7 text-end text-sm font-semibold text-gray-700'>Price</th>
                          <th className='py-3  px-7 text-end text-sm font-semibold text-gray-700'>Category</th>
                          <th className='py-3  px-7 text-end text-sm font-semibold text-gray-700'>Description</th>
                          <th className='px-7 text-end text-sm font-semibold text-gray-700'>Action</th>
                        </tr>
            
                      </thead>
            
                      <tbody>
                       
                          <tr  className='hover:bg-gray-100 '>
                            <td className='py-2 px-6 border-b border-gray-300'>1</td> {/* Display serial number */}
                            <td className='py-2 px-4 border-b border-gray-300'>Brown Kurta</td>
                            <td className='py-2 px-4 border-b border-gray-300'>Rs 2000</td>
                            <td className='py-2 px-4 border-b border-gray-300'>Mens</td>
                            <td className='py-2 px-4 border-b border-gray-300'>Image</td>
                            <td className='  border-b border-gray-300'>Description</td>

                            <td className='border-b border-gray-300'>
            
                              <div className='flex justify-end space-x-2'>
                                <button
                                  className='text-black hover:underline'>
                                  <FaPencil title="Edit" />
                                </button>
                                <button
                                  className='text-black hover:underline hover:text-red-600'>
                                  <FaTrash title="Delete" />
                                </button>
                              </div>
                            </td>
                          </tr>
                  
                      </tbody>
                    </table>
                  </div>
        </>
    )
}

export default Categories
