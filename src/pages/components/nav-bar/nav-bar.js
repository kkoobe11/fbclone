import React from "react";
import Centerbar from "./center-bar";
import Leftbar from "./left-bar";
import Rightbar from "./right-bar";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-16 flex items-center bg-white shadow ">
      <div className="hidden lg:flex w-1/3 mx-3 justify-start items-center">
        <Leftbar />
      </div>
      <div className="flex flex-grow w-1/3 justify-center mr-0 lg:mr-40">
        <Centerbar />
      </div>
      <div className="hidden lg:flex w-1/3 justify-end">
        <Rightbar />
      </div>
    </div>
  );
};

export default Navbar;
