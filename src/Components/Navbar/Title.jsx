import { div } from "framer-motion/client";
import { easeInOut } from "motion";
import { motion } from "motion/react";
const Title = ({ title }) => {
  return (
    <div className="md:w-full w-11/12 my-8 flex  justify-center items-center mx-auto">
      <motion.h2
        animate={{ color: ["#f5cb42", "#eff542", "#e6f542"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-2xl pb-5 border-b-2 border-yellow-200 w-full md:w-[400px] mx-auto md:text-5xl text-center py-3 font-bold"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default Title;
