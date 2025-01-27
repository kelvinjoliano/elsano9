"use client"

import React from 'react'
import Image from 'next/image'

const CartModal = () => {
  
  const cartItems = true

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_30px_10px_rgb(0,0,0,0,2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        //LIST
        <div className=''>Cart is Empty</div>
      ) : (
        <>
        <h2 className='text-xl'>Keranjang Belanja</h2>
      <div className='flex flex-col gap-8'>
        {/* ITEM */}
        <div className='flex gap-4'>
          <Image 
          src="https://images.pexels.com/photos/6691721/pexels-photo-6691721.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="" 
          width={72} 
          height={96} 
          className='object-cover rounded-md'
          />
          <div className='flex flex-col justify-between w-full'>
            {/* TOP */}
            <div className=''>              
            {/* TITLE */}
              <div className='flex items-center justify-between gap-8'>
                <h3 className='font-semibold'>Nama Produk</h3>
                <div className='p-1 bg-gray-50 rounded-sm'>Rp.49.000</div>
              </div>
            {/* DESCRIPTION */}
              <div className='text-sm text-gray-500'>
                Tersedia
              </div>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-between text-sm'>
              <span className='text-gray-500'>Jumlah : 2</span>
              <span className='text-blue-500'>Hapus</span>
            </div>
          </div>
        </div>
      </div>
      {/* //BOTTOM */}
      <div className=''>
        <div className='flex items-center justify-between font-semibold'>
          <span className=''>Total</span>
          <span className=''>Rp.49.000</span>
        </div>
        <p className='text-gray-500 text-sm mt-2 mb-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className='flex justify-between text-sm'>
          <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>Lihat Keranjang</button>
          <button className='rounded-md py-3 px-4 ring-1 bg-black text-white'>Checkout</button>
        </div>
      </div>
      </>
    )}
    </div>
  )
}

export default CartModal
