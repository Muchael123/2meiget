import React, { useEffect, useState } from "react";
import SideBar from "./Admincomponents/SideBar";
import NavbarSec from "./Admincomponents/Navbar";
import Dashboard from "./Admincomponents/Dashboard";
import IdUpload from "./Admincomponents/IdUpload";
import Profile from "./Admincomponents/Profile";
import toast from "react-hot-toast";
import IdPick from "./Admincomponents/IdPick";
function AdminHome() {
  const [userDetails, setUserDeatails] = useState({});
  useEffect(() => {
    fethUserDetails();
  }, []);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [navOpen, setNavOpen] = useState(false);
  if (localStorage.getItem("user") === null) {
    window.location.href = "/Login";
  }
  const fethUserDetails = async () => {
    const response = await fetch("https://tumeiget.vercel.app/account/user/", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("user")}`,
      },
    });
    if (response.ok) {
      const answer = await response.json();
      setUserDeatails(answer);
    } else {
      toast.error("An error occured while fetching user details");
    }
  };

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
    console.log("clicked ", item);
  };
  console.log(userDetails);
  return (
    <div className="w-screen h-screen flex flex-col">
      <NavbarSec
        username={userDetails.username}
        onItemClick={handleSidebarItemClick}
      />
      <div className="flex  flex-row overflow-x-hidden">
        <SideBar onItemClick={handleSidebarItemClick} />
        <div className="w-full flex  justify-normal items-center md:justify-center lg:justify-normal p-4 md:p-8 lg:p-16">
          {selectedItem === "Dashboard" && <Dashboard />}
          {selectedItem === "IdUpload" && <IdUpload />}
          {selectedItem === "IdPick" && <IdPick myStation={userDetails.station.id} />}
          {selectedItem === "Profile" && <Profile userdetails={userDetails} />}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
