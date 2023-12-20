"use client";
import Image from 'next/image'
import React from 'react'

export default function PortfolioItem() {
  return (
    <div
    className="rounded-lg p-6 border-[2px] border-[#212425]"
    
  >
    <div className="overflow-hidden rounded-lg">
      <Image
        
        src="/images/about.jpg"
        width={300}
        height={300}
        decoding="async"
        data-nimg={1}
        className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
       alt="image"
      />
    </div>
    <span className="pt-5 text-[14px] font-normal  block text-[#A6A6A6]">
      UI/UX
    </span>
    <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-primary  text-white mt-2">
      Chul urina
    </h2>
  </div>
  )
}
