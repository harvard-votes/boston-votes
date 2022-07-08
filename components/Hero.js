import React from "react";
import Image from "next/image";
import ButtonPrimary from ".//misc/ButtonPrimary";

const Button = props => (
    <button
      type={props.type}
      className="bg-red-400 hover:bg-red-500 transition-colors duration-300 text-white text-s p-3 rounded border border-red-500"
    >
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
    <div className="max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto" id="about">
        
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-5xl xl:text-6xl font-medium text-black-600 leading-normal">
            Our future is on the <strong>ballot</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Vote in the Massachusetts primaries on September 6th.
          </p>
          {/* <ButtonPrimary>Get Started</ButtonPrimary> */}
            <Button>
                Get Involved
            </Button>

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

        <div className="rounded-lg w-full grid grid-flow-row grid-cols-1 py-9 divide-y-2 divide-x-0 divide-gray-100 bg-white-500 z-10">
          
            <h1 className="text-3xl text-black-600 font-bold py-6 px-4">
                Key Dates
            </h1>
            
            {listUser.map((listUsers, index) => (
                <div
                className="flex items-right justify-right py-6 px-4 w-auto mx-0"
                key={index}
                >
                <div className="flex mr-auto w-auto">
                    <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <img src={listUsers.icon} className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                        {listUsers.number}
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                    </div>
                </div>
                </div>
            ))}

            <Button>See full events calendar</Button>

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
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
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
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;