import React from "react";

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import {
  FaFire,
  FaHome,
  FaPeopleArrows,
  FaPoo,
  FaStore,
  FaTv,
} from "react-icons/fa";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Centerbar = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex justify-end">
        Stay connected with me!
      </div>
    <div className="flex">
      <div
        className="relative flex items-center justify-center w-20 h-12 mx-auto mt-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-700"
        onClick={() => window.open("https://github.com/kkoobe11", "_blank")}
      >
        <AiFillGithub size="28" className="cursor-pointer" color="white" />
      </div>
      <div
        className="relative flex items-center justify-center w-20 h-12 mx-auto mt-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-700"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/kobe-priam-bantes-b6a8ba225/",
            "_blank"
          )
        }
      >
        <AiFillLinkedin size="28" className="cursor-pointer" color="white" />
      </div>
      <div
        className="relative flex items-center justify-center w-20 h-12 mx-auto mt-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-700"
        onClick={() =>
          window.open("https://www.facebook.com/kobepriam.bantes/", "_blank")
        }
      >
        <AiFillFacebook size="28" className="cursor-pointer" color="white" />
      </div>
      <div
        className="relative flex items-center justify-center w-20 h-12 mx-auto mt-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-700"
        onClick={() => window.open("https://twitter.com/rinririn0", "_blank")}
      >
        <AiFillTwitterCircle
          size="28"
          className="cursor-pointer"
          color="white"
        />
      </div>
    </div>
    </div>
  );
};
const NavBarIcon = ({ icon }) => <div className="navbar-icon">{icon}</div>;

export default Centerbar;
