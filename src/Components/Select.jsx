import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Select = ({label,options}) => {
    const[isopen,setIsOpen] = useState(false);

    return (
        <>
            <div className="relative w-72 ml-4 mb-3 mt-4">
                <div
                    className={`flex items-center justify-between border-b  px-3 py-1 cursor-pointer ${isopen ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => setIsOpen(!isopen)}
                >
                    <span className='ml-2 text-black'>{label}</span>
                    <ChevronDownIcon className='w-6 h-6 text-gray-700' />
                </div>

                {isopen && (
                    <div className="border-b border-gray-300 bg-white z-10">
                        <div className="flex flex-col py-2 px-3">
                            {options.map((option,index)=>
                                <div className='flex items-center mb-2' key={index}>
                                <input type = "checkbox" id= {option} className='w-4 h-4'/>
                                <label htmlFor={option} className='ml-2 text-gray-700'>{option}</label>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </>

    )
}

export default Select