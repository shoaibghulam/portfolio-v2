"use client";
import Image from 'next/image'
import Slider from "react-slick";
import * as fa from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  var settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="rounded-2xl rounded-b-none bg-black">
    <div data-aos="fade" className="aos-init">
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="text-white text-4xl font-bold">About Me</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-white leading-7">
                I am Creative Director and UI/UX Designer from Sydney,
                Australia, working in web development and print media. I enjoy
                turning complex problems into simple, beautiful and intuitive
                designs.
              </p>
              <p className="leading-7 mt-2.5 text-white">
                My aim is to bring across your message and identity in the
                most creative way. I created web design for many famous brand
                companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 className="text-[35px] text-white font-medium pb-5">
          What I do!
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div
            className="about-box bg-transparent">
            <div className="w-10 h-10 object-contain block">
              
           <fa.FaWeibo size={40} />
            </div>
            <div className="space-y-2 break-all">
              <h3 className="text-white text-xl font-semibold">
                Ui/Ux Design
              </h3>
              <p className="leading-8 text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="about-box bg-transparent" >
            <div className="w-10 h-10 object-contain block">
              
           <fa.FaAffiliatetheme size={40} />
            </div>
            <div className="space-y-2 break-all">
              <h3 className="text-white text-xl font-semibold">
                Ui/Ux Design
              </h3>
              <p className="leading-8 text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
       
        </div>
      </section>
      <section className="px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 className="text-[35px] text-white font-medium pb-5">
          My Client!
        </h3>
        <div className="bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
          <div className="overflow-hidden px-14 m-auto">
          <Slider {...settings}>
    <div>
      <Image src="/images/about.jpg" width={100} height={100} className='rounded-full' />
    </div>
    <div>
      <Image src="/images/about.jpg" width={100} height={100} className='rounded-full' />
    </div>
    <div>
      <Image src="/images/about.jpg" width={100} height={100} className='rounded-full' />
    </div>
    <div>
      <Image src="/images/about.jpg" width={100} height={100} className='rounded-full' />
    </div>
    <div>
      <Image src="/images/about.jpg" width={100} height={100} className='rounded-full' />
    </div>
    <div>
      <Image src="/images/about.jpg" width={100} height={100} className='rounded-full' />
    </div>
   
    
  </Slider>
          </div>
        </div>
      </section>
     
     
    </div>
  </div>

  )
}
