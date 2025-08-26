import { useEffect, useState } from "react";
import { FaBookOpen, FaGithub, FaHome } from "react-icons/fa";
import { FaArrowLeft, FaCircleInfo } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import supabase from "../../Supabase/Supabase";

const ProDetail = () => {
  const { id } = useParams();
  // console.log(id);

  const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("/project.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProjects(data);
  //     });
  // }, []);

  async function getProducts() {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.log(error);
    } else {
      setProjects(data);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(projects);

  const data = projects.find((pro) => pro.id == id);
  const {
    description,
    github,
    name,
    photo,
    project,
    project_link,
    tech,
    plan,
  } = data || {};

  return (
    <div className="absolute inset-0 z-10 h-fit  text-white w-full items-center [background:radial-gradient(135%_135%_at_55%_15%,#000_43%,#63e_105%)] pt-12 mx-auto ">
      <div className="card lg:card-side my-16 w-11/12 mx-auto rounded-xl  shadow-xl ">
        <figure>
          <img src={photo} alt="Album" className="h-full" />
        </figure>
        <div className="card-body flex flex-col gap-2 rounded-r-3xl  border-2 border-yellow-300">
          <h2 className="card-title text-4xl font-extrabold text-yellow-300 tracking-wide">
            {project}
          </h2>
          <p className="text-lg font-semibold text-violet-200">
            {name} (Owner){" "}
          </p>
          <p className="text-sm leading-relaxed opacity-90">
            <span className="font-semibold text-yellow-400">Description: </span>
            {description}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-yellow-400">Future Plan: </span>
            {plan}
          </p>

          {/* Technologies Used */}

          <div className="flex flex-wrap gap-3 mt-3">
            {tech &&
              tech?.map((t, idx) => (
                <span
                  key={idx}
                  className="px-6 py-1  rounded-full bg-violet-700 text-xs font-semibold shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300 ease-in-out"
                >
                  {t}
                </span>
              ))}
          </div>
          <div className="card-actions justify-start my-2">
            <div className="my-4 flex gap-6">
              {/* Details Button Section */}
              <div className="flex flex-col items-center justify-center gap-1">
                <Link to={"/"}>
                  <button className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:bg-violet-500 hover:text-white shadow-md transition-colors duration-300">
                    <FaHome className="text-xl text-white" />
                  </button>
                </Link>

                <p className="font-semibold flex items-center justify-center gap-1 text-red-400 text-sm mt-1">
                  <FaArrowLeft></FaArrowLeft> Back to Home
                </p>
              </div>

              {/* Live Button Section */}
              <div className="flex flex-col items-center justify-center gap-1">
                <a
                  href={project_link}
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

              {/* Client site Button Section */}
              <div className="flex flex-col items-center justify-center gap-1">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <button className="p-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-white shadow-md hover:scale-110 transition-transform duration-300">
                    <FaGithub className="text-xl text-yellow-900"></FaGithub>
                  </button>
                </a>
                <p className="font-semibold text-yellow-400  text-sm mt-1">
                  GitHub Repo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetail;
