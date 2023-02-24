import React from 'react'

export default function Footer() {
  return (
    <div className='grid grid-cols-2 pt-24'>
      <div className='grid grid-cols-1 text-center'>
        <p className='mb-24 font-bold text-zinc-900' contentEditable>PIC</p>

        <p contentEditable>Nama</p>
        <p className='text-sm text-zinc-700 font-light' contentEditable>Jabatan</p>
      </div>
      <div className='grid grid-cols-1 text-center'>
        <p className='mb-24 font-bold text-zinc-900' contentEditable>Client</p>

        <p contentEditable>Nama</p>
        <p className='text-sm text-zinc-700 font-light' contentEditable>Jabatan</p>
      </div>
    </div>
  )
}
