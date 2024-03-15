import React from "react";
import { motion } from "framer-motion";
function Dashboard() {
  return (
    <div className="w-full h-full ">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="px-4 font-semibold tracking-widest text-lg lg:text-3xl md:text-2xl"
      >
        My Dashboard
      </motion.h1>
      <div className="grid grid-cols-2 lg:gap-8 gap-4 md:gap-6 pt-20 lg:grid-cols-3 justify-evenly">
        <div className="bg-red-500  hover:cursor-pointer hover:scale-105 transition-all duration-300 flex rounded-2xl justify-center items-center flex-col lg:py-8">
          <p className="text-white text-2xl tracking-widest md:text-5xl ">20</p>
          <h1>Found Ids</h1>
        </div>
        <div className="bg-red-500 hover:cursor-pointer hover:scale-105 transition-all duration-300 flex rounded-2xl justify-center items-center flex-col lg:py-8">
          <p className="text-white text-2xl tracking-widest md:text-5xl  ">
            20
          </p>
          <h1>Found Ids</h1>
        </div>
        <div className="bg-red-500 hover:cursor-pointer hover:scale-105 transition-all duration-300 flex rounded-2xl justify-center items-center flex-col lg:py-8">
          <p className="text-white text-2xl tracking-widest md:text-5xl ">20</p>
          <h1>Found Ids</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
