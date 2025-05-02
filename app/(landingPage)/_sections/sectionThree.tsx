/* eslint-disable @next/next/no-img-element */
import React from 'react'


const SectionThree = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-7 gap-6 max-w-7xl grid-flow-col h-[800px] mx-auto my-16 py-24 px-16 bg-[#1A1A1A] rounded-3xl border border-[#606060]'>
      <div className='row-span-4'>
        <img alt='image' src={'/sectionThree/one.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-3'>
        <img alt='image' src={'/sectionThree/five.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-3'>
        <img alt='image' src={'/sectionThree/two.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-4'>
        <img alt='image' src={'/sectionThree/six.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-4'>
        <img alt='image' src={'/sectionThree/three.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-3'>
        <img alt='image' src={'/sectionThree/seven.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-3'>
        <img alt='image' src={'/sectionThree/four.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
      <div className='row-span-4'>
        <img alt='image' src={'/sectionThree/eight.png'} className='w-full h-full object-cover rounded-3xl'/>
      </div>
    </div>
  )
}

export default SectionThree