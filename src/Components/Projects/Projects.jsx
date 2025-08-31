import { useEffect, useState } from "react";
import Title from "../Navbar/Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Card";
import supabase from "../../Supabase/Supabase";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  async function getProducts() {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.log(error);
    } else {
      // Sort projects by tech list length (descending)
      const sorted = data.sort((a, b) => {
        let techA = [];
        let techB = [];

        try {
          techA =
            typeof a.tech === "string" ? JSON.parse(a.tech) : a.tech || [];
          techB =
            typeof b.tech === "string" ? JSON.parse(b.tech) : b.tech || [];
        } catch (e) {
          console.error("Tech parsing error:", e);
        }

        return (techB?.length || 0) - (techA?.length || 0);
      });

      setProjects(sorted);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="project" className="my-16 mx-10">
      <Title head={"My"} head2={"Projects"}></Title>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full my-8"
      >
        {projects &&
          projects
            .slice(0, 4)
            .map((item, idx) => <Card key={idx} item={item}></Card>)}
      </motion.div>

      <div className="flex justify-center items-center">
        <Link to={"/allprojects"}>
          <button className="rounded font-semibold text-black bg-gradient-to-r from-yellow-300 to-yellow-600 btn shadow-md hover:scale-110 transition-transform duration-300">
            Show All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
