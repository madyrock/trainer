import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";


function AboutPage() {
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

      <div className="test w-full h-screen justify-center items-center bg-zinc-900 pt-30 md:pt-20 text-center">
        <h1 className="md:text-[2vw] text-[3vh] text-amber-700 font-bold">
          About Me
        </h1>
        <div className="w-full pt-10 flex flex-col justify-center items-center">
          <div className="w-[90%] h-[90%] md:flex border-2  border-amber-700">
            <div className="w-full md:w-2/3 h-full overflow-x-scroll hide-scrollbar ">
            {/* eslint-disable-next-line react/no-unescaped-entities */}

              <p className="p-10 text-left text-2xl text-wrap italic">"I am a dedicated personal fitness trainer with over 10 years of experience helping individuals achieve their health and body goals. As a 3-time state-level gold medalist, I bring a deep understanding of strength, endurance, and performance. I specialize in creating customized workout and nutrition plans tailored to each client needs—ensuring sustainable, visible results. Whether you're aiming to lose fat, build muscle, or improve overall wellness, I am here to guide, motivate, and transform your fitness journey."</p>
            </div>
            <div className="w-full md:w-1/3 mt-5 md:mt-0 h-full bg-zinc-800">
              <img className="w-full h-full object-cover fli" src="/about.jpg" alt="" />
            </div>
            
          </div>
        </div>
        
      </div>

      </>

  );
}

export default AboutPage;