import React, { useEffect, useState, FC } from "react";
import useTimer from "../hooks/useTimer";
import { motion } from "framer-motion";

const Timer = () => {
  const { timer, start, stop, reset } = useTimer();
  const [bgColor, setBgColor] = useState<string>("white");
  const formattedTime = new Date(timer).toISOString().slice(14, 22);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBgColor("white");
    }, 500);
  }, [bgColor]);

  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <p className=" text-7xl text-neutral-50 font-bold mb-8">
          MY FABOLOUS <span className=" text-teal-500">COUNTER.</span>
        </p>
        <p className="text-3xl text-neutral-50 font-bold mb-8">ON <span className=" text-teal-500">MOUNT!</span></p>
      </motion.div>

      <div className=" flex flex-row justify-center items-center w-full h-full">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className=" flex flex-col w-96 h-96 bg-slate-950 justify-around items-center rounded-xl">
            <div
              style={{ backgroundColor: bgColor }}
              className=" w-80 h-20 text-6xl text-gray-950 font-mono font-extrabold rounded-lg transition-all ease-in-out"
            >
              {formattedTime}
            </div>
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <button
                className=" w-32 h-14 bg-slate-300 rounded-lg hover:bg-teal-100 text-gray-950 font-mono font-extrabold active:scale-110 transition-all ease-in-out"
                onClick={start}
                onMouseDown={() => {
                  setBgColor("green");
                }}
              >
                START
              </button>
            </motion.div>
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <button
                className=" w-32 h-14 bg-slate-300 rounded-lg hover:bg-teal-100 text-gray-950 font-mono font-extrabold active:scale-110 transition-all ease-in-out"
                onClick={stop}
                onMouseDown={() => {
                  setBgColor("red");
                }}
              >
                STOP
              </button>
            </motion.div>
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <button
                className=" w-32 h-14 bg-slate-300 rounded-lg hover:bg-teal-100 text-gray-950 font-mono font-extrabold active:scale-110 transition-all ease-in-out"
                onClick={reset}
                onMouseDown={() => {
                  setBgColor("grey");
                }}
              >
                RESET
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Timer;
