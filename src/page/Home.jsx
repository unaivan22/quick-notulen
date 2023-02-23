import React from 'react'
import HeadOne from './home/HeadOne'
import Isi from './home/Isi';
import Footer from './home/Footer';
// import FooterLast from './home/FooterLast';
import FloatBtn from './utils/FloatBtn'


export default function Home() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4-long');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div className='mx-auto padding-10mm bg-zinc-200'>
      {pagesize()}
      <div id='target' className='paper space-y-4 bg-white padding-10mm'>
        <HeadOne />
        <Isi />
        <Footer />
        {/* <FooterLast /> */}
      </div>
      <FloatBtn />
    </div>
  )
}
