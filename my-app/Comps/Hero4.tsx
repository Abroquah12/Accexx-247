import React from "react";
import Image from "next/image";
import accountuser2 from "../public/images/accountuser2.svg";
import caluser2 from "../public/images/caluser2.svg";
import locationpin2 from "../public/images/locationpin2.svg";
import bulb from "../public/images/bulb.svg";

const Hero4 = () => {
  return (
    <div className="flex justify-evenly w-300 relative bottom-40 left-2 z-10  mx-auto mt-10 overflow-hidden">
      <div className=" bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <Image
          src={accountuser2}
          alt="Search Button"
          width={30}
          height={30}
          className="inline-block mr-2"
        />
        <h1 className="font-bold">Search Doctor</h1>
        <div className="flex flex-col items-center justify-center">
          <p>Before book appointment </p>
          <p>first of all search doctor by </p>
          <p>category</p>
        </div>
      </div>
      <div className=" bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <Image
          src={locationpin2}
          alt="Search Button"
          width={30}
          height={30}
          className="inline-block mr-2"
        />
        <h1 className="font-bold">Choose Your Location</h1>
        <div className="flex flex-col items-center justify-center">
          <p>Then enter your location and </p>
          <p> we will help you find </p>
          <p> appointment near you</p>
        </div>
      </div>
      <div className=" bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <Image
          src={caluser2}
          alt="Search Button"
          width={30}
          height={30}
          className="inline-block mr-2"
        />
        <h1 className="font-bold">
          Schedule <br />
          Appointment
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p>Then select a date to set an </p>
          <p>appointment with your doctor</p>
        </div>
      </div>
      <div className=" bg-white w-60 h-60 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-5">
        <Image
          src={bulb}
          alt="Search Button"
          width={30}
          height={30}
          className="inline-block mr-2"
        />
        <h1 className="font-bold">Get Your Solution</h1>
        <div className="flex flex-col items-center justify-center">
          <p>We will help you find and </p>
          <p> provide solutions for your </p>
          <p> health</p>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
