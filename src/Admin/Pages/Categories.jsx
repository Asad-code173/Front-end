import React, { useState } from 'react'

import { FaFolderPlus, FaTrash, FaPencil } from 'react-icons/fa6';
import { Button, Input } from '../../Components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Categories = () => {


  const [addCategory, setaddCategory] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(false);
  const [editcategory, setEditCategory] = useState()


  const queryClient = useQueryClient();

  // fetch all categories
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch("/api/v1/categories/get-category")
      if (!response) {
        throw new Error("Failed to Fetch Categories")
      }
      console.log(response);
      const result = await response.json()
      console.log(result);
      return result.data;
    }
  })
 

  const mutation = useMutation({
    mutationFn: async (newCategory) => {
      const response = await fetch("/api/v1/categories/insert-category", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newCategory),
        credentials: "include"
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error('Failed to create category');

      }
      return result

    },
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
    },
    onError: (err) => {
      console.error(err.message);

    }
  })


  const handleChange = (e) => {
    setCategoryName(e.target.value)
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() == "") {
      setError("Category is Required")
      return
    }
    if (editcategory) {
      editMutation.mutate({ id: editcategory, name: categoryName })
    }
    else {
      mutation.mutate({ name: categoryName });
    }
    console.log(categoryName);
    setCategoryName("")
    setaddCategory(false)
    setEditCategory(null)

  }

  // delete Categories
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/v1/categories/delete-category/${id}`, {
        method: "DELETE",
        credentials: "include"
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error("Failed to Delete Category")
      }
      return result

    },
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
    },
    onError: (err) => {
      console.log(err.message)
    }
  })

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteMutation.mutate(id);
    }
  }

  // edit mutation
  const editMutation = useMutation({
    mutationFn: async ({ id, name }) => {
      const response = await fetch(`/api/v1/categories/update-category/${id}`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name }),
        credentials: "include"
      })
      if (!response.ok) {
        throw new Error("Failed to update Category")
      }
      return await response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
    onError: (err) => console.error(err.message)
  })

  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className=' font-bold text-2xl'>Categories</h1>
        </div>
        <button
          onClick={() => setaddCategory(!addCategory)}
          className='cursor-pointer text-2xl'>
          <FaFolderPlus title="Add Category" className='mr-8' />
        </button>
      </div>



      {addCategory && (

        <div
          className="fixed inset-0 flex  justify-center bg-gray-800 bg-opacity-50 z-50"
        >
          <div
            className="bg-white w-9/12 sm:w-8/12 sm:ml-52  md:w-full max-w-lg h-64 mt-16 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out animate-slideInTop"

          >

            <div className="modal-header flex justify-between items-center p-4 border-b">
              <h5 className="modal-title text-xl font-semibold">{editcategory ? 'Edit Category' : 'Add Category'}</h5>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setaddCategory(!addCategory)} // Close button
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="form-group">
                <label className="block text-sm font-medium">Category Name:</label>
                <Input
                  value={categoryName}
                  onChange={handleChange}
                  placeholder="Category Name"
                  className={`${error ? 'border-red-500 ' : 'mt-2'}`} />
                {error && <p className='text-red-500 text-sm mt-1 ml-2'>{error}</p>}
              </div>
              <div className="modal-footer p-4 flex justify-between items-center border-t">
                <Button type='submit'>{editcategory ? 'Update' : 'Submit'}</Button>
              </div>
            </form>
          </div>
        </div>
      )}


      <div className='mt-5  '>
        <table className='w-96 sm:w-4/5 '>
          <thead className='bg-white '>
            <tr className='' >
              <th className='text-left px-4 font-semibold text-sm text-gray-700'>S.No</th>
              <th className='py-3 px-4 text-left text-sm font-semibold text-gray-700'>Name</th>
              <th className='py-3  px-7 text-end text-sm font-semibold text-gray-700'>Action</th>
            </tr>

          </thead>

          <tbody>
            {categories && categories.map((category,index) => (
              <tr key={index} className='hover:bg-gray-100 '>
                <td className='py-2 px-6 border-b border-gray-300'>{index + 1}</td> {/* Display serial number */}
                <td className='py-2 px-4 border-b border-gray-300'>{category.name}</td>
                <td className='border-b border-gray-300 pr-8'>

                  <div className='flex justify-end space-x-2'>
                    <button
                      onClick={() => {
                        setaddCategory(true)
                        setCategoryName(category.name)
                        setEditCategory(category._id)
                      }}
                      className='text-black hover:underline'>
                      <FaPencil title="Edit" />
                    </button>
                    <button
                      title={category._id}
                      onClick={() => handleDelete(category._id)}
                      className='text-black hover:underline hover:text-red-600'>
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

export default Categories
