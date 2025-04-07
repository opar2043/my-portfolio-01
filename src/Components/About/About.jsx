import { motion } from "framer-motion";
import opar from "../../assets/opar2.jpg";
import Title from "../Navbar/Title";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="bg-transparent rounded-xl bg-gradient-to-t from-black via-slate-950  to-violet-950 text-white py-5 md:py-16 my-5 md:my-14">
      <Title title={"About Me"}></Title>

      <section
        id="about"
        className="mx-auto max-w-screen-xl px-6 lg:px-12 my-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image Section with Animation */}
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={opar}
             
              className="rounded-xl shadow-lg border border-gray-700 "
              alt="Profile img"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <div className="text-3xl font-bold text-yellow-400 sm:text-4xl mb-4">
                I am a Junior
                <h2>
                <Typewriter
                  words={["  Fullstack Developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={40}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                Passionate about building modern web applications with seamless
                user experiences. I specialize in **React, Tailwind CSS,
                Node.js, and MongoDB**. I began my programming journey in 2022,
                but started coding seriously in 2023. Now, I am highly
                passionate about my work and focused on my vision. I work hard
                every day to achieve my goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                <p>
                  <span className="text-yellow-400 font-semibold">Name:</span>{" "}
                  Rijoan Rashid Opar
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">
                    Nationality:
                  </span>{" "}
                  Bangladeshi
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">
                    Religion:
                  </span>{" "}
                  Islam
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">Age:</span> 23
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">
                    Education:
                  </span>{" "}
                  B.Sc in Computer Science (Running)
                </p>
                <p>
                  <span className="text-yellow-400 font-semibold">Hobby:</span>{" "}
                  Playing Football
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
