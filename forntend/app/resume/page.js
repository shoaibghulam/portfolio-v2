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
    <div className="lg:rounded-2xl bg-black">
    <div data-aos="fade" className="aos-init">
      <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
        <div className="py-12">
          <h2 className="after-effect after:left-44">Resume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-6xl text-[#F95054]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
                  </svg>
                </div>
                <h4 className="text-5xl text-white font-medium">
                  Education
                </h4>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" >
                <span className="text-tiny text-[#b7b7b7]">2021-2023</span>
                <h3 className="text-xl text-white">
                  Ph.D in Horriblensess
                </h3>
                <p className="text-[#b7b7b7]">
                  ABC University, Los Angeles, CA
                </p>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" >
                <span className="text-tiny text-[#b7b7b7]">2019 - Present</span>
                <h3 className="text-xl  text-white">
                  Sr. Software Tester
                </h3>
                <p className="text-[#b7b7b7]">Google Inc.</p>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" >
                <span className="text-tiny text-[#b7b7b7]">2021</span>
                <h3 className="text-xl  text-white">
                  Best Developer
                </h3>
                <p className="text-[#b7b7b7]">
                  University Of Melbourne, NA
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-6xl text-[#F95054]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                  </svg>
                </div>
                <h4 className="text-5xl text-white font-medium">
                  Experience
                </h4>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" >
                <span className="text-tiny text-[#b7b7b7]">2017-2021</span>
                <h3 className="text-xl  text-white">
                  Computer Science
                </h3>
                <p className="text-[#b7b7b7]">
                  Imperialize Technical Institute
                </p>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" >
                <span className="text-tiny text-[#b7b7b7]">2015-2017</span>
                <h3 className="text-xl  text-white">
                  Cr. Web Developer
                </h3>
                <p className="text-[#b7b7b7]">ib-themes ltd.</p>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2" >
                <span className="text-tiny text-[#b7b7b7]">2008</span>
                <h3 className="text-xl  text-white">Best Writter</h3>
                <p className="text-[#b7b7b7]">
                  Online Typodev Soluation Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h4 className="text-5xl text-white font-medium mb-6">
              Working Skills
            </h4>
            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base  font-semibold text-[#A6A6A6]">Web Design</span><span className="text-base  font-semibold text-[#A6A6A6]">80%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="rc-progress-line-trail" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth={1} fillOpacity={0} />
                <path className="rc-progress-line-path" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#FF6464" strokeWidth={1} fillOpacity={0} style={{"stroke-dasharray":"79.2px, 100px","stroke-dashoffset":"0px","-webkit-transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s","transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s"}} />
              </svg>
            </div>
            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base  font-semibold text-[#A6A6A6]">Mobile App </span><span className="text-base  font-semibold text-[#A6A6A6]">95%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="rc-progress-line-trail" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth={1} fillOpacity={0} />
                <path className="rc-progress-line-path" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#9272D4" strokeWidth={1} fillOpacity={0} style={{"stroke-dasharray":"94.05px, 100px","stroke-dashoffset":"0px","-webkit-transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s","transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s"}} />
              </svg>
            </div>
            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base  font-semibold text-[#A6A6A6]">Illustrator</span><span className="text-base  font-semibold text-[#A6A6A6]">65%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="rc-progress-line-trail" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth={1} fillOpacity={0} />
                <path className="rc-progress-line-path" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#5185D4" strokeWidth={1} fillOpacity={0} style={{"stroke-dasharray":"64.35px, 100px","stroke-dashoffset":"0px","-webkit-transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s","transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s"}} />
              </svg>
            </div>
            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base  font-semibold text-[#A6A6A6]">Photoshope</span><span className="text-base  font-semibold text-[#A6A6A6]">75%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path className="rc-progress-line-trail" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth={1} fillOpacity={0} />
                <path className="rc-progress-line-path" d="M 0.5,0.5
     L 99.5,0.5" strokeLinecap="round" stroke="#CA56F2" strokeWidth={1} fillOpacity={0} style={{"stroke-dasharray":"74.25px, 100px","stroke-dashoffset":"0px","-webkit-transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s","transition":"stroke-dashoffset 0.3s ease 0s,                                stroke-dasharray 0.3s ease 0s,                                stroke 0.3s linear 0s, 0.06s"}} />
              </svg>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-5xl text-white font-medium mb-8">
              Knowledges
            </h4>
            <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
              <button className="resume-btn text-[15px]">
                Digital Design</button><button className="resume-btn text-[15px]">
                Marketing</button><button className="resume-btn text-[15px]">
                Social Media</button><button className="resume-btn text-[15px]">Print</button><button className="resume-btn text-[15px]">
                Time Management</button><button className="resume-btn text-[15px]">
                Flexibility</button><button className="resume-btn text-[15px]">Print</button><button className="resume-btn text-[15px]">
                Time Management</button><button className="resume-btn text-[15px]">
                Flexibility</button><button className="resume-btn text-[15px]">Print</button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>

  )
}
