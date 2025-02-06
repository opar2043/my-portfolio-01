import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Category from "../Category/Category";

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

      <Footer></Footer>
    </div>
  );
};

export default Root;
