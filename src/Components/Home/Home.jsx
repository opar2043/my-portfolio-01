import { Typewriter } from "react-simple-typewriter";
import opar from "../../assets/Opar.jpg";
import opar3 from "../../assets/opar3.jpg";
import "animate.css";
import { motion } from "motion/react";
import { FaBookOpenReader } from "react-icons/fa6";
import { animate } from "motion";
import Hero from "./Hero";
import About from "../About/About";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div >
         <Hero ></Hero>                
        <About />
        <Education />
        <Projects />
        <Skills />
        <Category />
        <Contact />
    </div>
  );
};

export default Home;
