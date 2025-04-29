import { useEffect, useState } from "react";
import Title from "../Navbar/Title";
import { FaBookOpen } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { FaCircleInfo, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  // const projects = [
  //   {
  //     id: 1,
  //     photo: "https://i.ibb.co.com/7x8wjWkM/Annotation-2025-01-31-192257.png",
  //     project: "Shaadi.com",
  //     name: "Rijoan Rashid Opar",
  //     description:
  //       "Full-Stack Developer specializing in React, Tailwind CSS, and Node.js. It's a site where users can find their spouse or soulmate by category. It's a very user-friendly site where I built both user and admin dashboard panels and functionalities.",
  //     project_link: "https://creative-starship-dcc9e7.netlify.app/",
  //     tech: ["React", "Tailwind", "MongoDB", "Node.js"],
  //     github: "https://github.com/opar2043/matrimonial-website.git",
  //   },
  //   {
  //     id: 2,
  //     photo: "https://i.ibb.co.com/84XHnpFz/assignment.jpg",
  //     project: "Assignment Crub",
  //     name: "Rijoan Rashid Opar",
  //     description:
  //       "Frontend Developer with expertise in React, MongoDB, and modern CSS frameworks. This is a website where you can create your own assignments. Students can submit their assignments, and teachers can grade them. It's a well-designed and beneficial website.",
  //     project_link: "https://teal-meerkat-08607f.netlify.app",
  //     tech: ["React", "Tailwind", "MongoDB", "express js", "firebase"],
  //     github: "https://github.com/opar2043/create-assignment-web.git",
  //   },
  //   {
  //     id: 3,
  //     photo: "https://i.ibb.co.com/4Zm5SLjf/crowdcube.jpg",
  //     project: "Crowed Cube Ideas",
  //     name: "Rijoan Rashid Opar",
  //     description:
  //       "Backend Engineer experienced in Node.js, Express, and MongoDB. People can share their ideas, build good communication with others, and help start-ups by providing proper knowledge.",
  //     project_link: "https://gilded-twilight-2a1954.netlify.app/",
  //     tech: ["React", "Tailwind", "MongoDB", "Node.js", "firebase"],
  //     github: "https://github.com/opar2043/mongo-campgain-idea-s-web.git",
  //   },
  //   {
  //     id: 4,
  //     photo: "https://i.ibb.co.com/ynmjm0Hc/recipe.jpg",
  //     project: "Verity Restaurant Project",
  //     name: "Rijoan Rashid Opar",
  //     description:
  //       "Backend Engineer experienced in Node.js, Express, and MongoDB. This website allows users to add, delete, and modify their recipes. Customers can also place orders and pay their bills online.",
  //     project_link: "https://vocal-cranachan-4eceb2.netlify.app",
  //     tech: ["React", "Tailwind", "MongoDB", "express js", "firebase"],
  //     github: "https://github.com/opar2043/Verity-Restaurent-project-.git",
  //   },
  //   {
  //     id: 5,
  //     photo: "https://i.ibb.co.com/JWvvKsZf/gadjet-heaven.jpg",
  //     project: "Gadget Heaven",
  //     name: "Rijoan Rashid Opar",
  //     description:
  //       "A simple digital gadget website built using React technologies. Users can easily browse and purchase their desired gadgets. The site is built with React, Tailwind, and other supporting technologies.",
  //     project_link: "https://stellar-narwhal-c69347.netlify.app/",
  //     tech: ["React", "Tailwind"],
  //     github: "https://github.com/opar2043/Gadjet-Heaven.git",
  //   },
  // ];

  // console.log(projects);

  return (
    <div id="project" className="my-16 mx-10">
      <Title title={"My Projects"}></Title>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full my-8"
      >
        {projects &&
          projects.map((item, idx) => (
            <div key={idx} className="rounded-md">
              <div className="flex flex-col rounded-md gap-1 shadow-md border border-yellow-300 bg-transparent hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <figure>
                  <img
                    src={item?.photo}
                    alt="Project"
                    className="h-[200px] w-full object-cover rounded-t-md"
                  />
                </figure>
                <div className="w-full p-4 flex flex-col gap-2 justify-center items-center">
                  <h2 className="text-yellow-400 font-extrabold md:text-2xl text-xl text-center">
                    {item?.project}
                  </h2>

                  <div className="my-4 flex gap-6">
                    {/* Live Button Section */}
                    <div className="flex flex-col items-center justify-center gap-1">
                      <a
                        href={item?.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="p-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-white shadow-md hover:scale-110 transition-transform duration-300">
                          <FaBookOpen className="text-xl text-yellow-900" />
                        </button>
                      </a>
                      <p className="font-semibold text-yellow-400 text-sm mt-1">
                        Live Demo
                      </p>
                    </div>


                    {/* Details Button Section */}
                    <div className="flex flex-col items-center justify-center gap-1">
                      <Link to={`/detail/${item?.id}`}>
                        <button className="p-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 hover:bg-violet-500 hover:text-white shadow-md transition-colors duration-300">
                          <FaCircleInfo className="text-xl text-yellow-900" />
                        </button>
                      </Link>
                      <p className="font-semibold text-yellow-400 text-sm mt-1">
                        Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Projects;
