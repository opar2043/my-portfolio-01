import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div>
      <div className="rounded-md">
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
    </div>
  );
};

export default Card;
