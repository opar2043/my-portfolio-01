import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Title from "../Navbar/Title";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";
import Form from "./Form";
import Passion from "./Passion";

const Contact = () => {
  return (
    <div id="contact" className="my-10 border-2 border-yellow-500 p-3 shadow-2xl rounded-xl">
      <Title head={"Reach Me"}></Title>

      <div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center ">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:w-2/3 w-full p-8  lg:col-span-3 lg:p-12 "
          >
             <Passion></Passion>

            <img src="" alt="" />

            {/* Links  */}

            <motion.div className="flex items-center justify-center gap-3 md:gap-7 text-3xl mt-10"></motion.div>
          </motion.div>

          <motion.div
            // initial={{ x: 20, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
            // viewport={{ once: true }}
            className="md:w-1/3 px-5 py-6 w-full bg-white/10 backdrop-blur-lg rounded-xl  shadow-lg border border-yellow-300"
          >
            {/* Headline */}
            <h2 className="text-center text-2xl border-b-2 border-yellow-400 pb-3 font-bold text-yellow-300 mb-6 uppercase tracking-widest">
              Social Links
            </h2>

            {/* Facebook */}

            <motion.a
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              href="https://www.facebook.com/share/1AY9hw3GT2/"
              className="flex items-center justify-between gap-4 bg-gradient-to-r from-yellow-200 to-yellow-400 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-black font-semibold text-lg flex items-center gap-2">
                <FaFacebook className="text-blue-600 text-2xl" /> Facebook
              </span>
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="https://www.facebook.com/share/1AY9hw3GT2/"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <FaFacebook className="text-blue-600 text-xl" />
              </motion.a>
            </motion.a>

            {/* GitHub */}
            <motion.a
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              href="https://github.com/opar2043"
              className="flex items-center justify-between gap-4 mt-4 bg-gradient-to-r from-gray-800 to-gray-900 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-white font-semibold text-lg flex items-center gap-2">
                <FaGithub className="text-white text-2xl" /> GitHub
              </span>
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                href="https://github.com/opar2043"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <FaGithub className="text-black text-xl" />
              </motion.a>
            </motion.a>

            {/* Gmail */}
            <motion.a
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              href="https://mail.google.com/mail/u/0/#inbox"
              className="flex items-center justify-between gap-4 mt-4 bg-gradient-to-r from-red-200 to-red-400 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-black font-semibold text-lg flex items-center gap-2">
                <SiGmail className="text-red-500 text-2xl" /> G-Mail
              </span>
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="https://mail.google.com/mail/u/0/#inbox"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <SiGmail className="text-red-500 text-xl" />
              </motion.a>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              href="https://www.linkedin.com/in/rijoan-rashid-opar-04809a34b/"
              className="flex items-center justify-between gap-4 mt-4 bg-gradient-to-r from-blue-200 to-blue-400 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-black font-semibold text-lg flex items-center gap-2">
                <FaLinkedin className="text-blue-600 text-2xl" /> LinkedIn
              </span>
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="https://www.linkedin.com/in/rijoan-rashid-opar-04809a34b/"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <FaLinkedin className="text-blue-600 text-xl" />
              </motion.a>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              href="https://wa.me/qr/7FADY5JLDLSMB1"
              className="flex items-center justify-between gap-4 mt-4 bg-gradient-to-r from-green-200 to-green-400 py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-black font-semibold text-lg flex items-center gap-2">
                <FaWhatsapp className="text-green-500 text-2xl" /> WhatsApp
              </span>
              <motion.a
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="https://wa.me/qr/7FADY5JLDLSMB1"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="text-green-500 text-xl" />
              </motion.a>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
