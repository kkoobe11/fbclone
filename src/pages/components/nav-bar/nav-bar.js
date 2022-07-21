import React from "react";
import Leftbar from "./left-bar";


const Navbar = () => {
  return (
    <div className="fixed top-0 flex items-center h-16 shadow bg-topblack ">
      <div className="flex items-center justify-center w-screen mx-3 lg:justify-start lg:flex">
        <Leftbar />
      </div>
    </div>
  );
};

export default Navbar;
