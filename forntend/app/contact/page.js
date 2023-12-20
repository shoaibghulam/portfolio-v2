
export default function contactPage() {
  return (
    <div className="lg:rounded-2xl lg:rounded-b-none bg-black">
    <div data-aos="fade" className="aos-init aos-animate">
      <div className="container  px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="pt-12">
          <h2 className="after-effect after:left-48 mt-12 lg:mt-0 mb-12 md:mb-[30px]">
            Contact
          </h2>
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
            <div
              className="flex flex-wrap  bg-transparent p-[30px] border-[#A6A6A6] gap-2 rounded-xl "
              
            >
              <span className="w-8 mt-2">
                <img
                  alt="icon"
                  srcSet="/_next/image?url=%2Fimages%2Fcontact%2Fphone-call%201.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fcontact%2Fphone-call%201.png&w=64&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcontact%2Fphone-call%201.png&w=64&q=75"
                  width={30}
                  height={20}
                  decoding="async"
                  data-nimg={1}
                  className="text-4xl  text-white"
                  loading="lazy"
                  style={{}}
                />
              </span>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-white">Phone :</p>
                <p>
                  <a
                    href="tel:+452 666 386"
                    className=" text-lg text-[#A6A6A6] "
                  >
                    +452 666 386
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+654 764 878"
                    className=" text-lg text-[#A6A6A6] "
                  >
                    +654 764 878
                  </a>
                </p>
              </div>
            </div>
            <div
              className="flex flex-wrap  bg-transparent p-[30px] border-[#A6A6A6] gap-2 rounded-xl "
              
            >
              <span className="w-8 mt-2">
                <img
                  alt="icon"
                  srcSet="/_next/image?url=%2Fimages%2Fcontact%2Femail%201.png&w=32&q=75 1x, /_next/image?url=%2Fimages%2Fcontact%2Femail%201.png&w=64&q=75 2x"
                  src="/_next/image?url=%2Fimages%2Fcontact%2Femail%201.png&w=64&q=75"
                  width={30}
                  height={20}
                  decoding="async"
                  data-nimg={1}
                  className="text-4xl  text-white"
                  loading="lazy"
                  style={{}}
                />
              </span>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-white">Email :</p>
                <p>
                  <a
                    href="mailto:ibthemes21@gmail.com"
                    className=" text-lg text-[#A6A6A6] "
                  >
                    ibthemes@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:xyz@abc.com"
                    className=" text-lg text-[#A6A6A6] "
                  >
                    mailto:xyz@abc.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="     p-20 ">
            <h3 className="text-4xl ">
              <span className="text-[#A6A6A6] ">
                I am always open to discussing product
              </span>
              <br />
              <span className="text-white">
                design work or partnerships.
              </span>
            </h3>
            <form id="myForm">
              <div className="relative z-0 w-full mt-[40px] mb-8 group">
                <input
                  type="text"
                  name="name"
                  className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px]  appearance-none text-white border-[#333333] focus:border-primary focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Name *
                </label>
              </div>
              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="email"
                  name="user_email"
                  className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px]  appearance-none text-white border-[#333333]focus:border-primary focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                  placeholder=" "
                  id="user_email"
                  required=""
                />
                <label
                  htmlFor="user_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Email *
                </label>
              </div>
              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="text"
                  name="message"
                  className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] appearance-none text-white border-[#333333] focus:border-primary focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  id="message"
                  required=""
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-sm text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  Message *
                </label>
              </div>
              <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                <input
                  type="submit"
                  className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white text-white "
                  defaultValue="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  
  )
}
