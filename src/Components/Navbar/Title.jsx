import { div } from "framer-motion/client";
import { easeInOut } from "motion";
import { motion } from "motion/react";
const Title = ({ title }) => {
  return (
    <div>
      <motion.h2
        animate={{ color: ["#f5cb42", "#eff542", "#e6f542"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-3xl border-b border-yellow-200 w-[400px] mx-auto md:text-5xl text-center py-3 font-bold"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default Title;
