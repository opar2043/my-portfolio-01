import React, { useEffect, useState } from 'react'
import Title from '../Navbar/Title';

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
        <Title head={'My All'} head2={'Projects'}></Title>
    </div>
  )
}

export default AllProjects