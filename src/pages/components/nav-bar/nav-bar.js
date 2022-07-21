import React from "react";
import Leftbar from "./left-bar";


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
