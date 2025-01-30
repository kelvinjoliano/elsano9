"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const images = [
    { id: 1, url: "https://static.jakmall.id/2024/11/images/products/52f58a/detail/rhodey-sleeve-case-laptop-waterproof-polyester-neoprene-bag-l123f.jpg" }, 
    { id: 2, url: "https://static.jakmall.id/2021/11/images/products/3283d3/detail/rhodey-sarung-sleeve-case-for-laptop-l123f.jpg" },
    { id: 3, url: "https://static.jakmall.id/2022/03/images/products/16499a/detail/rhodey-sarung-sleeve-case-for-laptop-l123f.jpg" },
    { id: 4, url: "https://static.jakmall.id/2023/09/images/products/4cff9c/detail/rhodey-sleeve-case-for-laptop-l123f.jpg" },
    { id: 5, url: "https://static.jakmall.id/2023/09/images/products/ef08cb/detail/rhodey-sleeve-case-for-laptop-l123f.jpg" },
]

const ProductImages = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className='w-full flex flex-col items-center'>
            {/* Gambar Utama */}
            <div className='w-full max-w-2xl sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto'>
                <Image 
                    src={images[index].url} 
                    alt='' 
                    width={800} 
                    height={500} 
                    className='w-full max-w-full h-auto object-cover rounded-md'
                />
            </div>

            {/* Thumbnail */}
            <div className='flex flex-wrap justify-center gap-2 mt-4 max-w-sm'>
                {images.map((img, i) => (
                    <div 
                        key={img.id} 
                        className={`w-20 h-20 sm:w-24 sm:h-24 cursor-pointer relative border-2 ${index === i ? 'border-blue-500' : 'border-transparent'}`} 
                        onClick={() => setIndex(i)}
                    >
                        <Image 
                            src={img.url} 
                            alt='' 
                            fill 
                            className='object-cover rounded-md'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages
