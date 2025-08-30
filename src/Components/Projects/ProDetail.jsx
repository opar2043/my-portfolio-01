// import { useEffect, useState } from "react";
// import { FaBookOpen, FaGithub, FaHome } from "react-icons/fa";
// import { FaArrowLeft, FaCircleInfo } from "react-icons/fa6";
// import { Link, useParams } from "react-router-dom";
// import supabase from "../../Supabase/Supabase";

// const ProDetail = () => {
//   const { id } = useParams();
//   console.log(id);

//   const [projects, setProjects] = useState([]);
//   // useEffect(() => {
//   //   fetch("/project.json")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setProjects(data);
//   //     });
//   // }, []);

//   async function getProducts() {
//     const { data, error } = await supabase.from("projects").select("*");
//     if (error) {
//       console.log(error);
//     } else {
//       setProjects(data);
//     }
//   }

//   useEffect(() => {
//     getProducts();
//   }, []);

//   console.log(projects);

//   const data = projects.find((pro) => pro.id == id);
//   const {
//     description,
//     github,
//     name,
//     photo,
//     project,
//     project_link,
//     tech,
//     plan,
//   } = data || {};

//   console.log(data , 'obj');

//   return (
//     <div className="absolute inset-0 z-10 h-fit  text-white w-full items-center [background:radial-gradient(135%_135%_at_55%_15%,#000_43%,#63e_105%)] pt-12 mx-auto ">
//           <div className="card lg:card-side my-16 w-11/12 mx-auto rounded-xl  shadow-xl ">
//         <figure>
//           <img src={data && photo} alt="Album" className="h-full" />
//         </figure>
//         <div className="card-body flex flex-col gap-2 rounded-r-3xl  border-2 border-yellow-300">
//           <h2 className="card-title text-4xl font-extrabold text-yellow-300 tracking-wide">
//             {data && project}
//           </h2>
//           <p className="text-lg font-semibold text-violet-200">
//             {data && name} (Owner){" "}
//           </p>
//           <p className="text-sm leading-relaxed opacity-90">
//             <span className="font-semibold text-yellow-400">Description: </span>
//             {data && description}
//           </p>
//           <p className="text-sm">
//             <span className="font-semibold text-yellow-400">Future Plan: </span>
//             {data && plan}
//           </p>

//           {/* Technologies Used */}

//           <div className="flex flex-wrap gap-3 mt-3">
//             {/* {tech &&
//               tech?.map((t, idx) => (
//                 <span
//                   key={idx}
//                   className="px-6 py-1  rounded-full bg-violet-700 text-xs font-semibold shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300 ease-in-out"
//                 >
//                   {t}
//                 </span>
//               ))} */}
//           </div>
//           <div className="card-actions justify-start my-2">
//             <div className="my-4 flex gap-6">
//               {/* Details Button Section */}
//               <div className="flex flex-col items-center justify-center gap-1">
//                 <Link to={"/"}>
//                   <button className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:bg-violet-500 hover:text-white shadow-md transition-colors duration-300">
//                     <FaHome className="text-xl text-white" />
//                   </button>
//                 </Link>

//                 <p className="font-semibold flex items-center justify-center gap-1 text-red-400 text-sm mt-1">
//                   <FaArrowLeft></FaArrowLeft> Back to Home
//                 </p>
//               </div>

//               {/* Live Button Section */}
//               <div className="flex flex-col items-center justify-center gap-1">
//                 <a
//                   href={data && project_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="p-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-white shadow-md hover:scale-110 transition-transform duration-300">
//                     <FaBookOpen className="text-xl text-yellow-900" />
//                   </button>
//                 </a>
//                 <p className="font-semibold text-yellow-400 text-sm mt-1">
//                   Live Demo
//                 </p>
//               </div>

//               {/* Client site Button Section */}
//               <div className="flex flex-col items-center justify-center gap-1">
//                 <a href={data && github} target="_blank" rel="noopener noreferrer">
//                   <button className="p-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-white shadow-md hover:scale-110 transition-transform duration-300">
//                     <FaGithub className="text-xl text-yellow-900"></FaGithub>
//                   </button>
//                 </a>
//                 <p className="font-semibold text-yellow-400  text-sm mt-1">
//                   GitHub Repo
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>



