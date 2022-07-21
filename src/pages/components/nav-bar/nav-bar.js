import React from "react";
import Centerbar from "./center-bar";
import Leftbar from "./left-bar";
import Rightbar from "./right-bar";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center h-16 shadow bg-topblack ">
      <div className="items-center justify-start w-screen mx-3 lg:flex">
        <Leftbar />
      </div>
    </div>
  );
};

export default Navbar;
