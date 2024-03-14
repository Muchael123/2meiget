import React, { useEffect } from "react";
import SideBar from "./Admincomponents/SideBar";
import NavbarSec from "./Admincomponents/Navbar";
function AdminHome() {
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      window.location.href = "/Login";
    }
    console.log(localStorage.getItem("user"), "user");
  },);
  return (
    <div className="w-screen h-screen flex flex-col">
      <NavbarSec />
      <div className="flex flex-row flex-1">
        <SideBar />
        <div className="w-full">
          <h1 className="text-3xl text-center">Welcome to Admin Panel</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
