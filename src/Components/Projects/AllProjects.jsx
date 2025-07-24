import React, { useEffect, useState } from "react";
import Title from "../Navbar/Title";
import Card from "./Card";
import Navbar from "../Navbar/Navbar";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <div>
      <Title head={"My All"} head2={"Projects"}></Title>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full my-8 w-full ">
        {projects?.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
