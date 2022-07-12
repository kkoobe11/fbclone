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

const Centerbar = () => {
  return (
    <div className="flex justify-center flex-grow">
      <NavBarIcon
        icon={<FaHome size="28" className="cursor-pointer" color="#1b74e4" />}
      />
      <NavBarIcon
        icon={<FaTv size="28" className="cursor-pointer" color="#7c7e81" />}
      />
      <NavBarIcon
        icon={<FaTv size="28" className="cursor-pointer" color="#7c7e81" />}
      />

      <NavBarIcon
        icon={<FaStore size="28" className="cursor-pointer" color="#7c7e81" />}
      />
      <NavBarIcon
        icon={
          <FaPeopleArrows
            size="28"
            className="cursor-pointer"
            color="#7c7e81"
          />
        }
      />
    </div>
  );
};

const NavBarIcon = ({ icon }) => <div className="navbar-icon">{icon}</div>;
export default Centerbar;
