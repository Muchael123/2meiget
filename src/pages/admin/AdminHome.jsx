import React, { useEffect, useState } from "react";
import SideBar from "./Admincomponents/SideBar";
import NavbarSec from "./Admincomponents/Navbar";
import Dashboard from "./Admincomponents/Dashboard";
import IdUpload from "./Admincomponents/IdUpload";
import Profile from "./Admincomponents/Profile";
function AdminHome() {
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      window.location.href = "/Login";
    }
    console.log(localStorage.getItem("user"), "user");
  });
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [navOpen, setNavOpen] = useState(false);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    console.log("clicked ", item);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavbarSec onItemClick={handleSidebarItemClick} />
      <div className="flex  flex-row overflow-x-hidden">
        <SideBar onItemClick={handleSidebarItemClick} />
        <div className="w-full flex justify-normal items-center md:justify-center lg:justify-normal p-4 md:p-8 lg:p-16">
          {selectedItem === "Dashboard" && <Dashboard />}
          {selectedItem === "IdUpload" && <IdUpload />}
          {selectedItem === "Profile" && <Profile />}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
