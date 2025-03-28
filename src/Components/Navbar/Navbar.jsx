import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { PiReadCvLogoThin } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  function handleToast() {
    toast("Wow so easy!");
  }

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const links = (
    <>
      <NavLink onClick={() => handleLinkClick("home")}>
        <li>
          <a
            href="#"
            className={`${
              activeLink === "home" ? "bg-yellow-400 text-black" : ""
            } px-2 py-1 rounded-md`}
          >
            Home
          </a>
        </li>
      </NavLink>
      <NavLink onClick={() => handleLinkClick("about")}>
        <li>
          <a
            href="#about"
            className={`${
              activeLink === "about" ? "bg-yellow-400 text-black" : ""
            } px-2 py-1 rounded-md`}
          >
            About
          </a>
        </li>
      </NavLink>
      <NavLink onClick={() => handleLinkClick("contact")}>
        <li>
          <a
            href="#contact"
            className={`${
              activeLink === "contact" ? "bg-yellow-400 text-black" : ""
            } px-2 py-1 rounded-md`}
          >
            Contact
          </a>
        </li>
      </NavLink>
      <NavLink onClick={() => handleLinkClick("projects")}>
        <li>
          <a
            href="#projects"
            className={`${
              activeLink === "projects" ? "bg-yellow-400 text-black" : ""
            } px-2 py-1 rounded-md`}
          >
            Projects
          </a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full  shadow-md z-50 border-b-2 bg-violet-500/25 border-violet-900">
      <div className="navbar bg-transparent justify-between px-4 md:px-8">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold text-black bg-yellow-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1 justify-left w-full ">
            <img
              src="https://i.ibb.co.com/k64ntGV0/porfolio-logo.png"
              className=" w-4 md:w-8 rounded-full"
            />
            <p className="md:text-4xl text-sm font-bold bg-gradient-to-r from-yellow-400  to-yellow-300 bg-clip-text text-transparent">
              Rijoan Rashid Opar
            </p>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <a href="https://drive.google.com/file/d/10K7XjFkJX8mAYD6GXzCYU6kefoTH3FOG/view?usp=drive_link">
            <button className="py-2 px-4 md:px-6 flex items-center gap-2 rounded-md text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-900 hover:from-yellow-300 hover:to-yellow-600 hover:text-black">
              <PiReadCvLogoThin className="text-lg" /> Resume
            </button>
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
