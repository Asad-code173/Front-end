import React, { useState } from 'react';
import { Button, Input } from './index';
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useLogin } from '../hooks/useLogin';
import google from "../assets/google.png"
import facebook from "../assets/facebook.jpeg"


const Signin = () => {
  const { data,
    passwordvisible,
    validateFields,
    handleSignin,
    handleonChange,
    errors,
    showPassword } = useLogin();
  return (
    <>
      
      <div className='w-3/4 sm:w-1/2 md:flex items-center justify-center w-2/4  mb-20 mx-auto mt-8'>
        <div className={`md:mx-auto w-96 max-w-lg  rounded-none p-10 border border-black`}>
          <form className=''>
            <p className='text-sm text-center text-[#2d2b2a] mb-5'>Login into your account</p>
            <div className='space-y-5'>
              <Input
                name="email"
                value={data.email}
                placeholder="Enter your email"
                type="email"
                onChange={handleonChange}
                className={`${errors.email ? 'border-red-500 -mb-4' : ''}`}
              />
              {
                errors.email && (
                  <p className='text-sm text-red-500 ml-2'>{errors.email}</p>
                )
              }

              <div className="relative">
                <Input
                  name="password"
                  value={data.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={handleonChange}
                  className={` ${errors.password ? 'border-red-500 -mb-4' : ''}`}
                />

                <div
                  className="absolute inset-y-5 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={passwordvisible}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}

                </div>
              </div>
              {
                errors.password && (
                  <p className='text-sm text-red-500 ml-2'>{errors.password}</p>
                )
              }
              <div className='ml-48'>
                <Link to='/forgot-password'><p className='text-sm cursor-pointer mb-3 -mt-4 underline'>Forgot Password</p></Link>
              </div>



              <Button
                onClick={handleSignin}
                type="submit"
                className="!bg-[#2d2b2a] !text-sm outline-none !w-full !rounded-full"
              >
                LOGIN
              </Button>


            </div>
            <div className="relative flex items-center mt-[33px] mb-[31px]">
              <div className="flex-grow h-px bg-[#dcdbdb]"></div>
              <p className="text-center leading-4 font-bold px-4 bg-white text-[#2d2b2a] text-sm">
                OR LOGIN WITH
              </p>
              <div className="flex-grow h-px bg-[#dcdbdb]"></div>
            </div>
            <div className="social-image">
              <div className='flex justify-center space-x-5'>
                <img src={google} className='w-6 h-6 cursor-pointer' />
                <img src={facebook} className='w-6 h-6 cursor-pointer' />
              </div>

            </div>
            <span className=" text-black/60 text-xs ml-20 mt-6">
              Dont have  account?&nbsp;
              <Link
                to="/Signup"
                className="font-medium text-[#2d2b2a] underline transition-all duration-200 hover:underline"
              >
                Signup
              </Link>
            </span>




          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
