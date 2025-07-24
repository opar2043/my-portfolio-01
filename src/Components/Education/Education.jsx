import { motion } from "motion/react";
import Title from "../Navbar/Title";
import Lottie from "lottie-react";
import education from "../../assets/education.json";
const Education = () => {
  return (
    <div id="edu" className="p-6 bg-gradient-to-t from-black via-slate-950  to-violet-950 rounded-lg shadow-md my-10">
      <Title head="Education " />
      <div className="mt-4 text-lg">
        <motion.div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p>
              <strong>
                🎓 Bachelor of Science in Computer Science & Engineering (CSE)
              </strong>
            </p>
            <p>Year: 2022 - Running</p>
            <p className="font-semibold">Sonargaon University, Dhaka</p>

            <p className="mt-4">
              <strong>🏅 Higher Secondary Certificate (HSC)</strong>
            </p>
            <p className="pt-2 ">-Year: 2020 | GPA: 5.00</p>

            <p className="mt-4">
              <strong>📖 Secondary School Certificate (SSC)</strong>
            </p>
            <p className="pt-2 ">- Year: 2018 | GPA: 5.00</p>

            <p className="mt-4">
              <strong>📚 Junior School Certificate (JSC)</strong>
            </p>
            <p className="pt-2 ">-Year: 2015 | GPA: 5.00</p>
          </motion.div>

          <motion.div
            initial={{ x: -25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-10/12 md:w-1/3 p-2"
          >
            <Lottie animationData={education}></Lottie>
          </motion.div>
        </motion.div>

        <motion.p
                    initial={{ y: -25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
        
        className="mt-6 font-semibold text-yellow-300">
          Throughout my academic journey, I have consistently demonstrated
          excellence in my studies, achieving a perfect GPA at every level.
          Currently, as a CSE student, I am developing a strong foundation in
          programming, data structures, and web development. Passionate about
          technology, I continuously seek opportunities to enhance my skills and
          build innovative projects.It's my hobby to build and do something new.
        </motion.p>
      </div>
    </div>
  );
};

export default Education;
