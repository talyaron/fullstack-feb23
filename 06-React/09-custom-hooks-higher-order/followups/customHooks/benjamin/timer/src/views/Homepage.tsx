import React from "react";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Timer></Timer>
      <motion.div
      initial={{y:200, opacity:0}}
      animate={{y:8, opacity:1}}
      transition={{duration:1}}
      >
        <Link className=" w-48 h-24 bg-slate-500 rounded-md cursor-pointer hover:bg-slate-300 transition-all ease-in-out hover:text-black" to="/omr">
          Want Your Timer Start Instantly?
        </Link>
      </motion.div>
    </div>
  );
};

export default Homepage;
