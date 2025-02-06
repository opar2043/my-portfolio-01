import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { PiReadCvLogoThin } from "react-icons/pi";

const Navbar = () => {
  function handleToast() {
    toast("Wow so easy!");
  }

  const links = (
    <>
      <NavLink>
        <li>
          <a href="#">Home</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a href="#about">About</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className=" border-b-2 border-violet-900 pb-2">
      <div className="navbar bg-transparent  justify-center ">
        <div className="navbar-start">
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
          <div className="flex items-center gap-1 justify-center w-full ">
            <img
              src="https://i.ibb.co.com/k64ntGV0/porfolio-logo.png"
              className=" w-4 md:w-8 rounded-full"
            />
            <p className="md:text-3xl text-sm font-bold text-yellow-200">
              Rijoan Rashid Opar
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal pl-2 gap-1 font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Navbar Icons */}
          <div className="flex flex-wrap gap-3 text-xl w-1/2">
            <a href="https://drive.google.com/file/d/172Q_e5CaXHOKCp7iiAa9B_D9n3EOyURC/view">
              <button
                onClick={handleToast}
                className="py-2 px-3 md:px-6 flex items-center gap-1 rounded-md text-sm font-semibold bg-gradient-to-r from-violet-600 to-violet-900 hover:from-yellow-300 hover:to-yellow-600 hover:text-black"
              >
                <PiReadCvLogoThin className="text-lg" /> Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
