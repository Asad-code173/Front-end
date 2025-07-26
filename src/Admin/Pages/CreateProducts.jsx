import React, { useState, useRef, useEffect } from 'react';
import { Button, Input } from '../../Components';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

const CreateProducts = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const fileRef = useRef();
  const { slug } = useParams()

  const isEdit = Boolean(slug)

  const [data, setData] = useState({
    ProductName: '',
    category: '',
    Image: null,
    description: '',
  });

  const [variants, setVariants] = useState([
    { size: '', price: '', stock: '' },
  ]);

  const [error, setError] = useState({});

  const { data: getProduct } = useQuery({
    enabled: !!slug,
    queryKey: ['getProduct', slug],
    queryFn: async () => {
      const response = await fetch(`/api/v1/products/get-single-product/${slug}`)
      if (!response.ok) {
        throw new Error("Failed to fetch product by Id")
      }
      console.log(response)
      const result = await response.json()
      console.log(result)
      return result.data[0]
    }
  })

  useEffect(() => {
    console.log("Hi", getProduct)
    if (isEdit && getProduct) {
      console.log("Get product id",getProduct._id)
      setData({
        ProductName: getProduct?.name,
        category: getProduct?.category?._id || getProduct?.category?.name,
        Image: getProduct.Image,
        description: getProduct.description || '',
      })
      setVariants(getProduct.variants || [{ size: '', price: '', stock: '' }])

    }
  }, [isEdit, getProduct])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVariantChange = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  const addVariant = () => {
    setVariants([...variants, { size: '', price: '', stock: '' }]);
  };

  const removeVariant = (index) => {
    const updated = variants.filter((_, i) => i !== index);
    setVariants(updated);
  };


  const validateFields = () => {
    let errors = {};
    if (!data.ProductName) {
      errors.ProductName = 'Product Name is required';
      setError(errors)
      return false
    }
    if (!data.category) {
      errors.category = 'Category is required';
      setError(errors);
      return false;
    }

    if (!data.Image) {
      errors.Image = 'Image is required';
      setError(errors);
      return false;
    }

    if (!data.description) {
      errors.description = 'Description is required';
      setError(errors);
      return false;
    }


    const variantErrors = variants.map((variant, index) => {
      let err = {};
      if (!variant.size) err.size = 'Size is  required';
      if (!variant.price) err.price = 'Price is  required';
      if (!variant.stock) err.stock = 'Stock is  required';
      return err;
    });

    const isVariantError = variantErrors.some(
      (v) => v.size || v.price || v.stock
    );

    if (isVariantError) errors.variants = variantErrors;

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch("/api/v1/categories/get-category")
      if (!response.ok) {
        throw new Error("Failed to Fetch Categories")
      }
      const result = await response.json()
      return result.data;
    }
  })

  const ProductMutation = useMutation({
    mutationFn: async (formData) => {
      const Edit = isEdit ? `/api/v1/products/update-product/${getProduct._id}` : `/api/v1/products/create-product`
      const Editmethod = isEdit ? 'PUT' : 'POST'
      const response = await fetch(Edit, {
        method: Editmethod,
        body: formData,
        credentials: "include"
      })
      const result = await response.json()
      if (!response.ok) throw new Error(`Failed to ${isEdit ? 'update' : 'create'}Product`);
      if (response.ok) {
        setData({ ProductName: '', category: '', Image: null, description: '' })
        setVariants([{ size: '', price: '', stock: '' }])
        navigate("/admin/products")
      }
      return result.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    },
    onError: (err) => {
      console.error(err.message);

    }

  })

  const submitForm = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const formData = new FormData();
    formData.append('name', data.ProductName);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('photo', data.Image);
    formData.append('variants', JSON.stringify(variants));

    console.log('Submitting Form', data, variants);
    ProductMutation.mutate(formData)
  };






  return (
    <div className="ml-10 md:ml-0 max-w-3xl">
      <form onSubmit={submitForm} className="space-y-6">


        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label>Product Name</label>
            <Input
              name="ProductName"
              value={data.ProductName}
              onChange={handleChange}
              placeholder="T-shirt"
              className={`${error.ProductName ? 'border-red-500' : 'border-black'} rounded-md h-10 px-2 bg-gray-200 `}
            />
            {error.ProductName && <p className="text-red-600 text-sm">{error.ProductName}</p>}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>Category</label>
            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              className={`${error.category ? 'border-red-500' : 'border border-black'} rounded-md h-10 px-2 bg-gray-200 `}
            >
              <option value="">Select Category</option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>

            {error.category && <p className="text-red-600 text-sm">{error.category}</p>}
          </div>
        </div>


        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Variants</h3>
          {variants?.map((variant, index) => (
            <div key={index} className="flex flex-wrap md:flex-nowrap items-center gap-4">
              <select
                value={variant.size}
                onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
                className="w-1/4 bg-gray-200 rounded-md px-2 h-10 border border-black"
              >
                <option value="">Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>

              <Input
                placeholder="Price"
                value={variant.price}
                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                className="w-1/4 bg-gray-200 rounded-md px-2 h-10 border-black"
              />

              <Input
                placeholder="Stock"
                value={variant.stock}
                onChange={(e) => handleVariantChange(index, 'stock', e.target.value)}
                className="w-1/4 bg-gray-200 rounded-md px-2 h-10 border-black"
              />

              <Button type="button" onClick={() => removeVariant(index)} className="text-red-600">
                Remove
              </Button>

              {error.variants && error.variants[index] && (
                <div className="w-full text-red-500 text-sm">
                  {Object.values(error.variants[index]).join(', ')}
                </div>
              )}
            </div>
          ))}
          <Button type="button" onClick={addVariant} className="mt-2">
            + Add Variant
          </Button>
        </div>


        <div className="flex flex-col gap-2 w-full">
          <label>Product Image</label>
          <div
            className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer bg-white hover:border-gray-600"
            onClick={() => fileRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) setData((prev) => ({ ...prev, Image: file }));
            }}
          >
            <p className="text-gray-600">Drag & drop or click to upload</p>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) setData((prev) => ({ ...prev, Image: file }));
              }}
            />
            {data.Image ? (
              typeof data.Image === 'string' ?
                (
                  <img src={data.Image} alt="Existing Product" className="h-24 mx-auto mt-2" />
                ) : (
                  <p className="text-black mt-2">Selected: {data.Image?.name}</p>
                )
            ):null}

            {error.Image && <p className="text-red-500 text-sm">{error.Image}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 w-full">
          <label>Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Enter description"
            className={`${error.description ? 'border-red-500' : 'border border-black'} rounded-md h-32 p-2 bg-gray-200 resize-none`}
          />
          {error.description && <p className="text-red-500 text-sm">{error.description}</p>}
        </div>

        {/* Submit */}
        <div className="text-right">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"

          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
