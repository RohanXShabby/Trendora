import React, { useContext } from 'react'
import { CartItemsContext } from '../context/Context'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems, increment, decrement, removeFromCart } = useContext(CartItemsContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (cartItems.length === 0) {
        return (
            <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
                <h2 className='text-2xl font-semibold'>Your cart is empty</h2>
                <Link to="/products" className='bg-red-200 text-white px-6 py-2 rounded-md hover:bg-red-300 transition-colors'>
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className='min-h-screen p-8'>
            <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>
            <div className='flex flex-col gap-6'>
                {cartItems.map((item) => (
                    <div key={item.id} className='flex items-center gap-4 bg-gray-800 border p-4 border-white/20 rounded-lg shadow'>
                        <img src={item.image} alt={item.title} className='w-24 h-24 object-contain' />
                        <div className='flex-1'>
                            <h3 className='font-normal text-lg'>{item.title}</h3>
                            <p className='text-red-200 font-medium'>${item.price}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={() => decrement(item)}
                                className='px-3 py-1 bg-gray-700 rounded'
                            >
                                -
                            </button>
                            <span className='min-w-[2rem] text-center'>{item.quantity}</span>
                            <button
                                onClick={() => increment(item)}
                                className='px-3 py-1 bg-gray-700 rounded'
                            >
                                +
                            </button>
                        </div>
                        <p className='font-medium min-w-[6rem] text-right'>
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className='text-red-500 p-2 hover:bg-red-50 rounded-full transition-colors'
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
                <div className='mt-6 flex justify-end'>
                    <div className='bg-gray-800 border border-white/20 p-6 rounded-lg shadow min-w-[300px]'>
                        <div className='flex justify-between mb-4'>
                            <span className='font-semibold'>Total:</span>
                            <span className='font-bold'>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <Link to='/checkout' className='w-full px-10 flex bg-red-200 text-white py-2 rounded hover:bg-red-300 transition-colors'>
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
