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

   async function getProducts()
  {
    const {data , error } = await supabase.from('projects').select("*");
    if(error)
    {
      console.log(error);
    }else{
      setProjects(data);
      console.log(data);
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  

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
