import React from 'react'
import contact from "../../assets/contact.webp"
import {Input,Button} from "../index"

const Contactus = () => {
  return (
  <>
   <h1 className='hidden md:inline-block ml-20  text-custom-dark mt-8 mb-4'>
       Home
     </h1>
      <h1 className='text-center text-2xl uppercase text-custom-dark -mb-3
       mt-4 md:hidden'>
        Contact Us
        
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
        
        <div className="flex justify-center">
          <img className='rounded-[34px] mt-8 p-5 md:mt-4 md:mb-10   md:ml-32' src={contact} alt='Contact' />
        </div>
        <div
            className='flex items-center justify-center w-full mb-10'
        >
            <div className={`  md:mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border `}>
                <h2 className=" hidden md:block md:text-center text-2xl uppercase">Contact us</h2>

                <form className='mt-8 mb-28 '>
                    <div className='space-y-5'>
                        <Input
                            placeholder="Enter your email"
                            type="email"

                        />
                        <Input
                            type="password"
                            placeholder="Enter your password"
                        />
                        <Input

                            type="tel"
                            placeholder="Enter your Phone Number"
                        />
                        <Input

                            type="text"
                            placeholder="Enter your Message"
                        />
                        

                        <Button
                            type="submit"
                            className="w-full"
                        >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
         
      </div>
  </>
  )
}

export default Contactus