import { Typewriter } from 'react-simple-typewriter'
import opar from '../../assets/Opar.jpg'
import opar3 from '../../assets/opar3.jpg'
import 'animate.css';
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          {/* Image Serction */}
          <div className="w-sm place-content-center place-items-center rounded-lg  flex-1">
            <img
              src={opar3}
              className="md:w-[400px] bg-cover rounded-lg"
            />
          </div>

          <div className="flex-1 animate__backInLeft">
            <p className="text-3xl py-3 font-bold bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Hello , I'm

            </p>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100 bg-clip-text text-transparent">
            <Typewriter
            words={[" Rijoan Rashid Opar"]}
            loop={Infinity}
            cursor
            cursorStyle='_'
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

            <motion.button
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                          }}
            className="btn btn-primary"> Download Resume</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
