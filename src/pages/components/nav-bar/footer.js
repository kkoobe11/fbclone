import React from "react";
import Centerbar from "./center-bar";

const Footer = () => {
  return (
    <div className="fixed bottom-0 items-center w-full bg-topblack z-49">
      <div className="items-center justify-center w-full pt-0 pb-3 lg:flex md:pb-0 sm:pt-2">
        <Centerbar />
      </div>
    </div>
  );
};

export default Footer;
