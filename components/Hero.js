import React from "react";
import Image from "next/image";
import ButtonPrimary from ".//misc/ButtonPrimary";

// const Button = props => (
//     <button
//       type={props.type}
//       className="bg-red-400 hover:bg-red-500 transition-colors duration-300 text-white text-s p-3 rounded border border-red-500"
//     >
//       {props.children}
//     </button>
//   )

const Button = props => (
  // <button
  //   className="font-bold border-red-700 text-white bg-red-700 hover:text-red-700 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
  // >
  <button
  className="font-bold border-teal-600 text-white bg-teal-600 hover:text-teal-600 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
>
  {/* <button
  className="font-bold border-sky-700 text-white bg-sky-700 hover:text-sky-700 hover:bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-2 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
  > */}
    {props.children}
  </button>
)

const Hero = ({
  listUser = [
    {
      number: "Voter Registration",
      name: "Fri, July 29,2022",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      number: "Early Voting",
      name: "Sat, August 13, 2022 - Sun, August 21, 2022",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      number: "Voter Registration Deadline",
      name: "Tue, August 23, 2022",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className='
      bg-[url("https://img2.storyblok.com//f/64062/1444x543/9f4b93d8fe/harvard.jpg")] 
      h-150 bg-cover bg-center 
      w-full bg-max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto'
    >
     {/* <div className='
         bg-gradient-to-tl h-auto from-gray-900  w-full relative'
      > */}
      
      {/* <img src='https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/48875402378_d10761b291_o.jpg_01.jpg' 
            className='w-full h-full object-cover absolute mix-blend-overlay' />
       */}

      <div className='px-20 py-2'>

        {/* <div className="bg-scroll bg-my_bg_image h-[972px] max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto" id="about"> */}
          
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
          <div className="inline-block align-top py-20 flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-5xl xl:text-6xl font-bold text-white leading-normal">
              Our future is on the <strong>ballot</strong>.
            </h1>
            <p className="text-slate-200 mt-4 mb-6">
              Vote in the Massachusetts primaries on September 6th.
            </p>
            {/* <ButtonPrimary>Get Started</ButtonPrimary> */}
              <Button >Meet the Candidates</Button>

          </div>

          

          <div className="flex w-full">
            <div className="h-full w-full">
              {/* <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              /> */}

          <div className="rounded rounded-r-md bg-white bg-opacity-20 rounded-l-md  w-full px-6 grid grid-flow-row grid-cols-1 py-9 divide-y-2 divide-x-0 divide-slate-300 bg-white-500 z-10">
          {/* <div className="rounded rounded-r-md rounded-l-md bg-white bg-opacity-90 w-full px-6 grid grid-flow-row grid-cols-1 py-9  bg-white-500 z-10"> */}
            
              <h1 className="text-3xl text-yellow-200 font-bold py-4 px-4">
                  Key Dates
              </h1>
              
              {listUser.map((listUsers, index) => (
                  <div
                  className="flex items-right justify-right py-6 px-4 w-auto mx-0"
                  key={index}
                  >
                  <div className="flex mr-auto w-auto">
                      <div className="flex items-center justify-center bg-yellow-200  w-12 h-12 mr-6 rounded-full">
                      <img src={listUsers.icon} className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                      <p className="text-xl text-white font-bold">
                          {listUsers.number}
                      </p>
                      <p className="text-lg text-white">{listUsers.name}</p>
                      </div>
                  </div>
                  </div>
              ))}

                <button
                  className="text-xl font-bold text-yellow-200 hover:text-yellow-400 bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-5 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
                >
                {/* <button
                  className="text-xl font-bold text-teal-600 hover:text-teal-800 bg-transparent transition-all duration-300  text-medium p-3 rounded border  py-5 px-5 sm:px-8 capitalize rounded-r-md rounded-l-md"
                > */}
                  See full events calendar
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>

      

      <div className="relative w-full flex">
        {/* <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-red-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0 "
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>

      
    </div>
  );
};

export default Hero;