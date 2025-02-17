import React, { useState, useEffect } from 'react';

import { VscError } from 'react-icons/vsc';
import { FaTrash } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../Store/CartSlice';
import Button from "../Components/Button"


const subtotal = 4000;
const shippingcharges = 200;
const tax = Math.round(subtotal * 0.15);
const discount = 400;
const total = subtotal + shippingcharges + tax;

const Cart = () => {
    const [couponcode, setCouponCode] = useState("");
    const [isvalidcouponcode, setisValidCouponCode] = useState(false);
    const cartState = useSelector(state => state.cart);
    const cartitems = cartState.cart;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // remove cartItem
    const removeProduct = (id) => {
        dispatch(removeFromCart(id))
    }
    // incrment
    const incrementHandler = (item)=>{
        if (item.quantity >= item.stock) return;
       
    dispatch(addToCart({ ...item, quantity: item.quantity + 1 }));

    }
    const decrementHandler = (item)=>{
        if(item.quantity<=1) return;
        dispatch(addToCart({ ...item, quantity: item.quantity - 1 }));
    }

    return (

        <div className="mt-8">
            {cartitems.length === 0 ? (
                <>
                    <p className='text-3xl text-center mt-8 mb-4'>No Items Added In Cart</p>
                    <div className='flex justify-center'>
                        <Button
                            onClick = {()=>navigate('/')}
                            style={{ color: "black" }}
                            type="submit"
                            className="w-52 p-4  mb-4 mt-4 border-4 border border-black bg-gray-200"
                        >Continue Shopping</Button>

                    </div>

                </>
            ) : (
                
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                    <div className='mainside flex flex-col w-full md:w-3/4 mb-4 md:mb-0'>
                        {cartitems.map((item) => (
                            
                            <div key={item.id} className='flex flex-row items-start mb-4'>
                                <img className='w-32 md:w-52 rounded-md mb-4 md:mb-0 md:ml-12' src={item.image} alt={item.title} />
                                <div className='flex flex-col md:flex-row items-start md:items-center w-full'>
                                    <div className="product-details flex flex-col md:flex-row items-start md:items-center md:ml-4 w-full">
                                        <div className="mb-4 md:-mt-20 md:mr-4 flex-row">
                                            <h2 className='text-lg font-semibold ml-2'>{item.title}</h2>
                                            <p className='text-gray-600 ml-2'> {item.price}</p>
                                            <p className='ml-2 hidden'>Sizes</p>
                                            <p className='ml-2 md:hidden'>Quantity</p>
                                        </div>
                                        <div className='flex ml-2 md:mb-28 md:ml-64'>
                                            <button
                                            onClick={()=>decrementHandler(item)}
                                             className='rounded-md bg-gray-200 w-6 h-6
                                              flex items-center justify-center border-none
                                               text-lg hover:bg-black hover:text-white'>-</button>
                                            {/* <p className='text-lg mx-2'>{item.sizes}</p> */}
                                            <p className='text-lg mx-2'>{item.quantity}</p>
                                            
                                            
                                            <button
                                            onClick={()=>incrementHandler(item)}
                                             className='rounded-md bg-gray-200 w-6 h-6 flex items-center justify-center border-none text-lg hover:bg-black hover:text-white'>+</button>
                                            <button
                                                onClick={() => removeProduct(item.id)}
                                                className='flex mt-1 mb-4 ml-3 md:ml-4 hover:text-red-600'>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                    <div className="aside  fixed right-0 botom-0 top-24 w-full md:w-1/4 mt-4 md:mt-6 md:mr-20">
                        <p className='mb-2'>Subtotal: Rs {subtotal}</p>
                        <p className='mb-2'>Shipping Charges: Rs {shippingcharges}</p>
                        <p className='mb-2'>Tax: Rs {tax}</p>
                        <p className='mb-2'>Discount: <em className='text-red-600'>- Rs {discount}</em></p>
                        <p className='font-bold mb-4'>Total: Rs {total}</p>
                        <input
                            className='w-full mb-4 border border-black rounded-md p-1'
                            type="text"
                            placeholder='Coupon Code'
                            value={couponcode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <Link to='/login'>
                            <button className=' w-full rounded-md p-2 mb-4 bg-gray-200 hover:bg-black hover:text-white border border-black text-black'>
                                Check Out
                            </button>
                        </Link>
                        {couponcode &&
                            (isvalidcouponcode ? (
                                <span className="text-green-600">
                                    {discount} off using the <code>{couponcode}</code>
                                </span>
                            ) : (
                                <span className='text-red-600'>
                                    Invalid Coupon Code <VscError />
                                </span>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
