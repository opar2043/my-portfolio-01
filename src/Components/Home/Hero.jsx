import { motion } from "motion/react";
import { FaBookOpenReader } from "react-icons/fa6";
import { animate } from "motion";
import { Typewriter } from "react-simple-typewriter";
import opar from "../../assets/Opar.jpg";
import opar3 from "../../assets/opar3.jpg";

const Hero = () => {
  return (
    <div id="home" className="mt-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          {/* Image Serction */}
          <motion.div
            initial={{ x: 25, opacity: 0 }} // Starts off-screen to the left and invisible
            whileInView={{ x: 0, opacity: 1 }} // Moves to position and becomes visible
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true }} // Animates only once when in view
            className="w-sm place-content-center place-items-center rounded-lg  flex-1"
          >
            <img src={opar3} className="md:w-[400px] bg-cover rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ x: -25, opacity: 0 }} // Starts off-screen to the left and invisible
            whileInView={{ x: 0, opacity: 1 }} // Moves to position and becomes visible
            transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }} // Smooth transition
            viewport={{ once: true }} // Animates only once when in view
            className="flex-1 animate__backInLeft"
          >
            <p className="text-3xl py-3 font-bold bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Hello , I'm
            </p>

            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              <Typewriter
                words={[" Rijoan Rashid Opar"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </h1>

            <p className="py-6">
              I'm a passionate and skilled Frontend Web Developer specializing
              in React. As a dedicated student, I continuously enhance my skills
              to build dynamic, user-friendly, and visually appealing web
              applications. I thrive on creating seamless digital experiences
              and staying updated with the latest web technologies.
            </p>
            <a href="https://drive.google.com/file/d/17Efn-aAmAK6OCB6EuU7aRS-I-5sHJHTD/view?usp=drive_link">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="btn btn-primary"
              >
                {" "}
                <FaBookOpenReader></FaBookOpenReader> Certificate
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
