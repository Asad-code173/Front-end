import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { IoArrowBack } from 'react-icons/io5'; // from Ionicons

const EnquiryDetail = () => {
    const { id } = useParams()
    const navigate  = useNavigate()

    const { data: enquirybyId, isLoading, error } = useQuery({
        queryKey: ['enquirybyId', id],
        queryFn: async () => {
            const response = await fetch(`/api/v1/enquiries/fetchById/${id}`)
            console.log(response)
            if (!response.ok) {
                throw new Error("Failed to fetch Enquiry by Id")
            }
            const result = await response.json()
            console.log(result)
            return result.data

        }
    })
    if (isLoading) return <p>Loading enquiry...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>

            <div className="w-10/12 p-6 md:p-6 max-w-3xl  bg-white shadow rounded-md">
                <h2 className="text-2xl font-bold mb-4">Enquiry Detail</h2>
                <p><strong>Name:</strong> {enquirybyId.name}</p>
                <p><strong>Email:</strong> {enquirybyId.email}</p>
                <p><strong>Contact:</strong> {enquirybyId.contactNumber}</p>
                <p><strong>Type:</strong> {enquirybyId.messageType}</p>
                <p><strong>Status:</strong> {enquirybyId.status}</p>
                <p><strong>Message:</strong> {enquirybyId.message}</p>
                <button onClick={()=>navigate('/admin/enquiries')}><IoArrowBack className='mt-4'/></button>
            </div>
        </div>
    )
}

export default EnquiryDetail
