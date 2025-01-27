import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href="/">
            <div className='text-2xl tracking-wide'>ELSANO</div>
          </Link>
          <p>Jalan Aryo Jipang Lr.VI/19 Cepu, Jawa Tengah. 58312</p>
          <span className='font-semibold'>support@elsano.com</span>
          <span className='font-semibold'>+62 8135 3189 062</span>
          <div className='flex gap-6'>
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='py-10 flex flex-col gap-6'>
              <Link href="">Tentang Kami</Link>
              <Link href="">Karir</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Kontak Kami</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg '>SHOP</h1>
            <div className='py-10 flex flex-col gap-6 '>
              <Link href="">Produk Terbaru</Link>
              <Link href="">Paling Laris</Link>
              <Link href="">Paling Murah</Link>
              <Link href="">Gratis Ongkir</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='py-10 flex flex-col gap-6'>
              <Link href="">Costumer Service</Link>
              <Link href="">Saldo Saya</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>
          Info Promo dan Diskon Spesial</h1>
          <p>Dapatkan info promo serta diskon spesial dari Elsano. Tidak ada spam, kami menghargai privasi Anda</p>
          <div className='flex'>
            <input type="text" placeholder='Masukan Email' className='p-4 w-3/4' />
            <button className='w-1/4 bg-elsano text-white'>Submit</button>
          </div>
            <span className='font-semibold'>Metode Pembayaran</span>
            <div className="grid grid-cols-4 gap-4 items-center">
            <Image src="/bri-logo.png" alt="BRI" width={40} height={20} />
            <Image src="/mandiri.png" alt="Mandiri" width={40} height={20} />
            <Image src="/logo-bni-new.png" alt="BNI" width={40} height={20} />
            <Image src="/bca.png" alt="BCA" width={40} height={20} />
            <Image src="/qris.png" alt="QRIS" width={40} height={20} />
            <Image src="/ovo.png" alt="OVO" width={40} height={20} />
            <Image src="/shopee_pay.png" alt="ShopeePay" width={40} height={20} />
            <Image src="/dana-logo.png" alt="DANA" width={40} height={20} />
          </div>

            <span className='font-semibold'>Metode Pengiriman</span>
            <div className="flex gap-8 items-center">
            <Image src="/j&t.png" alt="JNT" width={60} height={30} />
            <Image src="/jne.svg" alt="JNE" width={60} height={30} />
            <Image src="/sicepat_merah.svg" alt="SICEPAT" width={60} height={30} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="mt-12 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Elsano. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
