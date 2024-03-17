import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiViewList } from "react-icons/hi";
import { GoXCircle } from "react-icons/go";

function NavbarSec({ onItemClick, username }) {
  const [navopen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };
  const HandleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/Login";
  };
  return (
    <div className="bg-[#E0EBFD] shadow-md md:shadow-lg">
      <div className="md:h-[10vh] h-fit pt-2 md:px-12 lg:px-16 w-[100vw] justify-between flex flex-row ">
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
            Hello {username}
          </p>
          {!navopen && (
            <HiViewList onClick={toggleNav} className="md:hidden block" />
          )}
          {navopen && (
            <GoXCircle onClick={toggleNav} className="md:hidden block" />
          )}
        </motion.div>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`flex-col text-lg justify-center divide-y-2 divide-black items-center gap-2 md:hidden ${
          navopen ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            onItemClick("Dashboard");
            setNavOpen(!navopen);
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            onItemClick("IdUpload");
            setNavOpen(!navopen);
          }}
        >
          Add a lost Id
        </button>

        <button
          onClick={() => {
            onItemClick("IdPick");
            setNavOpen(!navopen);
          }}
        >
          Search Id
        </button>
        <button
          onClick={() => {
            onItemClick("Profile");
            setNavOpen(!navopen);
          }}
        >
          View profile
        </button>
        <button
          className="bg-blue-500 hover:scale-105 transition-all duration-300 py-3 rounded-md text-white font-bold hover:bg-blue-400"
          onClick={HandleSignOut}
        >
          Logout
        </button>
      </motion.ul>
    </div>
  );
}

export default NavbarSec;
