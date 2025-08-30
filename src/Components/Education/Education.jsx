




import { motion } from "motion/react";
import Title from "../Navbar/Title";
import Lottie from "lottie-react";
import education from "../../assets/education.json";

const Education = () => {
  return (
    <div id="edu" className="p-6 bg-gradient-to-t from-black via-slate-950 to-violet-950 rounded-lg shadow-lg my-10 border border-violet-800/30">
      <Title head="Education" />
      
      <div className="mt-8 text-lg">
        <motion.div className="flex flex-col md:flex-row gap-8">
          {/* Education Details */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            {/* University Education */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-slate-900/50 rounded-xl border-l-4 border-violet-500 shadow-md"
            >
              <div className="flex items-start">
                <div className="bg-violet-600 p-2 rounded-full mr-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">
                    Bachelor of Science in Computer Science & Engineering (CSE)
                  </p>
                  <p className="text-slate-300 mt-1">2022 - Running</p>
                  <p className="font-semibold text-violet-300">Sonargaon University, Dhaka</p>
                </div>
              </div>
            </motion.div>

            {/* Other Education Items */}
            {[
              { emoji: "🏅", title: "Higher Secondary Certificate (HSC)", year: "2020", gpa: "5.00" },
              { emoji: "📖", title: "Secondary School Certificate (SSC)", year: "2018", gpa: "5.00" },
              { emoji: "📚", title: "Junior School Certificate (JSC)", year: "2015", gpa: "5.00" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-5 bg-slate-900/30 rounded-xl border border-slate-700/50 shadow-sm"
              >
                <div className="flex items-start">
                  <div className="bg-violet-700/30 p-2 rounded-full mr-4">
                    <span className="text-xl">{item.emoji}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      {item.title}
                    </p>
                    <p className="text-slate-300 mt-1">Year: {item.year} | GPA: {item.gpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex items-center justify-center"
          >
            <div className="rounded-xl bg-gradient-to-br from-violet-900/20 to-slate-900/30 p-4 border border-violet-700/30">
              <Lottie animationData={education} className="max-w-xs" />
            </div>
          </motion.div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-slate-900/40 rounded-xl border border-violet-700/20"
        >
          <p className="font-semibold text-yellow-300 text-center italic">
            Throughout my academic journey, I have consistently demonstrated
            excellence in my studies, achieving a perfect GPA at every level.
            Currently, as a CSE student, I am developing a strong foundation in
            programming, data structures, and web development. Passionate about
            technology, I continuously seek opportunities to enhance my skills and
            build innovative projects. It's my hobby to build and do something new.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;