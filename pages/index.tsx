import Link from "next/link";
import Contact from "../pages/Contact";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white shadow-sm">
        <div className="relative max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Mudassir <span className="text-amber-700">Ghazi</span>
          </h1>
          <ul className="hidden lg:flex space-x-[100px]">
            <li className="hover:text-amber-700 hover:scale-110 transition-all duration-200">
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
          <div onClick={handleClick} className="lg:hidden cursor-pointer">
            {isOpen ? (
              <IoClose className="text-4xl" />
            ) : (
              <TiThMenu className="text-4xl" />
            )}
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full z-50 bg-zinc-900 overflow-hidden ease-in-out lg:hidden"
        >
          <ul className="flex flex-col space-y-6 p-5 pt-8 items-center justify-center">
            <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
              <Link onClick={handleClick} href="/">
                Home
              </Link>
            </li>
            <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
              <Link onClick={handleClick} href="/about">
                About
              </Link>
            </li>
            <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
              <Link onClick={handleClick} href="/programs">
                Programs
              </Link>
            </li>
            <li className="text-lg hover:text-amber-700 hover:scale-110 transition-all duration-200">
              <Link onClick={handleClick} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <IoClose
            onClick={handleClick}
            className="absolute top-4 right-5 text-4xl cursor-pointer"
          />
        </motion.div>
      )}

      {/* Main Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/bgimg.jpg')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 bg-gradient-to-l from-black to-gray-900" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-start h-full text-white text-center md:px-20 px-5">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold">
              Train with <span className="text-amber-700 font-bold">ME.</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              A Qualified and Experienced Personal Trainer
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-3 py-1 bg-amber-700 text-white font-medium rounded-md shadow hover:bg-amber-600 transition duration-300 mt-14"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full md:px-10 md:block lg:flex">
          <div className="relative md:w-full lg:w-1/2 pt-[650px]">
            <img
              className="absolute inset-0 w-[250px] md:w-[300px] top-10 left-15 md:top-10 md:left-15 object-cover rounded-2xl"
              src="https://t4.ftcdn.net/jpg/01/74/21/25/360_F_174212531_cerVf4uP6vinBWieBB46p2P5xVhnsNSK.jpg"
              alt="Training Image 1"
            />
            <img
              className="absolute inset-0 w-[250px] md:w-[300px] top-45 left-50 md:top-50 md:left-80 object-cover rounded-2xl"
              src="https://img.freepik.com/foto-gratis/mujer-atletica-haciendo-ejercicio-gimnasio-mantenerse-forma_23-2150989975.jpg?semt=ais_hybrid&w=740"
              alt="Training Image 2"
            />
            <img
              className="absolute inset-0 w-[250px] md:w-[300px] top-90 left-15 md:top-80 md:left-15 object-cover rounded-2xl"
              src="/a2.jpg"
              alt="Training Image 3"
            />
          </div>
          <div className="md:w-full lg:w-1/2 md:text-left px-10">
            <div className="w-[80%] mx-auto justify-center items-center">
              <h2 className="text-5xl font-bold mb-20 mt-[20px] md:mt-[50px] lg:mt-[260px]">
                Transform your physique with our{" "}
                <span className="text-amber-700 font-bold">Fitness Plan.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full h-screen">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default HomePage;