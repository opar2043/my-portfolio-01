import { useEffect, useState } from "react";
import Title from "../Navbar/Title";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <div className="my-16 mx-10">
      <Title title={"My Projects"}></Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full my-8">
        {projects &&
          projects.map((item, idx) => (
            <div key={idx} className="rounded-md">

              <div className="flex flex-col  rounded-md gap-1 shadow-sm border border-violet-300  justify-center items-center">
                <figure>
                  <img
                    src={item?.photo}
                    alt="Movie"
                    className="h-[200px] bg-cover w-full  rounded"
                  />
                </figure>
                <div className="w-full p-2 flex flex-col gap-1 justify-center items-center ">
                  <h2 className="text-violet-600 font-extrabold md:text-2xl text-xl">
                    {item?.project}
                  </h2>
                  <p className="text-md font-semibold">{item?.name}</p>
                  <p className="text-sm line-clamp-3">{item?.description}</p>
                  <a href={item?.project_link} className="my-4">
                    <button className="btn btn-primary hover:bg-yellow-300 hover:text-black delay-75 md:btn-wide">
                      Live View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;



