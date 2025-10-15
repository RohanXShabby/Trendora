import React, { useContext, useMemo, useState } from 'react'
import { CartItemsContext } from '../context/Context'
import Heading from '../components/UI/Heading'
import { Link, useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate = useNavigate()
    const { cartItems, clearCart } = useContext(CartItemsContext)

    const subtotal = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }, [cartItems])

    const shipping = useMemo(() => {
        return cartItems.length > 0 ? 4.99 : 0
    }, [cartItems.length])

    const total = useMemo(() => (subtotal + shipping), [subtotal, shipping])

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        payment: 'cod',
    })

    const update = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const placeOrder = (e) => {
        e.preventDefault()
        if (cartItems.length === 0) return
        // In a real app, call API here
        clearCart()
        navigate('/')
        alert('Order placed successfully!')
    }

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
        <div className='min-h-screen py-10 px-6 md:px-16'>
            <div className='px-0 md:px-16'>
                <Heading subHeading='Checkout' h1='Complete Your Order' />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-0 md:px-16'>
                {/* Form */}
                <form onSubmit={placeOrder} className='lg:col-span-2 space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input required name='fullName' value={form.fullName} onChange={update} placeholder='Full Name' className='bg-gray-700 p-3 rounded outline-0' />
                        <input required type='email' name='email' value={form.email} onChange={update} placeholder='Email' className='bg-gray-700 p-3 rounded outline-0' />
                        <input required name='phone' value={form.phone} onChange={update} placeholder='Phone' className='bg-gray-700 p-3 rounded outline-0' />
                        <input required name='address' value={form.address} onChange={update} placeholder='Address' className='bg-gray-700 p-3 rounded outline-0 md:col-span-2' />
                        <input required name='city' value={form.city} onChange={update} placeholder='City' className='bg-gray-700 p-3 rounded outline-0' />
                        <input required name='state' value={form.state} onChange={update} placeholder='State' className='bg-gray-700 p-3 rounded outline-0' />
                        <input required name='zip' value={form.zip} onChange={update} placeholder='ZIP' className='bg-gray-700 p-3 rounded outline-0' />
                    </div>

                    <div className='space-y-3'>
                        <span className='font-semibold'>Payment Method</span>
                        <div className='flex gap-4'>
                            <label className='flex items-center gap-2'>
                                <input type='radio' name='payment' value='cod' checked={form.payment === 'cod'} onChange={update} />
                                Cash on Delivery
                            </label>
                            <label className='flex items-center gap-2'>
                                <input type='radio' name='payment' value='card' checked={form.payment === 'card'} onChange={update} />
                                Debit/Credit Card
                            </label>
                        </div>
                    </div>

                    <button type='submit' className='bg-red-200 text-white px-6 py-3 rounded hover:bg-red-300 transition-colors'>
                        Place Order
                    </button>
                </form>

                {/* Summary */}
                <div className='bg-gray-800 border border-white/20 p-6 rounded-lg h-fit'>
                    <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cartItems.map(item => (
                            <div key={item.id} className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <img src={item.image} alt={item.title} className='w-14 h-14 object-contain' />
                                    <div>
                                        <p className='text-sm'>{item.title}</p>
                                        <p className='text-xs text-gray-300'>Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <span className='font-medium'>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className='border-t border-white/10 my-4'></div>
                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className='border-t border-white/10 my-4'></div>
                    <div className='flex justify-between font-semibold text-lg'>
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
