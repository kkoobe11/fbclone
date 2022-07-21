import React from "react";
import Centerbar from "./center-bar";
import Leftbar from "./left-bar";
import Rightbar from "./right-bar";

const Footer = () => {
  return (
    <div className="sticky bottom-0 flex items-center h-16 shadow bg-topblack ">
      <div className="items-center justify-center w-full mx-3 lg:flex">
        <Centerbar />
      </div>
    </div>
  );
};

export default Footer;
