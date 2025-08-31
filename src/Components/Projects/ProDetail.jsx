import { useEffect, useState } from "react";
import { FaBookOpen, FaGithub, FaHome, FaExternalLinkAlt, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { FaArrowLeft, FaCircleInfo, FaDatabase } from "react-icons/fa6";
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
  console.log(data);

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


  const techIcons = {
  html: { emoji: "🌐", color: "text-orange-500" },
  css: { emoji: "🎨", color: "text-blue-500" },
  react: { emoji: "⚛️", color: "text-blue-400" },
  js: { emoji: "🟨", color: "text-yellow-400" },
  mongodb: { emoji: "🍃", color: "text-green-400" },
  "express js": { emoji: "🚀", color: "text-gray-200" },
  firebase: { emoji: "🔥", color: "text-yellow-400" },
  "node js": { emoji: "🟩", color: "text-green-600" },
  "zenu ui": { emoji: "💠", color: "text-purple-400" },
  tailwind: { emoji: "🎨", color: "text-cyan-400" },
};

  const { description, github, name, photo, project, project_link, tech, plan } = data;
  console.log(tech);
  const techList = tech && tech.split(',') ;
  


  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-black via-slate-950 to-violet-950 text-white">
      <div className="container mx-auto px-4">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-700/30 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Project Image - Fixed size */}
            <div className="lg:w-1/2 p-6 flex items-center justify-center">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-96 overflow-hidden rounded-xl border-2 border-violet-500/30 shadow-lg"
              >
                <img
                  src={photo}
                  alt={project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl font-bold text-yellow-400 mb-1"
                  >
                    {project}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-violet-200 text-sm"
                  >
                    By {name}
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
              {/* Description */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-3">
                  <FaCircleInfo /> Project Overview
                </h3>
                <p className="text-violet-100 leading-relaxed bg-slate-800/30 p-4 rounded-lg border border-slate-700/20 text-sm">
                  {description}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-3">
                  <FaChalkboardTeacher /> Key Features
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaChalkboardTeacher className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-100 text-sm">Teachers can create and manage assignments</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaUserGraduate className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-100 text-sm">Students can submit their work easily</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaDatabase className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-100 text-sm">Efficient grading system for teachers</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-800/30 p-3 rounded-lg border border-slate-700/20">
                    <FaBookOpen className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-100 text-sm">Structured and intuitive user interface</p>
                  </div>
                </div>
              </motion.div>


              {/* Technologies Used */}
         <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7, duration: 0.5 }}
  className="mb-6"
>
  <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-3">
    Technologies Used
  </h3>
  <div className="flex flex-wrap gap-2">

    {(() => {
      let techList = [];
      try {
        techList = typeof tech === "string" ? JSON.parse(tech) : tech;
      } catch (e) {
        console.error("Failed to parse tech field:", e);
        techList = [];
      }

      return Array.isArray(techList) && techList.map((t, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + idx * 0.1, duration: 0.3 }}
          className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-700/50 to-violet-800/50 text-violet-200 text-xs font-medium border border-violet-600/30 hover:bg-yellow-600 hover:text-violet-900 transition-colors cursor-default flex items-center gap-1"
        >
          {t.toLowerCase().includes("react") && <span className="text-blue-400">⚛️</span>}
          {t.toLowerCase().includes("tailwind") && <span className="text-cyan-400">🎨</span>}
          {t.toLowerCase().includes("mongodb") && <span className="text-green-400">🍃</span>}
          {t.toLowerCase().includes("express") && <span className="text-gray-200">🚀</span>}
          {t.toLowerCase().includes("firebase") && <span className="text-yellow-400">🔥</span>}
          {t}
        </motion.span>
      ));
    })()}

  </div>
        </motion.div>


              {plan && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mb-6"
                >
                  <h3 className="flex items-center gap-2 text-yellow-400 font-semibold text-lg mb-3">
                    Future Plans
                  </h3>
                  <p className="text-violet-100 leading-relaxed bg-slate-800/30 p-3 rounded-lg border border-slate-700/20 text-sm">
                    {plan}
                  </p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex flex-wrap gap-3 mt-auto pt-4"
              >
                <a
                  href={project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px]"
                >
                  <button className="w-full flex items-center justify-center gap-1 py-2 px-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-violet-900 font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-yellow-500/20 text-sm">
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </button>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px]"
                >
                  <button className="w-full flex items-center justify-center gap-1 py-2 px-3 bg-slate-800 border border-slate-700 text-violet-100 font-semibold rounded-lg hover:bg-slate-700 transition-all text-sm">
                    <FaGithub className="text-xs" /> GitHub
                  </button>
                </a>

                <Link to="/" className="flex-1 min-w-[120px]">
                  <button className="w-full flex items-center justify-center gap-1 py-2 px-3 bg-violet-800 border border-violet-700 text-violet-100 font-semibold rounded-lg hover:bg-violet-700 transition-all text-sm">
                    <FaHome className="text-xs" /> Home
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

         {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2  hover:text-yellow-400 transition-colors font-medium text-red-600"
          >
            <FaArrowLeft /> Back
          </button>
        </motion.div>
      </div>

    </div>
  );
};

export default ProDetail;