import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { slug } = useParams()
    const [selectedVariant, setSelectedVariant] = useState(null)

    const sizeLabels = {
        XS:"Extra Small",
        S: "Small",
        M: "Medium",
        L: "Large",
        XL: "Extra Large",
        XXL:"Extra-Extra Large"
    
    }

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', slug],
        queryFn: async () => {
            const response = await fetch(`/api/v1/products/get-single-product/${slug}`)
            if (!response.ok) {
                throw new Error("Failed to fetch product by slug")
            }
            const result = await response.json()
            return result.data[0]
        }
    })

    if (isLoading || !product) {
        return <div className="p-6 text-gray-500">Loading product...</div>
    }

    const displayPrice = selectedVariant?.price || product.variants?.[0]?.price
    const selectedSize = selectedVariant 
        ? sizeLabels[selectedVariant.size] || selectedVariant.size 
        : sizeLabels[product.variants[0].size] || product.variants[0].size

    return (
        <div className="px-4 sm:px-10 py-8 flex flex-col md:flex-row gap-6 md:gap-10">
    
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover shadow-lg"
                />
            </div>

            
            <div className="w-full md:w-1/2">
                <h1 className="text-xl md:text-2xl font-semibold mt-5">{product.name}</h1>
                {product.sku && (
                    <p className="text-sm text-gray-500 mb-1">SKU#: {product.sku}</p>
                )}
                <p className="text-green-600 font-semibold mb-4">IN STOCK</p>

            
                <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    PKR {displayPrice?.toLocaleString()}
                </p>
                <hr />

                
                {product.variants?.length > 0 && (
                    <div className="mb-6">
                        <p className="font-semibold mb-4">
                            SIZE {selectedSize}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((variant) => (
                                <button
                                    key={variant._id}
                                    onClick={() => setSelectedVariant(variant)}
                                    className={`border border-gray-400 px-4 py-2 rounded-full transition
                                        ${selectedVariant?._id === variant._id 
                                            ? 'bg-black text-white' 
                                            : 'hover:bg-black hover:text-white'}`}
                                >
                                    {variant.size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                
                <button className="w-full sm:w-80 bg-white border-2 border-black text-black py-3 rounded hover:bg-black hover:text-white transition">
                    ADD TO CART
                </button>

                {/* Product Description */}
                {product.description && (
                    <p className="mt-4 text-justify max-w-full md:max-w-lg leading-relaxed">
                        {product.description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductDetail
