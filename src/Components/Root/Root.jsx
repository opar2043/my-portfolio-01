import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";

const Root = () => {
  return (
    <div className="absolute inset-0 -z-10 max-h-fit text-white w-full items-center [background:radial-gradient(135%_135%_at_55%_15%,#000_43%,#63e_105%)] max-w-6xl mx-auto md:px-10 px-4">
      <Navbar></Navbar>
      <div >
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
