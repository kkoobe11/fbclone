import React from "react";
import Centerbar from "./center-bar";


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
