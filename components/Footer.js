
import React from 'react';
import Image from 'next/image';
// import Instagram from '../../public/assets/Icon/amazon.png';
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedIn } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

function Footer() {
    return <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-3xl pb-6'>
                    stream<span className='text-blue-600'>line</span>
                </p>

                <div className='flex gap-6 pb-5'>
                    {/* section for icons */}
                    {/* <Image src={Instagram} className='text-2xl cursor-pointer hover:text-yellow-600'/>
                    <FaTwitter className='text-2xl cursor-pointer hover:text-yellow-600'/>
                    <FaLinkedIn className='text-2xl cursor-pointer hover:text-yellow-600'/>
                    <FaYoutube className='text-2xl cursor-pointer hover:text-yellow-600'/>
                     */}
                </div>
            </ul>
        </div>

        <div className='p-5'>
            <ul>
                <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutuals</li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Deposits</li>
            </ul>

        </div>
    </div>
}

export default Footer;