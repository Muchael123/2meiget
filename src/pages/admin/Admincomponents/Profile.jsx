import React from "react";
import { motion } from "framer-motion";
function Profile() {
  return (
    <motion.div className="w-full h-full ">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="px-4 font-semibold tracking-widest text-lg lg:text-3xl md:text-2xl"
      >
        My Profile
      </motion.h1>
    </motion.div>
  );
}

export default Profile;
