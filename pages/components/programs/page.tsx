import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

const testData = [
  {
    id: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/5fdfeb249d00c472c28c8e82/cbf392df-f5ed-4cb6-981f-91372b1754a4/DSC02635.jpg",
    title: "Cardio Training",
    description: "Improve your endurance and stamina.",
  },
  {
    id: 2,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg",
    title: "Strength Training",
    description: "Build muscle and increase strength.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/fit-sportswoman-is-doing-exercises-with-pilates-ball-while-her-trainer-is-helping-with-exercises_232070-17689.jpg",
    title: "Flexibility Training",
    description: "Enhance your range of motion.",
  },
  {
    id: 4,
    image: "/a1.jpg",
    title: "Functional Training",
    description: "Builds strength and endurance.",
  },
  {
    id: 5,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg",
    title: "Core Training",
    description: "Strengthens core muscles and improves posture.",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/premium-photo/fit-sportswoman-is-doing-exercises-with-pilates-ball-while-her-trainer-is-helping-with-exercises_232070-17689.jpg",
    title: "Group Exercises",
    description: "Group training sessions.",
  },
];

function ProgramsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white shadow-sm">
        <div className="relative max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Mudassir <span className="text-amber-700">Ghazi</span>
          </h1>
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
              <IoClose className="text-4xl cursor-pointer" />
            ) : (
              <TiThMenu className="text-4xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

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

      <div className="test w-full bg-zinc-900 pt-30 text-center">
        <h1 className="md:text-[2vw] text-[3vh] text-amber-700 font-bold">
          Services
        </h1>
        <div className="w-full justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 p-10">
            {testData.map((item) => (
              <div key={item.id} className="bg-zinc-800 p-4 rounded shadow-md">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="mt-4 text-lg text-amber-700 font-bold">
                  {item.title}
                </h1>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramsPage;