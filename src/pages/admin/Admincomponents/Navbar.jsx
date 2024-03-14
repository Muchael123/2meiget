import React from "react";

function NavbarSec() {
  return (
    <div className="h-[10vh] md:px-12 lg:px-16 w-[100vw] justify-between flex flex-row bg-[#E0EBFD] shadow-md md:shadow-lg">
      <img src="/tumeiget.png" className="h-[100%] w-[15%]" />
      <div className="text-gray-500  justify-center items-center flex">
        <p className="font-bold border-l-2 border-gray-400 pl-2 rounded-lg hover hover:bg-blue-400 p-3 transition-all hover:text-gray-50 duration-300 text-lg">
          Hello user
        </p>
      </div>
    </div>
  );
}

export default NavbarSec;
