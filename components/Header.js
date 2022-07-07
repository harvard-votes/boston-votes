import React from "react";
import Image from "next/image";

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
  return (
    <nav className="flex justify-between p-6">
      
      <div className="flex items-center">
        <div className="inline-block h-8 w-8 rounded-full bg-gray-400"></div>
        <span className="ml-2 text-xl font-bold">Boston Votes</span>
      </div>

      <div className="hidden md:block">
        <ul className="flex space-x-2">
          <NavItem href="/resources" text="Resources" />
          <NavItem href="/calendar" text="Calendar" />
          <NavItem href="/about" text="About Us" />
          <NavItem href="/contact" text="Contact" />
          <NavItem href="/involve" text="Get Involved" />
        </ul>
      </div>

    </nav>
  );
};

export default Header;