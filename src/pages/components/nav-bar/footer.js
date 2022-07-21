import React from "react";
import Centerbar from "./center-bar";


const Footer = () => {
  return (
    <div className="fixed bottom-0 flex items-center w-full shadow bg-topblack">
      <div className="items-center justify-center w-full pt-4 pb-4 mx-3 lg:flex md:pb-0 sm:pt-2">
        <Centerbar />
      </div>
    </div>
  );
};

export default Footer;
