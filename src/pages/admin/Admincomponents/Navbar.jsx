import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiViewList } from "react-icons/hi";
import { GoXCircle } from "react-icons/go";

function NavbarSec() {
  const [navopen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  return (
    <div className="bg-[#E0EBFD]">
      <div className="md:h-[10vh] h-fit pt-2 md:px-12 lg:px-16 w-[100vw] justify-between flex flex-row shadow-md md:shadow-lg">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/tumeiget.png"
          className="h-[100%]  w-32 md:w-[15%]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-500  justify-center items-center flex mr-8 md:mr-3 text-2xl md:text-base"
        >
          <p className="hidden md:block font-bold border-l-2 border-gray-400 pl-2 rounded-lg hover hover:bg-blue-400 p-3 transition-all hover:text-gray-50 duration-300 text-lg">
            Hello user
          </p>
          {!navopen && (
            <HiViewList onClick={toggleNav} className="md:hidden block" />
          )}
          {navopen && (
            <GoXCircle onClick={toggleNav} className="md:hidden block" />
          )}
        </motion.div>
      </div>
      <ul>
        <li>Home</li>
      </ul>
    </div>
  );
}

export default NavbarSec;
