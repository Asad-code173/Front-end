import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FaPencil, FaTrash, FaFolderPlus } from 'react-icons/fa6'
import { Input, Button } from '../../Components'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';


const SubCategories = () => {
  const [addSubCategory, setAddSubCategory] = useState(false)
  const[error,setError] = useState({})
  

  const [data, setData] = useState({
    subcategoryName: '',
    selectedCategory: ''
  })


  const queryClient = useQueryClient()

  // Fetch all categories for dropdown
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch("/api/v1/categories/get-category")
      const data = await res.json()
      return data.data
    }
  })

  // fetching sub categories
  const { data: subcategories } = useQuery({
    queryKey: ['subcategories'],
    queryFn: async () => {
      const response = await fetch("/api/v1/subcategory/get-subcategories")
      console.log(response);

      const result = await response.json()
      console.log(result)
      return result.data
    }
  })

  // insert subcategories
  const insertMutation = useMutation({
    mutationFn: async ({ newsubCategory, parentCategory }) => {
      const response = await fetch("/api/v1/subcategory/create-subcategory", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: newsubCategory, parentCategory: parentCategory }),
        credentials: 'include'
      })
      console.log(response)
      const result = await response.json()
      console.log(result)
      return result


    },
    onSuccess: () => {
      setData({
        subcategoryName: "",
        selectedCategory: "",

      })
      setAddSubCategory(false)
      queryClient.invalidateQueries(['subcategories'])
    },
    onError: (err) => {
      console.error(err.message);

    }
  })


  // Edit SubCategories
  

  // delete subCategories
  const deletesubCategoriesMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/v1/subcategory/delete-subcategory/${id}`, {
        method: "DELETE",
        credentials: "include"

      })

      const result = await response.json()
      if (!response.ok) {
        throw new Error("Failed to Delete SubCategories")
      }
      console.log(result)
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['subcategories'])
    },
    onError: (err) => {
      console.log(err.message)
    }
  })


  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deletesubCategoriesMutation.mutate(id)
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    })
  }


  const validateFields = () => {
    let error = {}
    if (!data.subcategoryName.trim()) {
      error.subcategoryName = "Sub Categories is required"
      setError(error)
      return false
    }
    if (!data.selectedCategory) {
      error.selectedCategory = "Parent Category is Required"
      setError(error)
      return false
    }
    setError({})
    return true

  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
    if (value.trim() != "") {
      setError({})
    }

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateFields()) return
    console.log("Data submitted", data)
    insertMutation.mutate({ newsubCategory: data.subcategoryName, parentCategory: data.selectedCategory })
  }



  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Sub Categories</h1>
        <button
          onClick={() => setAddSubCategory(true)}
          className='cursor-pointer text-2xl'>
          <FaFolderPlus title="Add Sub Category" className='mr-8' />
        </button>
      </div>

      {/* Modal */}
      {addSubCategory && (
        <div className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white w-9/12 sm:w-8/12 sm:ml-52 md:w-full max-w-lg h-96 mt-16 rounded-lg shadow-lg animate-slideInTop">
            <div className="modal-header flex justify-between items-center p-4 border-b">
              <h5 className="text-xl font-semibold">Add Sub Category</h5>

              <button
                onClick={() => setAddSubCategory(!addSubCategory)}
                className="text-gray-500 hover:text-gray-700 text-2xl"

              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">SubCategory Name:</label>
                <Input
                  name="subcategoryName"
                  value={data.subcategoryName}
                  onChange={handleChange}
                  placeholder="Enter SubCategory"
                  className={`${error.subcategoryName ? 'border-red-500' : 'border-black'}`}
                />
                {error.subcategoryName && <p className='text-red-500 text-sm mt-1 ml-2'>{error.subcategoryName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Main Category:</label>
                <select
                  name="selectedCategory"
                  value={data.selectedCategory}
                  onChange={handleChange}
                  className={`${error.selectedCategory ? 'border-red-500' : 'border-black'} w-full border border-gray-300 rounded px-3 py-2`}
                >
                  <option value="">Select Category</option>
                  {categories && categories.map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                  ))}
                </select>
                {error.selectedCategory && <p className="text-red-500 text-sm">{error.selectedCategory}</p>}
              </div>



              <div className="p-3 border-t">
                <Button className='mt-7' type="submit">Submit</Button>

              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className='mt-5'>
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm text-gray-700">S.No</th>
              <th className="px-4 py-2 text-left text-sm text-gray-700">Subcategory</th>
              <th className="px-4 py-2 text-left text-sm text-gray-700">Main Category</th>
              <th className="px-4 py-2 text-left text-sm text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subcategories && subcategories.map((sub, index) => (
              <tr key={sub._id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{sub.name}</td>
                <td className="px-4 py-2">{sub.parentCategory?.name || "N/A"}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      className="text-black hover:text-blue-600"
                    >
                      <FaPencil title="Edit" />
                    </button>
                    <button
                      onClick={() => handleDelete(sub._id)}
                      className="text-black hover:text-red-600"
                    >
                      <FaTrash title="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SubCategories
