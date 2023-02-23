import React from 'react'

export default function FooterLast() {
  return (
    <div className='divFooter grid grid-cols-1 mx-auto text-center bg-zinc-100'>
      <p>Energeek - {(new Date().getUTCFullYear())}</p>
    </div>
  )
}
