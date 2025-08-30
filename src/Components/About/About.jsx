import { motion } from "framer-motion";
import opar from "../../assets/opar2.jpg";
import Title from "../Navbar/Title";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-t from-black via-slate-950 to-violet-950 text-white py-5 md:py-16 my-5 md:my-14 rounded-xl shadow-xl border border-violet-800/30"
    >
      <Title head={"About Me"}></Title>

      <section className="mx-auto max-w-screen-xl px-6 lg:px-12 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image Section with Animation */}
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-violet-500/30"
            >
              <motion.img
                src={opar}
                className="w-full h-auto rounded-xl"
                alt="Profile img"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent rounded-xl"></div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-violet-500/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <div className="text-3xl font-bold text-yellow-400 sm:text-4xl mb-6">
                I am a Junior
                <h2 className="mt-2 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  <Typewriter
                    words={[
                      "Fullstack Developer",
                      "React Developer",
                      "Wordpress Developer",
                      "Web Developer"
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={40}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/30 mb-6 shadow-md"
              >
                <p className="text-gray-300">
                  Passionate about building modern web applications with
                  seamless user experiences. I specialize in{" "}
                  <span className="text-yellow-400 font-medium">
                    React, Tailwind CSS, Node.js, and MongoDB
                  </span>
                  . I began my programming journey in 2022, but started coding
                  seriously in 2023. Now, I am highly passionate about my work
                  and focused on my vision. I work hard every day to achieve my
                  goals.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                {[
                  { label: "Name:", value: "Rijoan Rashid Opar", icon: "👤" },
                  { label: "Nationality:", value: "Bangladeshi", icon: "🇧🇩" },
                  { label: "Religion:", value: "Islam", icon: "☪️" },
                  { label: "Age:", value: "23", icon: "🎂" },
                  {
                    label: "Education:",
                    value: "B.Sc in Computer Science (Running)",
                    icon: "🎓",
                  },
                  { label: "Hobby:", value: "Playing Football", icon: "⚽" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-slate-800/30 p-3 rounded-lg border border-slate-700/20"
                  >
                    <span className="mr-2 text-yellow-400">{item.icon}</span>
                    <div>
                      <span className="text-yellow-400 font-semibold">
                        {item.label}{" "}
                      </span>
                      <span className="text-gray-300">{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to action buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-4 mt-8"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg"> 
                  <a href="https://drive.google.com/file/d/10K7XjFkJX8mAYD6GXzCYU6kefoTH3FOG/view?usp=drive_link">
                  Download Resume
                  </a>
                </button>
                <button className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium border border-violet-500/30 hover:bg-slate-700 transition-all">
                  <a href="#contact">Contact Me </a>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
