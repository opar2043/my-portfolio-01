import { FaUser } from "react-icons/fa";
import { PiReadCvLogoThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { IoIosMenu } from "react-icons/io"; // <-- added
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      
        <Link to={'/'}>
         <li className="py-1 rounded-md hover:text-yellow-500 transition">
          Home
          </li>
        </Link>
      
      <li className="py-1 rounded-md hover:text-yellow-500 transition">
        <a href="#about">About</a>
      </li>
      <li className="py-1 rounded-md hover:text-yellow-500 transition">
        <a href="#contact">Contact</a>
      </li>
      <li className="py-1 rounded-md hover:text-yellow-500 transition">
        <a href="#project">Projects</a>
      </li>
      <li className="py-1 rounded-md hover:text-yellow-500 transition">
        <a href="#edu">Education</a>
      </li>
      <li className="py-1 rounded-md hover:text-yellow-500 transition">
        <a href="#skill">Skills</a>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 border-b-2 bg-violet-500/25 border-violet-900">
      <div className="navbar bg-transparent justify-between px-4 md:px-8">
        {/* Navbar Start: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co.com/k64ntGV0/porfolio-logo.png"
            alt="Logo"
            className="w-6 md:w-8 rounded-full"
          />
          <p className="md:text-3xl text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Rijoan Rashid Opar
          </p>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold items-center">{links}</ul>
        </div>

        {/* Navbar End: Resume + Login */}
        <div className="flex items-center space-x-4">
          <a
            href="https://drive.google.com/file/d/14NamTFWQswBPswZG26jgNcrmGdJaubmj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-2 px-4 md:px-6 flex items-center gap-2 rounded-md text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-900 hover:from-yellow-300 hover:to-yellow-600 hover:text-black">
              <PiReadCvLogoThin className="text-lg" /> Resume
            </button>
          </a>
          <span className="flex items-center justify-center rounded-full bg-yellow-400 p-2 shadow hover:bg-yellow-300 transition">
            <Link to={"/login"}>
              <FaUser size={22} className="text-yellow-900" />
            </Link>
          </span>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoIosMenu size={28} />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`drawer fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-violet-600 to-violet-900 shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" p-4">
          <button className="btn btn-ghost" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
        <ul className="menu items-center gap-1">{links}</ul>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Navbar;
