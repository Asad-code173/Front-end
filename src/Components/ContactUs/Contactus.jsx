import React, { useState } from 'react'
import contact from "../../assets/contact.webp"
import { Input, Button } from "../index"
import { useMutation } from '@tanstack/react-query'

const Contactus = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        messageType: "",
        message: ""
    })
    const [error, setError] = useState({})
    const handlechange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (value.trim() != "") {
            setError({})
        }
    }

    const errorHandling = () => {
        let error = {}
        if (!formdata.name) {
            error.name = "Name is Required"
            setError(error)
            return false
        }
        if (!formdata.email) {
            error.email = "Email is Required"
            setError(error)
            return false
        }
        if (!formdata.contactNumber) {
            error.contactNumber = "contactNumber is Required"
            setError(error)
            return false
        }
        if (!formdata.messageType) {
            error.messageType = " This Field is Required"
            setError(error)
            return false
        }
        if (!formdata.message) {
            error.message = " Message is Required"
            setError(error)
            return false
        }
        setError({})
        return true
    }
    // insert record

    const insertRecordmutation = useMutation({
        mutationFn: async (data) => {
            const response = await fetch('/api/v1/enquiries/create-enquiry', {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            if (!response.ok) {
                throw new Error("Some thing went wrong")

            }
            console.log(response + "Response logged")
            const result = await response.json()
            console.log("Result logged", result)
            return result



        },
        onSuccess: (data) => {
            setFormData({
                name: "",
                email: "",
                contactNumber: "",
                messageType: "",
                message: ""
            })
        },
        onError: (error) => {
            alert("Submission failed: " + error.message)
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (errorHandling()) {
            insertRecordmutation.mutate(formdata)
            console.log("data submitted", formdata)

        }
    }

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
                    className='flex items-center justify-center w-full mb-20'
                >
                    <div className={`  md:mx-auto w-full max-w-lg   p-10 border border-black `}>
                        <h2 className=" hidden md:block md:text-center text-2xl uppercase">Contact us</h2>

                        <form onSubmit={handleSubmit} className='mt-8  '>
                            <div className='space-y-5'>
                                <div className='flex gap-9'>
                                    <div className='flex flex-col'>
                                        <Input
                                            name="name"
                                            onChange={handlechange}
                                            value={formdata.name}
                                            placeholder="Enter your Name"
                                            className={`${error.name ? 'border-red-500' : 'border-black'} w-48`}

                                        />
                                        {
                                            error.name && (<p className='text-red-600 ml-2 text-sm'>{error.name}</p>)
                                        }
                                    </div>
                                    <div className='flex flex-col'>
                                        <Input
                                            name="email"
                                            onChange={handlechange}
                                            value={formdata.email}
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className={`${error.email ? 'border-red-500' : 'border-black'} w-48`}

                                        />
                                        {
                                            error.email && (<p className='text-red-600 ml-2 text-sm'>{error.email}</p>)
                                        }
                                    </div>
                                </div>

                                <div className='flex gap-9'>
                                    <div className='flex flex-col'>
                                        <Input
                                            value={formdata.contactNumber}
                                            onChange={handlechange}
                                            name="contactNumber"
                                            placeholder="Contact Number"
                                            type="name"
                                            className={`${error.contactNumber ? 'border-red-500' : 'border-black'} w-48`}

                                        />
                                        {
                                            error.contactNumber && (<p className='text-sm text-red-600 ml-2'>{error.contactNumber}</p>)
                                        }
                                    </div>
                                    <div className='flex flex-col'>
                                        <select
                                            name="messageType"
                                            value={formdata.messageType}
                                            onChange={handlechange}
                                            className={`${error.messageType ? 'border-red-500' : 'border border-black'} w-48 p-3 rounded-md border border-black  `}


                                        >

                                            <option value="">Select Message Type</option>
                                            <option value="enquiry" className='text-black'>Enquiry</option>
                                            <option value="complaint" className='text-black'>Complaint</option>
                                        </select>
                                        {
                                            error.messageType && (<p className='text-sm text-red-600 ml-2'>{error.messageType}</p>)
                                        }
                                    </div>
                                </div>
                                <textarea
                                    name="message"
                                    value={formdata.message}
                                    onChange={handlechange}
                                    className={`${error.message ? 'border-red-500' : 'border border-black'} border border-black w-[420px] h-36 p-3 rounded-md `}
                                    placeholder='Enter your Message' id="">

                                </textarea>
                                {
                                    error.message && (<p className='text-sm text-red-600 ml-3'>{error.message}</p>)
                                }
                                <Button
                                    type="submit"
                                    className="w-full !bg-[#2d2b2a] "
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