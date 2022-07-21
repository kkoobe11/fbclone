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
import { AiFillGithub, AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";

const Centerbar = () => {
  return (
    <div className="flex">
      <NavBarIcon
        icon={<AiFillGithub size="28" className="cursor-pointer" color="white" />}
      />
      <NavBarIcon
        icon={<AiFillFacebook size="28" className="cursor-pointer" color="white" />}
      />
      <NavBarIcon
        icon={<AiFillTwitterCircle size="28" className="cursor-pointer" color="white" />}
      />

      <NavBarIcon
        icon={<AiFillLinkedin size="28" className="cursor-pointer" color="white" />}
      />
    </div>
  );
};

const NavBarIcon = ({ icon }) => <div className="navbar-icon">{icon}</div>;
export default Centerbar;
