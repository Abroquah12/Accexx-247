import React from "react";
import Link from "next/link";
import Image from "next/image";
import photo5 from "../public/images/photo5.webp";
import photo6 from "../public/images/photo6.webp";
import photo7 from "../public/images/photo7.webp";
import photo8 from "../public/images/photo8.webp";

const Hero6 = () => {
  return (
    <div className="bg-[#9871FF] flex flex-col justify-center items-center mt-10 py-12 px-24 ">
      <h1 className="text-white text-3xl md:text-4xl font-bold mt-10">
        Find providers who can <br />
        help with these topics
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
        <div className="bg-white p-4 rounded-lg shadow-lg flex gap-5 md:w-137 h-40">
          <div>
            <Image
              src={photo5}
              alt="a picture of a doctor"
              width={100}
              height={100}
              className="rounded-xl w-20 h-20 object-cover mt-4"
            />
          </div>
          <div className="flex flex-col p-2 gap-3">
            <h1 className=" font-bold">Personality Disorders</h1>
            <p className="text-gray-600">
              Personality disorders are a group of mental illnesses.
            </p>
            <Link href="/services" className="text-gray-600 font-bold">
              Learn more
            </Link>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex gap-5 md:w-137 h-40">
          <div>
            <Image
              src={photo6}
              alt="a picture of a doctor"
              width={100}
              height={100}
              className="rounded-xl w-20 h-20 object-cover mt-4"
            />
          </div>
          <div className="flex flex-col p-2 gap-3">
            <h1 className=" font-bold">Depression</h1>
            <p className="text-gray-600">
              Depression is a common and serious medical illness that 
              negatively.
            </p>
            <Link href="/services" className="text-gray-600 font-bold">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5">
        <div className="bg-white p-4 rounded-lg shadow-lg flex gap-5 md:w-137 h-40">
          <div>
            <Image
              src={photo7}
              alt="a picture of a doctor"
              width={100}
              height={100}
              className="rounded-xl w-20 h-20 object-cover mt-4"
            />
          </div>
          <div className="flex flex-col p-2 gap-3">
            <h1 className=" font-bold">Anxiety</h1>
            <p className="text-gray-600">
                Anxiety is a feeling of fear, dread & uneasiness.
            </p>
            <Link href="/services" className="text-gray-600 font-bold">
              Learn more
            </Link>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex gap-5 md:w-137 h-40">
          <div>
            <Image
              src={photo8}
              alt="a picture of a doctor"
              width={100}
              height={100}
              className="rounded-xl w-20 h-20 object-cover mt-4"
            />
          </div>
          <div className="flex flex-col p-2 gap-3">
            <h2 className=" font-bold">Mood Swings</h2>
            <p className="text-gray-600">
              Support for anxiety, depression, and more.
            </p>
            <Link href="/services" className="text-gray-600 font-bold">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
