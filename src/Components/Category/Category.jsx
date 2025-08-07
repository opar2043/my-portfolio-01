import Title from "../Navbar/Title";
import { motion } from "framer-motion";
import { FaCarAlt } from "react-icons/fa";
import { FaReact, FaWordpress } from "react-icons/fa6";

const technologies = [
  {
    title: "MERN Stack",
    description: "Full-stack web applications with MongoDB, Express, React, and Node.js",
    icon: <FaReact className="text-4xl text-blue-400" />,
    features: ["Custom APIs", "User Authentication", "Real-time Data", "Admin Dashboard"],
    color: "from-blue-500/10 to-blue-800/10"
  },
  {
    title: "WordPress",
    description: "Professional websites with WordPress CMS",
    icon: <FaWordpress className="text-4xl text-blue-700" />,
    features: ["WooCommerce", "Custom Themes", "Responsive Design","SEO Optimization"],
    color: "from-blue-700/10 to-blue-900/10"
  },
  {
    title: "eCommerce ",
    description: "WooCommerce and custom eCommerce in MERN Stack",
    icon: <FaCarAlt className="text-4xl text-yellow-400" />,
    features: ["Product Management", "Payment Gateways", "Order Tracking", "Responsive Design"],
    color: "from-yellow-500/10 to-yellow-700/10"
  }
];

const Category = () => {
  return (
    <div id="category" className="py-12 px-4 md:px-8 lg:px-16">
      <Title head={"Service"}></Title>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-xl md:text-2xl font-semibold my-6 text-yellow-300"
      >
        I Can Build Custom Solutions Tailored to Your Needs
      </motion.h2>

      {/* Technology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 border border-yellow-400/30 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-black/20 backdrop-blur-sm">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-yellow-300">{tech.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{tech.description}</p>
            
            <ul className="space-y-2 mb-6">
              {tech.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 rounded-lg border border-yellow-400/50 transition-all duration-300"
            >
              Get {tech.title} Service
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Website Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >


      </motion.div>
    </div>
  );
};

export default Category;