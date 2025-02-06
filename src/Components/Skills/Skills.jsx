import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import Title from "../Navbar/Title";
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import "animate.css";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div>
      <Title title={"My Skils"}></Title>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 justify-center py-11 md:w-9/12 w-full mx-auto"
      >
        <div className="border border-yellow-200 animate__infinite	infinite animate__slow	2s animate__animated animate__bounce  rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col hover:bg-yellow-200 hover:text-black">
          <FaHtml5 className="text-5xl text-orange-500 "></FaHtml5>
          <p className="text-lg  font-semibold text-yellow-300">HTML</p>
        </div>

        <motion.div
          animate={{
            y: [-30, -10, -30],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <FaCss3 className="text-5xl text-blue-500" />
          <p className="text-lg font-semibold text-yellow-300">CSS</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <RiTailwindCssFill className="text-5xl text-sky-500" />
          <p className="text-lg font-semibold text-yellow-300">Tailwind</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <FaJs className="text-5xl text-yellow-400"></FaJs>
          <p className="text-lg font-semibold text-yellow-300">JS</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <FaReact className="text-5xl text-red-600"></FaReact>
          <p className="text-lg font-semibold text-yellow-300">React</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <img src="/vite.svg" alt="Vite Image" />
          <p className="text-lg font-semibold text-yellow-300">Vite</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 3.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <SiExpress className="text-5xl text-green-500"></SiExpress>
          <p className="text-lg font-semibold text-yellow-300">Express JS</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <FaNodeJs className="text-5xl text-green-400"></FaNodeJs>
          <p className="text-lg font-semibold text-yellow-300">Node JS</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <SiMongodb className="text-5xl text-green-600"></SiMongodb>
          <p className="text-lg font-semibold text-yellow-300">Mongo DB</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <SiFirebase className="text-5xl text-orange-700"></SiFirebase>
          <p className="text-lg font-semibold text-yellow-300">Firebase</p>
        </motion.div>

        <motion.div
          animate={{
            y: [-20, -10, -20],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="border border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col"
        >
          <FaC className="text-5xl text-blue-600"></FaC>
          <p className="text-lg font-semibold text-yellow-300">C</p>
        </motion.div>

        <div className="border animate__animated animate__headShake animate__infinite animate__slow 3s border-yellow-300 rounded-xl py-3 px-6 flex justify-center items-center gap-1 flex-col">
          <TbBrandCpp className="text-5xl text-blue-600" />
          <p className="text-lg font-semibold text-yellow-300">C++</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
