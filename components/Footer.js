
// import React from 'react';
// import Image from 'next/image';
// // import Instagram from '../../public/assets/Icon/amazon.png';
// // import { FaTwitter } from "react-icons/fa";
// // import { FaLinkedIn } from "react-icons/fa";
// // import { FaYoutube } from "react-icons/fa";

// function Footer() {
//     return <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
//         <div className='p-5'>
//             <ul>
//                 <p className='text-gray-800 font-bold text-3xl pb-6'>
//                     stream<span className='text-blue-600'>line</span>
//                 </p>

//                 <div className='flex gap-6 pb-5'>
//                     {/* section for icons */}
//                     {/* <Image src={Instagram} className='text-2xl cursor-pointer hover:text-yellow-600'/>
//                     <FaTwitter className='text-2xl cursor-pointer hover:text-yellow-600'/>
//                     <FaLinkedIn className='text-2xl cursor-pointer hover:text-yellow-600'/>
//                     <FaYoutube className='text-2xl cursor-pointer hover:text-yellow-600'/>
//                      */}
//                 </div>
//             </ul>
//         </div>

//         <div className='p-5'>
//             <ul>
//                 <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
//                 <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
//                 <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures</li>
//                 <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutuals</li>
//                 <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Deposits</li>
//             </ul>

//         </div>
//     </div>
// }

// export default Footer;


import React from "react";
// import LogoVPN from "../../public/assets/Logo.svg";
// import Facebook from "../../public/assets/Icon/facebook.svg";
// import Twitter from "../../public/assets/Icon/twitter.svg";
// import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <img src="/assets/iop.png" className="h-8 w-auto mb-6" />
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <p className="mb-4">
            <strong className="font-medium">Boston Votes Coalition</strong> is a 
            non-profit organization dedicated to increase voter access in the Greater Boston Area.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="assets/facebook.png" className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="assets/twitter.png" className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img src="assets/instagram.png" className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©2020BostonVotesCoalition</p>
        </div>
        
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Why Vote {" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Resources{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Meet the Candidates{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>

          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Get Involved</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Register as a Voter{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Volunteer for BVC{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become an Affiliate{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;