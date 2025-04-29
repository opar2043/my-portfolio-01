import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Category from "../Category/Category";
import { FaLocationArrow } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";

const Root = () => {
  return (
    <div className="absolute inset-0 -z-10 max-h-fit text-white w-full items-center [background:radial-gradient(135%_135%_at_55%_15%,#000_43%,#63e_105%)]  mx-auto ">
      <Navbar></Navbar>

      <div className="md:px-10 px-4">
        <Home />
        <About />
        <Education />
        <Skills />
        <Category />
        <Projects />
        <Contact />
      </div>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="md:p-4 p-3 bg-gradient-to-t from-violet-500 to-violet-950 border-0  rounded-full fixed   bottom-14 right-9 "
      >
        <FaHeadset></FaHeadset>
      </button>
      <Footer></Footer>

      {/* Modal Section  */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[70%] bg-gradient-to-b from-violet-600 to-black rounded-2xl text-white shadow-2xl border border-violet-900">
          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white hover:bg-violet-800">
              ✕
            </button>
          </form>

          {/* Modal Content */}
          <div className="w-full h-full max-w-xl mx-auto p-2 flex flex-col justify-between gap-4">
            <h2 className=" font-semibold">
              Hello😊 , I'm Opar's Assistant. Fell Free to Ask Me!
            </h2>
            {/* Answer Display Section */}
            <div className="flex-1 overflow-y-auto border border-violet-700 rounded-xl p-2 bg-black bg-opacity-30 text-violet-100 shadow-inner">
              {/* AI response will go here */}
              <p className="text-sm">
                Hi there! I'm Rijoan, a frontend developer passionate about
                React and modern web development. Ask me more!
              </p>
            </div>

            {/* Message Input Bar */}
            <form className="w-full flex items-center gap-2 bg-black bg-opacity-60 border border-violet-700 rounded-full px-2 py-2 shadow-inner">
              <input
                type="text"
                placeholder="Ask me anything about myself..."
                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-violet-300 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full p-3 hover:scale-105 transition-transform shadow-lg"
              >
                <FaLocationArrow />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Root;
