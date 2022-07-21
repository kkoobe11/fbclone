import React from "react";
import Centerbar from "./center-bar";


const Footer = () => {
  return (
    <div className="fixed bottom-0 flex items-center w-full h-24 shadow bg-topblack ">
      <div className="items-center justify-center w-full mx-3 lg:flex">
        <Centerbar />
      </div>
    </div>
  );
};

export default Footer;
