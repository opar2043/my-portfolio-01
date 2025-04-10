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
        className="md:p-4 p-3 bg-gradient-to-t from-violet-500 to-violet-950 border-0  rounded-full fixed  md:bottom-20 bottom-16 right-14 md:right-20"
      >
        <FaHeadset></FaHeadset>
      </button>
      <Footer></Footer>

      {/* Modal Section  */}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-2/6">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Main Form */}
          <div className="w-full h-2/6 max-w-xl mx-auto p-4  rounded-2xl">

            <div>
                   
            </div>
            <form  className="w-full flex  bottom-0 items-center gap-2 border rounded-full p-2">
      
                <input
                  type="text"
                  placeholder="Ask me anything about myself..."
                  className="input  flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-0 focus:border-transparent "
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-full p-3"
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
