import React from "react";
import TimerOnMount from "../components/TimerOnMount";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OnMountTimer = () => {
  return (
    <div className=" flex flex-col items-center justify-center">       
          <TimerOnMount></TimerOnMount>
        <motion.div
      initial={{y:200, opacity:0}}
      animate={{y:8, opacity:1}}
      transition={{duration:1}}
      >
        <Link className=" w-48 h-24 bg-slate-500 rounded-md cursor-pointer hover:bg-slate-300 transition-all ease-in-out hover:text-black" to="/">
          Want to get back to the normal counter?
        </Link>
      </motion.div>
    </div>
  );
};

export default OnMountTimer;
