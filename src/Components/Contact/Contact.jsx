import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Title from "../Navbar/Title";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="my-10 border-2 border-yellow-500 p-3 shadow-2xl rounded-xl">
      <Title title={"Contact Me"}></Title>

      <div>
        <div className="rounded-lg p-8  lg:col-span-3 lg:p-12">
          <form action="#" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-lg border border-yellow-500 bg-transparent p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4 text-center">
              <button
                type="submit"
                className="inline-block w-full rounded-lg  px-5 py-3 font-medium text-black sm:w-auto bg-yellow-500 hover:text-white hover:bg-violet-900"
              >
                Send Enquiry
              </button>
            </div>
          </form>

          {/* Links  */}

          <div className="flex items-center justify-center gap-3 md:gap-7 text-3xl mt-10">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              href="https://github.com/opar2043"
            >
              <FaGithub className="p-1 text-5xl"></FaGithub>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
