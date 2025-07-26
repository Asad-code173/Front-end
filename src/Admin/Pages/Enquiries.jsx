import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FiEye, FiFolder, FiClock, FiCheckCircle } from 'react-icons/fi';
import Card from "../Components/Card"
import {useNavigate} from "react-router-dom"


const Enquiries = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  console.log("Data mounted")

  const { data: enquiries, isLoading } = useQuery({
    queryKey: ['enquiries'],
    queryFn: async () => {
      const response = await fetch('/api/v1/enquiries/fetch-enquiries');
      if (!response.ok) throw new Error('Failed to fetch Enquiries');
      const result = await response.json();
      return result.data;
    },
  });


  // fetch EnquirybyId

  const viewmessage = (id)=>{
    navigate(`/admin/enquiries/${id}`)
  }


  // track Enquriy

  const { data: enquiryTrack } = useQuery({
    queryKey: ['enquiryTrack'],
    queryFn: async () => {
      const resposne = await fetch('/api/v1/enquiries/track-enquiry');
      if (!resposne.ok) throw new Error('Failed to fetch track stats')
      const result = await resposne.json();
      return result.data
    }
  })

  // update status

  const statusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const response = await fetch(`/api/v1/enquiries/updateEnquiry-status/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ status }),
      })
 
      if (!response.ok) {
        throw new Error("Failed to update Status")
      }
      const result = await response.json()
      return result.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['enquiries']);
      queryClient.invalidateQueries(['enquiryTrack']);
    },
    onError: (error) => {
      console.log("Some thing went wrong", error)
    }

  })
  const handleChange = ({ id, newStatus }) => {
    statusMutation.mutate({ id, status: newStatus })
  }


  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 underline ">Enquiries</h1>
      <div className="p-6 max-w-5xl mx-auto">

        <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between mb-6'>


          <Card title="Total Complaints" count={enquiryTrack?.totalEnquiry || 0} icon={FiFolder} />
          <Card title="In Progress Complaints" count={enquiryTrack?.pendingEnquiry || 0} icon={FiClock} />
          <Card title="Solved Complaints" count={enquiryTrack?.completedenquiry || 0} icon={FiCheckCircle} />

        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>

              {enquiries?.map((enquiry, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">{enquiry.name}</td>
                  <td className="px-6 py-4">{enquiry.email}</td>
                  <td className="px-6 py-4">{enquiry.contactNumber}</td>
                  <td className="px-6 py-4">{enquiry.messageType}</td>


                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => viewmessage(enquiry._id)}
                      className="text-blue-600  hover:text-blue-800"
                      title="View Message"
                    >
                      <FiEye className="w-5 h-5" />
                    </button>
                  </td>

                  <td className="px-6 py-4">
                    <select
                      value={enquiry.status}
                      onChange={(e) => handleChange({ id: enquiry._id, newStatus: e.target.value })}

                      className={`rounded-md px-3 py-1 text-sm font-medium border ${enquiry.status === 'Solved'
                        ? 'text-green-600'
                        : enquiry.status === 'In Progress'
                          ? 'text-blue-600'
                          : 'text-yellow-600'
                        } bg-gray-50`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Solved">Solved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && (
            <div className="text-center py-6 text-gray-500">Loading enquiries...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Enquiries;
