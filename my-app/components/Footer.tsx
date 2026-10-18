import React from "react";
import Image from "next/image";
import background from "../public/Images/background.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-gray-50 mt-10 p-5">
      <div className="flex justify-evenly items-center flex-col md:flex-row gap-10 mt-20">
        <div className="flex flex-col gap-2">
          <Image
            src={background}
            alt="A logo"
            width={500}
            height={500}
            className="w-40 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 mb-9">
          <h1 className="font-semibold text-gray-800">Services</h1>
          <Link href="/" className="text-gray-600">
            Invesment
          </Link>
          <Link href="/" className="text-gray-600">
            Assets Market
          </Link>
          <Link href="/" className="text-gray-600">
            Trading
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-gray-800">Information</h1>
          <Link href="/" className="text-gray-600">
            Sign Up
          </Link>
          <Link href="/" className="text-gray-600">
            Join Community
          </Link>
          <Link href="/" className="text-gray-600">
            Learning
          </Link>
          <Link href="/" className="text-gray-600">
            Newsletter
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-gray-800">Platform</h1>
          <Link href="/" className="text-gray-600">
            Terms Of Use
          </Link>
          <Link href="/" className="text-gray-600">
            About
          </Link>
          <Link href="/" className="text-gray-600">
            Contact
          </Link>
          <Link href="/" className="text-gray-600">
            Partnership
          </Link>
        </div>
        <div className="flex flex-col gap-2 mb-9">
          <h1 className="font-semibold text-gray-800">Support</h1>
          <Link href="/" className="text-gray-600">
            Help Center
          </Link>
          <Link href="/" className="text-gray-600">
            Video Tutorial
          </Link>
          <Link href="/" className="text-gray-600">
            Cookie Settings
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <hr className="text-gray-200"/>
        <div className="flex justify-center items-center mt-10 text-gray-600">
            <p>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
