// import React from "react";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
// import ButtonOutline from ".//misc/ButtonOutline";
 


const NavItem = props => (
  <li>
    <a
      href={props.href}
      className="font-medium text-black px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300"
    >
    {props.text}
    </a>
  </li>)


const Button = props => (
  <button
    type={props.type}
    className="font-medium text-red-700 bg-white-500 hover:bg-red-700 hover:text-white transition-all duration-300  text-s p-3 rounded border border-red-700 py-2 px-5 sm:px-8 capitalize rounded-l-full rounded-r-full"
  >
  {/* <button
    type={props.type}
    className="font-medium text-sky-600 bg-white-500 hover:bg-sky-600 hover:text-white transition-all duration-300  text-s p-3 rounded border border-sky-600 py-2 px-5 sm:px-8 capitalize rounded-l-full rounded-r-full"
  > */}
    {props.children}
  </button>
)




const Header = () => {

  const [activeLink, setActiveLink] = useState(null);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {

    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    // <nav className="flex justify-between p-6">
      
    //   <div className="flex items-center">
    //     <div className="inline-block h-8 w-8 rounded-full bg-gray-400"></div>
    //     <span className="ml-2 text-xl font-bold">Boston Votes</span>
    //   </div>

    //   <div className="hidden md:block">
    //     <ul className="flex space-x-2">
    //       <NavItem href="/resources" text="Resources" />
    //       <NavItem href="/calendar" text="Calendar" />
    //       <NavItem href="/about" text="About Us" />
    //       <NavItem href="/contact" text="Contact" />
    //       <NavItem href="/involve" text="Get Involved" />
    //     </ul>
    //   </div>

    // </nav>


    <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
      
      <div className="col-start-1 col-end-2 flex items-center">
        <img src="/assets/iop.png" alt = "logo" className="h-10 w-auto" />
      </div>

      

      <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
        {/* <Link href="/">
          <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
              Sign In
          </a>
        </Link> */}

        <div className="hidden md:block">
        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">

        <div
              activeClass="active"
              to="how to vote"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("how to vote");
              }}
              onMouseEnter={() => {
                setdropdownOpen(!dropdownOpen);
              }}
              onMouseLeave={() => {
                setdropdownOpen(!dropdownOpen);
              }}

              className={
                "duration-300 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "how to vote"
                  ? " text-red-700 animation-active "
                  : " text-black-500 hover:text-red-700 ")
              }
            >
              <div className="flex flex-row">
                    How to Vote
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg> 
              </div>
              <div
                  className={'absolute left-0 w-full rounded border-[.5px] border-light bg-white py-2 transition-all items-center ' + (dropdownOpen ? 'top-full opacity-100 visible' : 'top-[110%] invisible opacity-0')}
                  >                
                  <a
                    href="#"
                    className="block py-1 px-5 text-base font-semibold text-body-color text-black-700 hover:bg-gray-700 hover:bg-opacity-5 hover:text-primary"
                >
                    Early Voting
                </a>
                <a
                    href="#"
                    className="block py-1 px-5 text-base font-semibold text-body-color hover:bg-gray-700 hover:bg-opacity-5 hover:text-primary"
                >
                    Vote by Mail
                </a>
                <a
                    href="javascript:void(0)"
                    className="block py-1 px-5 text-base font-semibold text-body-color hover:bg-gray-700 hover:bg-opacity-5 hover:text-primary"
                >
                    Election Day
                </a>
                <a
                    href="javascript:void(0)"
                    className="block py-1 px-5 text-base font-semibold text-body-color hover:bg-gray-700 hover:bg-opacity-5 hover:text-primary"
                >
                    Register to Vote
                </a>
                <a
                    href="javascript:void(0)"
                    className="block py-1 px-5 text-base font-semibold text-body-color hover:bg-gray-700 hover:bg-opacity-5 hover:text-primary"
                >
                    FAQs
                </a>
                <a
                    href="javascript:void(0)"
                    className="block py-1 px-5 text-base font-semibold text-body-color hover:bg-gray-700 hover:bg-opacity-5 hover:text-primary"
                >
                    Calendar
                </a>
              </div>
            </div>

          {/* <LinkScroll
              activeClass="active"
              to="resources"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("resources");
              }}
              className={
                "duration-300 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "resources"
                  ? " text-red-700 animation-active "
                  : " text-black-500 hover:text-red-700 ")
              }
            >
              Resources
            </LinkScroll> */}
            <LinkScroll
              activeClass="active"
              to="candidates"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("candidates");
              }}
              className={
                "duration-300 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "candidates"
                  ? " text-red-700 animation-active "
                  : " text-black-500 hover:text-red-700 ")
              }
            >
              Meet the Candidates
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "duration-300 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-red-700 animation-active "
                  : " text-black-500 hover:text-red-700 ")
              }
              >
                About Us
            </LinkScroll>
        </ul>
          

        </div>
        <Button>Get Involved</Button>

      </div>


    </nav>

  );
};

export default Header;