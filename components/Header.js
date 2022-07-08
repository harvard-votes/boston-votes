// import React from "react";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from ".//misc/ButtonOutline";
 


const NavItem = props => 
  <li>
    <a
      href={props.href}
      className="text-xl font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300"
    >
    {props.text}
    </a>
  </li>



const Header = () => {

  const [activeLink, setActiveLink] = useState(null);
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
        <img src="/assets/iop.png" className="h-10 w-auto" />
      </div>

      <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">

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
          "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
          (activeLink === "about"
            ? " text-orange-500 animation-active "
            : " text-black-500 hover:text-orange-500 a")
        }
      >
        About
      </LinkScroll>
      
      <LinkScroll
          activeClass="active"
          to="feature"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("feature");
          }}
          className={
            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "feature"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Feature
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("pricing");
          }}
          className={
            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "pricing"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Pricing
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="testimoni"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("testimoni");
          }}
          className={
            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "testimoni"
              ? " text-orange-500 animation-active "
              : " text-black-500 hover:text-orange-500 ")
          }
        >
          Testimonial
        </LinkScroll>
      </ul>

      <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
        <Link href="/">
          <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
              Sign In
          </a>
        </Link>
        <ButtonOutline>Sign Up</ButtonOutline>
      </div>


    </nav>

  );
};

export default Header;