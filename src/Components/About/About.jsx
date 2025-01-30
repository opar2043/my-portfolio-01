import { motion } from "framer-motion";
import opar from "../../assets/gallery.jpg";
import Title from "../Navbar/Title";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="bg-transparent rounded-xl bg-gradient-to-t from-black via-slate-950  to-violet-950 text-white py-16 my-14">
      <Title title={"About Me"}></Title>

      <section className="mx-auto max-w-screen-xl px-6 lg:px-12 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* Image Section with Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
          >
            <img 
              src={opar} 
              className="rounded-xl shadow-lg border border-gray-700"
              alt="Profile" 
            />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-yellow-400 sm:text-4xl mb-4">
                I am a Junior
                              <Typewriter
                            words={["  Fullstack Developer"]}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={40}
                            deleteSpeed={40}
                            delaySpeed={1500}
                
                          />
                
               
              </h2>

              <p className="text-gray-300 mb-6">
                Passionate about building modern web applications with seamless user experiences. I specialize in **React, Tailwind CSS, Node.js, and MongoDB**.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                <p><span className="text-yellow-400 font-semibold">Name:</span> Rijoan Rashid Opar</p>
                <p><span className="text-yellow-400 font-semibold">Nationality:</span> Bangladeshi</p>
                <p><span className="text-yellow-400 font-semibold">Religion:</span> Islam</p>
                <p><span className="text-yellow-400 font-semibold">Age:</span> 23</p>
                <p><span className="text-yellow-400 font-semibold">Education:</span> B.Sc in Computer Science (Running)</p>
                <p><span className="text-yellow-400 font-semibold">Hobby:</span> Playing Football</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
