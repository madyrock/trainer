import React from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";





const trainings = [
  {
    title: "Strength Training",
    desc: "Build muscle, tone your body, and increase overall strength.",
    img: "a2.jpg"
  },
  {
    title: "Cardio Training",
    desc: "Boost endurance and burn calories through aerobic workouts.",
    img: "https://www.shutterstock.com/image-photo/group-athletic-people-running-on-600nw-1720291402.jpg"
},
  {
    title: "Functional Training",
    desc: "Improve mobility and real-life movement patterns.",
    img: "https://s.itl.cat/pngfile/s/37-371369_fitness-wallpaper-functional-training.jpg.jpg",
  },
  {
    title: "Core Training",
    desc: "Strengthen abs and lower back for stability and posture.",
    img: "https://iconmedicalcenters.com/wp-content/uploads/2020/02/the-best-core-exercises-for-strength-training.jpg"
},
  {
    title: "Flexibility & Mobility",
    desc: "Increase range of motion and reduce muscle tightness.",
    img: "https://athleticvisionfitness.com/wp-content/uploads/2022/04/Top-5-Benefits-of-Flexibility.png"
},
  {
    title: "Fat Loss Program",
    desc: "Lose fat safely with structured plans and guidance.",
    img: "https://media.istockphoto.com/id/1172439986/photo/overweight-women-at-gym.jpg?s=612x612&w=0&k=20&c=aKHVOYYdGRMio1TLikWrUc7LEX_aQvrE0OgOeBwxSIg="
},
  {
    title: "Sports Training",
    desc: "Enhance performance with sport-specific drills.",
    img: "https://media.istockphoto.com/id/1360395151/photo/sport-collage-men-and-woman-running-on-smoke-background.jpg?s=612x612&w=0&k=20&c=wDWHztv_54FrNEwAXClEJUViJnHTWs6z_G_5mPx-NMQ="
},
  {
    title: "Rehabilitation",
    desc: "Recover safely from injury and rebuild strength.",
    img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321619.jpg?semt=ais_hybrid&w=740"
},
  {
    title: "Prenatal/Postnatal",
    desc: "Stay fit and safe during and after pregnancy.",
    img: "https://ybfittraining.com/wp-content/uploads/2021/05/28-personal-training-certification-qualification-classes-surrey-london.jpg"
},
  {
    title: "Senior Fitness",
    desc: "Improve mobility and strength with gentle exercises.",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20250304/pngtree-senior-man-discussing-workout-plan-with-fitness-coach-image_17060600.jpg"
},
];



function Programs() {
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

    <div className="bg-zinc-900 text-white py-12 pt-25 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-amber-600">Training Programs</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {trainings.map((training, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img
              src={training.img}
              alt={training.title}
              className="w-full h-68 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">{training.title}</h3>
              <p className="text-sm text-gray-300">{training.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Programs;
