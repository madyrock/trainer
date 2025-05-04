// components/ContactSection.js
'use client';
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {

     const [isOpen, setIsOpen] = useState(false);
    
      const handleClick = () => {
        setIsOpen(!isOpen);
      };

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white shadow-sm">
        <div className="relative max-w-7xl mx-auto px-5 py-3 flex justify-between md:justify-between items-center">
          <h1 className="text-2xl  font-bold">Mudassir <span className="text-amber-700">Ghazi</span></h1>
          <ul className="hidden lg:flex space-x-[100px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/programs">Programs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div onClick={handleClick} className="lg:hidden">
            {isOpen ? (
              <IoClose className="text-4xl" />
            ) : (
              <TiThMenu className="text-4xl" />
            )}
          </div>
        </div>
        
      </nav>

      {
        isOpen && (
          <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
          
          className={`fixed top-0 left-0 w-full z-50  bg-zinc-900 overflow-hidden ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
            <ul className=" flex flex-col space-y-6 p-5 pt-8 items-center justify-center">
              <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
                <Link onClick={handleClick} href="/">Home</Link>
              </li>
              <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
                <Link onClick={handleClick} href="/about">About</Link>
              </li>
              <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
                <Link onClick={handleClick} href="/programs">Programs</Link>
              </li>
              <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
                <Link onClick={handleClick} href="/contact">Contact</Link>
              </li>
            </ul>
            <IoClose onClick={handleClick} className="absolute top-4 right-5 text-4xl " />
          </motion.div>
        )
      }

<div className="min-h-screen bg-zinc-900 px-4 py-12 pt-25">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Contact Me</h1>
        
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <h2 className="font-semibold text-xl mb-1">Phone</h2>
            <p>
              <a href="tel:+918866672242" className="text-blue-600 hover:underline">
                +918866672242
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-1">Email</h2>
            <p>
              <a href="mailto:mudassirghazi1121@gmail.com" className="text-blue-600 hover:underline">
                info@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-1">Home Address</h2>
            <p>SunCity-3, Jamnagar, Gujrat, INDIA</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


