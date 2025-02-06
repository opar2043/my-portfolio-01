import React from "react";
import Title from "../Navbar/Title";

const websites = [
  {
    title: "Restaurant",
    image: "https://i.ibb.co.com/hKqq6DS/cover-Recipi.webp",
  },
  {
    title: "Academic",
    image: "https://i.ibb.co.com/XrqXH3VL/harverd.jpg",
  },
  {
    title: "Hospital",
    image: "https://i.ibb.co.com/q3bwt295/hspital.jpg",
  },
  {
    title: "Matrimonial",
    image:
      "https://i.ibb.co.com/rFkdKRw/coupleHd.jpg",

  },
  {
    title: "Tech",
    image: "https://i.ibb.co.com/SD55xt4z/digital.webp",
  },
  {
    title: "Gadget",
    image: "https://i.ibb.co.com/pxJJzGJ/gadjet.jpg",
  },
  {
    title: "Children",
    image: "https://i.ibb.co.com/nHHNQh3/children.jpg",
  },
  {
    title: "Pet Hub",
    image: "https://i.ibb.co.com/67yfYvkh/pethub.png",
  },
];

const Category = () => {
  return (
    <div>
      <Title title={"Service"}></Title>
      <h2 className="text-center text-lg font-semibold my-6 text-yellow-300">
        We Can Build Several Project by Your Choice
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {websites.map((web, idx) => (
          <div key={idx} className="card bg-transparent  shadow-xl border-2 border-yellow-400">
            <figure>
              <img src={web.image}
              className="w-full h-52"
              alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex-col text-yellow-400">
                {web.title} Website
                <div className="badge badge-warning hover:badge-primary">Contact US!</div>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
