import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
<div className="rounded bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-black py-10 px-6">
  <footer className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Branding Section */}
    <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        className="fill-current"
      >
        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </svg>
      <p className="mt-3 text-xl font-bold">Rijoan Rashid Opar</p>
      <p className="text-sm text-black font-semibold"><strong>Mobile: </strong>01814482832</p>
      <p className="text-sm text-black font-semibold"><strong>Email: </strong><a href="">rezonerashidopar@gmail.com</a></p>
      <p className="text-sm text-black font-semibold">- Junior Fullstack Developer</p>
      <p className="text-sm text-black font-semibold">- React Developer</p>

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
              href="https://www.linkedin.com/"
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
              href="https://www.linkedin.com/"
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