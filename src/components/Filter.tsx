import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
      <div className='flex gap-6 flex-wrap'>
        <select name="Category" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
          <option>Kategori</option>
          <option value="electronic">Elektronik</option>
          <option value="rumahTangga">Peralatan Rumah Tangga</option>
          <option value="AksesorisnFashion">Aksesoris&Fashion</option>
        </select>
        <input type="text" name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 '  />
        <input type="text" name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 '  />
      </div>
      <div>
        <select name="" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
          <option>Urut Berdasarkan</option>
          <option value="">Harga(Rendah ke Tinggi)</option>
          <option value="">Harga(Tinggi ke Rendah)</option>
          <option value="">Terbaru</option>
          <option value="">Terlama</option>
        </select>
        
      </div>
    </div>
  )
}

export default Filter
