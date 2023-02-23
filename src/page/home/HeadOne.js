import React from 'react'

export default function HeadOne() {
  return (
    <div className='grid grid-cols-1 gap-y-2 border-b pb-4 border-zinc-300'>

      <div className='grid grid-cols-8'>
        <p className='col-span-2'>Judul Meeting</p>
        <p className='col-span-6 w-full'> <span className='mr-4'>:</span> <span contentEditable className='w-full'>isi</span></p>
      </div>
      <div className='grid grid-cols-8'>
        <p className='col-span-2'>Tanggal</p>
        <p className='col-span-6 w-full'> <span className='mr-4'>:</span> <span contentEditable className='w-full'>isi</span></p>
      </div>
      <div className='grid grid-cols-8'>
        <p className='col-span-2'>Tempat</p>
        <p className='col-span-6 w-full'> <span className='mr-4'>:</span> <span contentEditable className='w-full'>isi</span></p>
      </div>
    </div>
  )
}
