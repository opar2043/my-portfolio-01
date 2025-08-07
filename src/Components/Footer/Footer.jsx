import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
<div className="rounded bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-black py-10 px-6">
  <footer className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Branding Section */}
    <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">

      <img src="https://i.ibb.co.com/k64ntGV0/porfolio-logo.png" className="fill-current w-14 rounded-full" alt="" />
      <p className="mt-3 text-xl font-bold">Rijoan Rashid Opar</p>
      <p className="text-sm text-black font-semibold"><strong>Mobile: </strong>01814482832</p>
      <p className="text-sm text-black font-semibold"><strong>Email: </strong><a href="">rezonerashidopar@gmail.com</a></p>
      <p className="text-sm text-black font-semibold">- Junior Fullstack Developer</p>
      <p className="text-sm text-black font-semibold">- React Developer | Wordpress Developer</p>

    </div>

    {/* Social Media Section */}
    <div className="flex flex-col items-center">
      <h6 className="footer-title text-lg font-semibold">Follow Me</h6>
      <div className="flex items-center justify-center gap-3 md:gap-2 text-xl ">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              href="https://github.com/opar2043"
            >
              <FaGithub className="p-1 text-3xl"></FaGithub>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              href="https://www.facebook.com/share/1AY9hw3GT2/"
              className="bg-white p-1 rounded-full"
            >
              <FaFacebook className="text-blue-600"></FaFacebook>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              href="https://www.linkedin.com/in/rijoan-rashid-opar-04809a34b/"
              className="bg-white p-1 rounded-full"
            >
              <FaLinkedin className="text-blue-600"></FaLinkedin>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              href="https://mail.google.com/mail/u/0/#inbox"
              className="bg-white rounded-full p-1 "
            >
              <SiGmail className="text-red-500"></SiGmail>
            </motion.a>

          </div>
          <p className="font-semibold py-2">Bandar , Narayanganj</p>
          
    </div>
  </footer>

  <p className="text-center text-black mt-6 text-sm">
    © {new Date().getFullYear()} All Rights Reserved
  </p>
</div>

  )
}

export default Footer