import AddCart from '@/components/AddCart'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages/>
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Sleeve Case Laptop Waterproof Polyester Neoprene Bag - L123F
        </h1>
        <p className='text-gray-500'>Saat sedang bepergian, kemungkinan laptop terkena goresan maupun benturan akan meningkat. Jika dibiarkan terlalu lama, bagian dalam laptop bisa saja rusak. Untuk itu, Anda memerlukan sleeve case laptop dari Rhodey! Dengan material yang lembut, case ini mampu melindungi laptop Anda agar terhindar dari kerusakan. Tersedia berbagai warna dan ukuran yang bisa dipilih sesuai kebutuhan.</p>
        <div className='h-[2px] bg-gray-100'/>
        <div className='flex items-center gap-4'>
            <h3 className='text-xl text-gray-500 line-through'>Rp.150.000</h3>
            <h2 className='font-medium text-2xl'>Rp.59.000</h2>
        </div>
        <div className='h-[2px] bg-gray-100'/>
        <CustomizeProducts/>
        <AddCart/>
        <div className='h-[2px] bg-gray-100'/>
        <div className='text-sm'>
            <h4 className='font-bold mb-4'>Fitur</h4>
            <p>Saku Samping dengan Ritsleting:
              <br/>
              Dibekali dengan kantung samping yang sudah memiliki ritsleting. Anda bisa memasukkan smartphone, charger, dompet dan barang lainnya ke kantung ini. Membuat sleeve ini sangat berguna ketika dibawa beraktivitas.
              <br/>
              <br/>
              Ritsleting Kuat
              <br/>
              Menggunakan ritsleting yang kuat, tahan lama, dan berkualitas tinggi sehingga bisa dengan mudah membuka dan menutup sleeve case. Ritsleting ini tidak mudah terbuka membuat laptop aman tersimpan di dalam case.
              <br/>
              <br/>
              Pelindung 4 Lapisan
              <br/>
              Sleeve ini menggunakan tiga bahan dalam pembuatannya, yaitu polyester 600D, neoprene, dan spons flannel. Ketiga bahan ini membentuk 4 lapisan pelindung sehingga laptop lebih aman saat dibawa bepergian.
              <br/>
              <br/>
              Material Tahan Air
              <br/>
              Sudah menggunakan material waterproof sehingga Anda tak perlu khawatir laptop akan basah saat terkena tumpahan minuman atau terpapar hujan ringan. Laptop pun akan aman tersimpan dan bisa dibawa ke mana pun Anda pergi.

            </p>
        </div>
        <div className='text-sm'>
            <h4 className='font-bold mb-4'>Kelengkapan Produk</h4>
            <p>Rincian yang Anda dapatkan untuk pembelian produk ini:
            1 x Rhodey Sleeve Case Laptop Waterproof Polyester Neoprene Bag - L123F</p>
        </div>
        <div className='text-sm'>
            <h4 className='font-bold mb-4'>Spesifikasi Sleeve Case Laptop Waterproof Polyester Neoprene Bag - L123F</h4>
            <p>
              Material :
              <br/>
              Polyester 600D, Neoprene dan Spons Flannel
              <br/>
              <br/>
              Dimensi :
              <br/>
              Ukuran Laptop: 11/12 Inch:
              <br/> 
              Dimensi Luar: 330 x 230 x 25 mm
              <br/>
              Dimensi Dalam: 305 x 212 x 25 mm
              <br/>
              Dimensi Kantong Luar: 200 x 210 mm
              <br/>
              Ukuran Laptop: 13 Inch:
              <br/>
              Dimensi Luar: 345 x 250 x 20 mm
              <br/>
              Dimensi Dalam: 332 x 240 x 20 mm
              <br/>
              Dimensi Kantong Luar: 250 x 245 mm
              <br/>
              Ukuran Laptop: 15.6 Inch:
              <br/>
              Dimensi Luar: 390 x 305 x 40 mm
              <br/>
              Dimensi Dalam: 380 x 290 x 30 mm
              <br/>
              Dimensi Kantong Luar: 260 x 280 mm
              <br/>
              Tebal Busa Pelapis: Sekitar 7 mm
              <br/>
              <br/>
              Berat Bersih :
              <br/>
              Varian 11/12 Inch: 180 g
              <br/>
              Varian 13 Inch: 200 g
              <br/>
              Varian 15.6 Inch: 230 g
              <br/>
              <br/>
              Lain-lain :
              <br/>
              Waterproof
            </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