//   );
// };

// export default ProDetail;






import { useEffect, useState } from "react";
import { FaBookOpen, FaGithub, FaHome, FaExternalLinkAlt, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { FaArrowLeft, FaCircleInfo,  FaDatabase } from "react-icons/fa6";
import { Link, useParams, useNavigate } from "react-router-dom";
import supabase from "../../Supabase/Supabase";
import { motion } from "framer-motion";

const ProDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getProducts() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("projects").select("*");
      if (error) {
        setError(error.message);
        console.log(error);
      } else {
        setProjects(data);
      }
    } catch (err) {
      setError("Failed to fetch projects");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const data = projects.find((pro) => pro.id == id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-violet-950">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-yellow-400 rounded-full animate-spin"></div>
          <p className="mt-4 text-violet-200 font-semibold">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-violet-950">
        <div className="text-center p-8 bg-slate-900/70 rounded-xl border border-violet-700/30 max-w-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Project Not Found</h2>
          <p className="text-violet-200 mb-6">{error || "The project you're looking for doesn't exist."}</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <FaHome className="text-sm" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { description, github, name, photo, project, project_link, tech, plan } = data;
  const techList = tech ? tech.split('; ') : [];

  return (
    <div className="h-fit pt-20 pb-10 bg-gradient-to-br from-black via-slate-950 to-violet-950 text-white">
      <div className="container mx-auto px-4">
        {/* Back Button */} hhhhh
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-violet-300 hover:text-yellow-400 transition-colors font-medium"
          >
            <FaArrowLeft /> Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-700/30 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Project Image */}
            <div className="lg:w-1/2 relative">
              <div className="h-full overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  src={photo}
                  alt={project}
                  className="w-full h-full object-cover min-h-[250px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2"
                  >
                    {project}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg text-violet-200"
                  >
                    By {name}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
              {/* Description */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-4">
                  <FaCircleInfo /> Project Overview
                </h3>
                <p className="text-violet-100 leading-relaxed bg-slate-800/30 p-4 rounded-lg border border-slate-700/20">
                  {description}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-4">
                  <FaChalkboardTeacher /> Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaChalkboardTeacher className="text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-violet-100">Teachers can create and manage assignments</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaUserGraduate className="text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-violet-100">Students can submit their work easily</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaDatabase className="text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-violet-100">Efficient grading system for teachers</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaBookOpen className="text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-violet-100">Structured and intuitive user interface</p>
                  </div>
                </div>
              </motion.div>

              {/* Technologies Used */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-4">
                   Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techList.map((t, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.3 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-700/50 to-violet-800/50 text-violet-200 text-sm font-medium border border-violet-600/30 hover:bg-yellow-400 hover:text-violet-900 transition-colors cursor-default flex items-center gap-2"
                    >
                      {t.includes('React') && <span className="text-blue-400">⚛️</span>}
                      {t.includes('Tailwind') && <span className="text-cyan-400">🎨</span>}
                      {t.includes('MongoDB') && <span className="text-green-400">🍃</span>}
                      {t.includes('Express') && <span className="text-gray-200">🚀</span>}
                      {t.includes('Firebase') && <span className="text-yellow-400">🔥</span>}
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {plan && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-4">
                   Future Plans
                  </h3>
                  <p className="text-violet-100 leading-relaxed bg-slate-800/30 p-4 rounded-lg border border-slate-700/20">
                    {plan}
                  </p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-auto pt-4"
              >
                <a
                  href={project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-1 py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-violet-900 font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-yellow-500/20">
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </button>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-1 py-2 px-4 bg-slate-800 border border-slate-700 text-violet-100 font-semibold rounded-lg hover:bg-slate-700 transition-all">
                    <FaGithub /> GitHub Repo
                  </button>
                </a>

                <Link to="/" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-1 py-2 px-4 bg-violet-800 border border-violet-700 text-violet-100 font-semibold rounded-lg hover:bg-violet-700 transition-all">
                    <FaHome /> Back Home
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProDetail;
