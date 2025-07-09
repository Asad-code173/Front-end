import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FaFolderPlus, FaTrash, FaPencil } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const Products = () => {
  const queryClient = useQueryClient();
  const[editproduct,setEditProduct] = useState()
  

  // data fetching 

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch("/api/v1/products/get-products")
      if (!response) {
        throw new Error("Failed to Fetch Products")
      }
      const result = await response.json()
      return result.data;
    }

  })

  // edit products
  const EditProductMutation = useMutation({
    mutationFn: async ({ id, updateProduct }) => {
      const formData = new FormData()
      formData.append('name', updateProduct.name)
      formData.append('description', updateProduct.description);
      formData.append('category', updateProduct.category)
      if (updateProduct.photo) {
        formData.append('photo', updateProduct.photo);
      }
      formData.append('variants', JSON.stringify(updateProduct.variants))
      const response = await fetch(`/api/v1/products//update-product/${id}`, {
        method: "PUT",
        body: formData,
        credentials: 'include'
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message || "Failed to update product");
      }
      console.log("Product Update Successfully", result)
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      toast.success("Product updated successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    }

  })
  const handleEdit = (product) => {
    setEditProduct(product)
    const updateProduct = {
      name: product.name,
      description: product.description,
      category: product.category._id,
      photo: null,
      variants: product.variants,
    }
    EditProductMutation.mutate({
      id: product._id,
      updateProduct,
    });
  };



// delete products
const deleteProductMutation = useMutation({
  mutationFn: async (id) => {
    const resposne = await fetch(`/api/v1/products/delete-product/${id}`, {
      method: "DELETE",
      credentials: "include",

    })
    const result = await resposne.json()
    if (!resposne.ok) {
      throw new Error("Failed to Delete products")
    }
    return result
  },
  onSuccess: () => {
    queryClient.invalidateQueries(['products'])
    toast.success("Product deleted Successfully")

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
        onClick: () => deleteProductMutation.mutate(id)
      },
      {
        label: 'No',
        onClick: () => { }
      }
    ]
  })
}

return (
  <>
    <div className='flex justify-between items-center mr-10'>
      <h1 className='font-bold text-2xl'>Products</h1>
      <Link to="/admin/create-products">
        <button className='text-2xl flex items-center space-x-1'>
          <FaFolderPlus title="Add Product" className='text-black' />
        </button>
      </Link>
    </div>

    <div className='mt-6 mr-10 overflow-x-auto rounded-lg'>
      <table className='border-collapse bg-white w-full'>
        <thead>
          <tr>
            <th className='px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700'>S.No</th>
            <th className='px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700'>Product Name</th>
            <th className='px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700'>Category</th>
            <th className='px-8 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700'>Variants</th>
            <th className='px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700'>Image</th>
            <th className='px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 min-w-[200px]'>Description</th>
            <th className='px-4 py-3 text-right text-xs sm:text-sm font-semibold text-gray-700'>Action</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id} className='hover:bg-gray-100 text-sm align-top'>
              <td className='px-4 py-2 border-b border-gray-200'>{index + 1}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{product.name}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{product.category}</td>
              <td className='px-4 py-2 border-b border-gray-200 whitespace-nowrap'>
                <table className='text-xs w-full'>
                  <thead>
                    <tr>
                      <th className='pr-2'>Size</th>
                      <th className='pr-2'>Price</th>
                      <th className='pr-2'>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.variants.map((variant, i) => (
                      <tr key={i}>
                        <td>{variant.size}</td>
                        <td>PKR {variant.price}</td>
                        <td>{variant.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <img src={product.photo} alt={product.name} className='w-80 h-20 object-cover rounded' />
              </td>
              <td className='px-4 py-2 border-b border-gray-200 break-words'>{product.description}</td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <div className='flex justify-end space-x-3'>
                  <button
                    onClick={() => handleEdit(product)}
                    className='text-black hover:underline'>
                    <FaPencil title="Edit" />
                  </button>
                  <button className='text-black hover:underline hover:text-red-600'>
                    <FaTrash
                      onClick={() => handleDelete(product._id)}
                      title="Delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <ToastContainer position="top-right" autoClose={7000} hideProgressBar={false} />
        </tbody>
      </table>
    </div>
  </>
);
};

export default Products;
