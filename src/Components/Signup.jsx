import { Button, Input } from './index'
import { Link } from "react-router-dom"
import {ToastContainer } from 'react-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useSignup } from '../hooks/useSignup';

function Signup() {
    const { data, errors, handleSignup, handleonChange,
        validateFields, passwordVisisble, showpassword
    } = useSignup();



    return (
        <>
            
            <div
                className=' w-3/4 sm:w-1/2 md:flex items-center justify-center w-2/4  mb-20 mx-auto mt-8 '
            >
                <div className={`md:mx-auto w-96 max-w-lg  rounded-none p-10 border border-black `}>
                <p className='text-sm text-center text-[#2d2b2a] mb-5'>Create your account</p>


                    <form className=''>
                        <div className='space-y-5'>
                            <div className=''>
                                <Input
                                    name="username"
                                    value={data.username}
                                    placeholder="Enter username"
                                    type="text"
                                    onChange={handleonChange}
                                    className={`${errors.username ? 'border-red-500 ' : 'border-blue-800'}`}
                                />


                            </div>
                            {
                                errors.username && (
                                    <p className=' text-sm ml-2 text-red-500 '>{errors.username}</p>
                                )
                            }


                            <div className='relative'>
                                <Input
                                    name="email"
                                    value={data.email}
                                    placeholder="Enter your email"
                                    type="email"
                                    onChange={handleonChange}
                                    className={`${errors.email ? 'border-red-500 -mb-4' : 'border-blue-800'}`}

                                />

                            </div>
                            {
                                errors.email && (
                                    <p className='text-red-500 text-sm ml-2 -mb-20'>{errors.email}</p>
                                )
                            }

                            <div className='relative'>
                                <Input
                                    name="password"
                                    value={data.password}
                                    type={showpassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    onChange={handleonChange}
                                    className={`${errors.password ? 'border-red-500 -mb-4' : 'border-blue-800'}`}
                                />
                                <div className='absolute right-0 bottom-3 flex items-center pr-3 
                            cursor-pointer'
                                    onClick={passwordVisisble}>
                                    {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}


                                </div>
                            </div>
                            {
                                errors.password && (
                                    <p className='text-sm text-red-500 ml-2 '>{errors.password}</p>
                                )
                            }


                            <span className="  text-black/60 text-xs ml-32 mt-6">
                                Already have any account?&nbsp;
                                <Link
                                    to="/login"
                                    className="font-medium text-primary transition-all duration-200 hover:underline"
                                >
                                    Login
                                </Link>
                            </span>

                            <Button
                                onClick={handleSignup}
                                type="submit"
                                className="!bg-[#2d2b2a] !text-sm outline-none !w-full !rounded-full"
                            >Signup</Button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>

    )
}

export default Signup