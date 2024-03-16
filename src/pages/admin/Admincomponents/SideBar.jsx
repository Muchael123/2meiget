import React from "react";
import { FaBookOpenReader, FaUser } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

function SideBar({ onItemClick }) {
  const HandleSignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location.href = "/Login";
  };
  return (
    <div className="lg:w-1/4 md:w-1/5 lg:px-5 bg-gray-200 h-[90vh]  md:flex flex-col justify-evenly hidden border-t-2  shadow-lg border-gray-400">
      <div className="md:gap-3 gap-5 p-5 md:p-2 flex flex-col justify-start">
        <button
          onClick={() => onItemClick("Dashboard")}
          className="flex flex-row px-2 items-center justify-center gap-5 bg-gray-100 py-4 rounded-xl shadow-lg"
        >
          <FaBookOpenReader />
          <p>Dashboard</p>
        </button>
        <button
          onClick={() => onItemClick("IdUpload")}
          className="flex  flex-row items-center justify-center gap-5 bg-gray-100 py-4 rounded-xl shadow-lg"
        >
          <IoIosAddCircle size={26} />
          <p>Add lost ID</p>
        </button>
        <button
          onClick={() => onItemClick("Profile")}
          className="flex  flex-row items-center justify-center gap-5 bg-gray-100 py-4 rounded-xl shadow-lg"
        >
          <FaUser />
          <p>View Profile</p>
        </button>
      </div>
      <button
        className=" bg-blue-500 mx-[6%] hover:scale-105 transition-all duration-300 py-3 rounded-lg text-white font-bold hover:bg-blue-400"
        onClick={HandleSignOut}
      >
        Logout
      </button>
    </div>
  );
}

export default SideBar;
