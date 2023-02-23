import React from 'react'
import { IoPrint } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';


export default function FloatBtn() {
  function print(){
    window.print()
  }
  const navigate = useNavigate();
  return (
    <div className='fixed bottom-12 right-12 offPrint'>
        <div className='grid grid-cols-1 gap-y-4'>
            <a onClick={() => print()} className="w-18 h-18 rounded-full hover:cursor-pointer shadow-2xl bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
                <IoPrint size={42} />
            </a>
        </div>
    </div>
  )
}