import React from "react";
import { motion } from "framer-motion";
function Profile({ userdetails }) {
  return (
    <div className="w-full h-full ">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="px-4 font-semibold tracking-widest text-lg lg:text-3xl md:text-2xl"
      >
        My Profile
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-3 px-4"
      >
        <div className="flex flex-col md:flex-row md:gap-5 gap-2 my-2">
          <div>
            <p>My station</p>
            <div className="rounded-md bg-gray-100 shadow-md px-5 py-3">
              {userdetails?.station?.name || "not set"}
            </div>
          </div>
          <div>
            <p>My Username</p>
            <div className="rounded-md text-blue-500 font-semibold bg-gray-100 shadow-md px-5 py-3">
              {userdetails?.username || "not set"}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 gap-2 my-5 md:my-10">
          <div>
            <p>First name</p>
            <div className="rounded-md bg-gray-100 shadow-md  pl-7 font-semibold pr-12 py-3">
              {userdetails?.firstname || "not set"}
            </div>
          </div>
          <div>
            <p>Last name</p>
            <div className="rounded-md bg-gray-100 shadow-md px-5 py-3">
              {userdetails?.lastname || "not set"}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 gap-2 my-5 md:my-10">
          <div>
            <p>Email</p>
            <div className="rounded-md bg-gray-100 shadow-md  pl-7 font-semibold pr-12 py-3">
              {userdetails?.email || "not set"}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
