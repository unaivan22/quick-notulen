import React from 'react'

export default function HeadOne() {
  return (
    <div className='grid grid-cols-1 border-b pb-4 border-zinc-300'>
      <p className='col-span-6 w-full text-3xl text-rose-500 font-bold' contentEditable>Judul Meeting</p>
      <p className='col-span-6 w-full text-zinc-500 text-base' contentEditable>Jl. Barata Jaya III No.16, Baratajaya, Kec. Gubeng, Kota SBY, Jawa Timur 60284</p>
      <p className='col-span-6 w-full text-zinc-500 text-base' contentEditable>{(new Date().toLocaleDateString())}</p>
      {/* <div className='grid grid-cols-8'>
        <p className='col-span-2'>Judul Meeting</p>
        <p className='col-span-6 w-full'> <span className='mr-4'>:</span> <span contentEditable className='w-full'>isi</span></p>
      </div>
      <div className='grid grid-cols-8'>
        <p className='col-span-2'>Tanggal</p>
        <p className='col-span-6 w-full'> <span className='mr-4'>:</span> <span contentEditable className='w-full'>{(new Date().toLocaleDateString())}</span></p>
      </div> */}
      {/* <div className='grid grid-cols-8'>
        <p className='col-span-2'>Tempat</p>
        <p className='col-span-6 w-full'> <span className='mr-4'>:</span> <span contentEditable className='w-full'>isi</span></p>
      </div> */}
    </div>
  )
}
