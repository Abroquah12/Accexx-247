import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Images/logo.webp"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-8 bg-white-800 text-black bg-white h-18 border-b-gray-100 border-b-2 fixed top-0 left-0 right-0 z-50">
        <div>
          <Image src={logo} alt="Logo" height={500} width={500} className="h-20 w-21" />
        </div>
        <div className="flex items-center space-x-4 text-[13px] font-semibold">
          <Link href="/" className="text-black hover:text-gray-400 mx-2">
            Home
          </Link>
          <Link href="/" className="text-black hover:text-gray-400 mx-2">
            Service
          </Link>
          <Link href="/" className="text-black hover:text-gray-400 mx-2">
            About Us
          </Link>
          <Link href="/" className="text-black hover:text-gray-400 mx-2">
            For Doctors
          </Link>
          <Link href="/" className="text-black hover:text-gray-400 mx-2">
            FAQ
          </Link>
          <Link href="/" className="text-black hover:text-gray-400 mx-2">
            Contact 
          </Link>
        </div>
        <div className="flex items-center justify-evenly space-x-4">
            <button className="bg-[#9871FF] w-20 text-white py-1 rounded">Register</button>
            <button className="border border-solid border-[#9871FF] w-20 py-1 rounded text-[#9871FF]">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
