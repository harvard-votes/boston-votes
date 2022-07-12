import React from "react";
import Image from "next/image";
// import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
// import Maps from "../public/assets/HugeGlobal.svg";


const Button = props => (
    <button
      className="font-bold border-red-700 text-white bg-red-700 hover:text-red-700 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
    >
     {/* <button
      className="font-bold border-yellow-200 text-slate-800 bg-yellow-200 hover:text-slate-800 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
    > */}
      {props.children}
    </button>
  )

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-4"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            
            <div className="flex flex-col justify-center items-center border-4 border-red-700  py-4 px-6 lg:px-8 xl:px-10">
              <div className="p-4 lg:p-0 mt-4 lg:mt-4 mb-4">
                <Image
                  src="/assets/mapicon.png"
                  width={60}
                  height={55}
                  alt="Standard Plan"
                />
              </div>
              <h1 className="text-3xl text-slate-800 font-bold">
                Find My Poll Site{" "}
              </h1>
              <p className="text-l text-slate-800 py-3">
                Visit the Board of Elections website and enter your address to find your polling place.
              </p>
              
              <div className="flex flex-col w-full justify-center mb-4 flex-none mt-4">
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                  $9 <span className="text-black-500">/ mo</span>
                </p> */}
                <Button>Find My Poll Site</Button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-4 border-red-700 py-4 px-6 lg:px-8 xl:px-10">
              <div className="p-4 lg:p-0">
                <Image
                  src="/assets/ballot.png"
                  width={80}
                  height={90}
                  alt="Premium Plan"
                />
              </div>
              <h1 className="text-3xl text-slate-800 font-bold">
                Check Registration {" "}
              </h1>
              <p className="text-l text-slate-800 py-3">
                Make sure your voter registration is up to date with the Boston City Board of Elections.
              </p>
              
              <div className="flex flex-col w-full justify-center mb-4 flex-none mt-4 ">
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                  $12 <span className="text-black-500">/ mo</span>
                </p> */}

                <Button>Check Registration</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='
            bg-[url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/boston-ma-city-vector-road-map-blue-frank-ramspott.jpg")] 
            h-150 bg-cover bg-center 
            w-full bg-max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto'
            >
            <div className='px-5 py-5 items-center justify-between'>
                <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-6 sm:py-16 ">
                    <div className="inline-block align-top py-20  flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="text-5xl text-left xl:text-6xl font-bold text-white leading-normal">
                        Meet the <strong>candidates</strong>.
                        </h1>
                        <p className="text-white drop-shadow-md text-left font-bold mt-10 mb-10">
                        Whether you're an individual volunteer or an organization looking to 
                            make an impact in the Greater Boston area, we'd love to have you.
                        </p>
                        {/* <ButtonPrimary>Get Started</ButtonPrimary> */}
                        <button
                            className="font-bold border-yellow-200 text-cyan-700 bg-yellow-200 hover:text-yellow-200 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8  rounded-r-md rounded-l-md"
                        >
                            Read their platforms
                        </button>

                    </div>
                    <div className="flex w-full">
                    <div className="h-full w-full flex-shrink-0">
                        <img class="h-full object-cover pr-4 ml-8" src="/assets/mayors.png"></img>
                    </div>
                </div>

                
            </div>
            </div>

         
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">


          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Join us and get out the vote!
                </h5>
                <p className="mt-3">Whether you're an individual volunteer or an organization looking to 
                    make an impact in the Greater Boston area, we'd love to have you.</p>
              </div>

              <button className="font-bold border-red-700 text-white bg-red-700 hover:text-red-700 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md">
                Get Started
            </button>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;