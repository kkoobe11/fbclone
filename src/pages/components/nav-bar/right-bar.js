import React from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaBell,
  FaUserAlt,
  FaGripVertical,
} from "react-icons/fa";

const Rightbar = () => {
  return (
    <div className="flex items-center sm:space-x-2 justify-end mx-4">
      <NavBarIcon
        icon={
          <FaGripVertical
            size="18"
            className="cursor-pointer"
            color="#050505"
          />
        }
      />
      <NavBarIcon
        icon={
          <FaFacebookMessenger
            size="18"
            className="cursor-pointer"
            color="#050505"
          />
        }
      />
      <NavBarIcon
        icon={<FaBell size="18" className="cursor-pointer" color="#050505" />}
      />
      {/* <NavBarIcon
        icon={
          <FaUserAlt size="28" className="cursor-pointer" color="#1b74e4" />
        }
      /> */}

      <div>
      <img src="https://picsum.photos/id/1/40" className="cursor-pointer rounded-full" />
      <div className="absolute top-2.5 right-4 bg-red-700 h-3 w-3 rounded-full border "/>
      </div>
      
    </div>
  );
};

const NavBarIcon = ({ icon }) => <div className="rightbar-icon">{icon}</div>;

export default Rightbar;
