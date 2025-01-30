import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import './Navbar.css'
import { NavLink } from "react-router-dom"
import { Button } from "@mui/material"
const Navbar = () => {
    const links = <>
        <NavLink><li><a>Home</a></li></NavLink>
        <NavLink><li><a>About</a></li></NavLink>
        <NavLink><li><a>Contact</a></li></NavLink>
        <NavLink><li><a>Projects</a></li></NavLink>
    </>
  return (
    <div className=" border-b-2 border-violet-900 pb-1">
    <div className="navbar bg-transparent  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content font-semibold text-black bg-yellow-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <p className="md:text-3xl text-xl font-bold">Rijoan Rashid Opar</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-1 font-semibold">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   {/* Navbar Icons */}
   <div className="flex flex-wrap gap-3 text-xl w-1/2">
   <Button variant="contained"> Hire Me</Button>
      
   </div>
 
  </div>
</div>
    </div>
  )
}

export default Navbar