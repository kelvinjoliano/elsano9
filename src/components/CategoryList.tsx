import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/2265484/pexels-photo-2265484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Handphone & Tablet</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/3987033/pexels-photo-3987033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Komputer & Laptop</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Elektronik & CCTV</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/30353201/pexels-photo-30353201/free-photo-of-kontroler-gaming-hitam-ramping-di-latar-belakang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Mainan & Video Games</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/952264/pexels-photo-952264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Foto & Videografi</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Aksesoris & Fashion</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/16963832/pexels-photo-16963832/free-photo-of-kopi-cangkir-tangan-gerakan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Peralatan Rumah Tangga</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/17522292/pexels-photo-17522292/free-photo-of-olahraga-tenis-bersih-keranjang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='20vw' className='object-cover'/>
                </div>
                <h1 className='mt-8 font-semibold text-cl tracking-wide'>Hobi & Olahraga</h1>
            </Link>
      </div>
      
    </div>
  )
}

export default CategoryList
