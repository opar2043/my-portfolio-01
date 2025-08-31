import React, { useEffect, useState } from "react";
import Title from "../Navbar/Title";
import Card from "./Card";
import supabase from "../../Supabase/Supabase";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("/project.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProjects(data);
  //     });
  // }, []);

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
