import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/slug" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80 z-0'>
                <Image src="https://static.jakmall.id/2024/11/images/products/52f58a/detail/rhodey-sleeve-case-laptop-waterproof-polyester-neoprene-bag-l123f.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transation-opacity easy duration-500'></Image>

                <Image src="https://static.jakmall.id/2021/11/images/products/3283d3/detail/rhodey-sarung-sleeve-case-for-laptop-l123f.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md'></Image>
            </div>
            <div className='flex justify-between flex-col gap-4'>
                <span className='font-medium'>Sleeve Case Laptop Waterproof Polyester Neoprene Bag - L123F</span>
                <span className='font-semibold'>Rp.59.000</span>
            </div>
            <div className='text-sm text-gray-500'>Dengan material yang lembut, case ini mampu melindungi laptop Anda agar terhindar dari kerusakan. Tersedia berbagai warna dan ukuran yang bisa dipilih sesuai kebutuhan.</div>
            <button className='rounded-2xl ring-1 ring-elsano text-elsano w-max py-2 px-4 text-xs hover:bg-elsano hover:text-white '>Tambah Keranjang</button>
        </Link>
        <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
                <Image src="https://static.jakmall.id/2024/09/images/products/b3f75e/detail/one-two-cups-toples-kaca-penyimpanan-makanan-coffee-storage-glass-jar-hc1019.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transation-opacity easy duration-500'></Image>

                <Image src="https://static.jakmall.id/2024/09/images/products/8b54fa/detail/one-two-cups-toples-kaca-penyimpanan-makanan-coffee-storage-glass-jar-hc1019.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md'></Image>
            </div>
            <div className='flex justify-between flex-col gap-4'>
                <span className='font-medium'>Toples Kaca Penyimpanan Makanan Kedap Udara Storage Jar - HC1019</span>
                <span className='font-semibold'>Rp.24.600</span>
            </div>
            <div className='text-sm text-gray-500'>Terbuat dari kaca borosilikat berkualitas tinggi, toples ini menjadi solusi ideal untuk menyimpan camilan, kopi, atau bahan makanan lainnya.</div>
            <button className='rounded-2xl ring-1 ring-elsano text-elsano w-max py-2 px-4 text-xs hover:bg-elsano hover:text-white '>Tambah Keranjang</button>
        </Link>
        <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
                <Image src="https://static.jakmall.id/2024/09/images/products/872baa/detail/zomei-tripod-kamera-pan-head-360-panoramic-14m-q111.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transation-opacity easy duration-500'></Image>

                <Image src="https://static.jakmall.id/2018/04/images/products/2d8dd6/detail/zomei-professional-dslr-tripod-pan-head-q111.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md'></Image>
            </div>
            <div className='flex justify-between flex-col gap-4'>
                <span className='font-medium'>Tripod Kamera Pan Head 360 Panoramic 1.4M - Q111</span>
                <span className='font-semibold'>Rp.317.000</span>
            </div>
            <div className='text-sm text-gray-500'>Terbuat dari material paduan aluminium aerospace dan ABS resin dengan daya tahan yang baik dibanding tripod lain di pasaran</div>
            <button className='rounded-2xl ring-1 ring-elsano text-elsano w-max py-2 px-4 text-xs hover:bg-elsano hover:text-white '>Tambah Keranjang</button>
        </Link>
        <Link href="/" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
                <Image src="https://static.jakmall.id/2024/02/images/products/a14d08/detail/hamodern-lemari-pakaian-minimalis-rak-multifungsi-dengan-gorden-hm1.png" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transation-opacity easy duration-500'></Image>

                <Image src="https://static.jakmall.id/2024/02/images/products/b77991/detail/hamodern-lemari-pakaian-minimalis-rak-multifungsi-dengan-gorden-hm1.jpg" alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className='absolute object-cover rounded-md'></Image>
            </div>
            <div className='flex justify-between flex-col gap-4'>
                <span className='font-medium'>Lemari Pakaian Minimalis Rak Multifungsi dengan Gorden - HM1</span>
                <span className='font-semibold'>Rp.148.900</span>
            </div>
            <div className='text-sm text-gray-500'>Desainnya tampak minimalis dipadu warna yang netral. Meletakkannya di sudut ruangan dapat menunjang aspek interior yang minimalis dan modern.</div>
            <button className='rounded-2xl ring-1 ring-elsano text-elsano w-max py-2 px-4 text-xs hover:bg-elsano hover:text-white '>Tambah Keranjang</button>
        </Link>
    </div>
  )
}

export default ProductList
