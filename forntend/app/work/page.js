import PortfolioItem from "@/components/PortfolioItem";
import Image from "next/image";

export default function workPage() {
  return (
    <div className="lg:rounded-2xl rounded-b-none bg-black">
    <div data-aos="fade" className="aos-init aos-animate">
      <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12">
          <h2 className="text-4xl font-bold text-white mt-12 lg:mt-0">Portfolio</h2>
         
          <div className="grid grid-cols-2 gap-3  mt-10">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
  )
}
