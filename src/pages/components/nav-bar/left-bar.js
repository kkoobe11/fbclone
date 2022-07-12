import React from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";

const Leftbar = () => {
  return (
    <div className="flex items-center">
      <NavBarIcon
        icon={
          <FaFacebook size="40" className="cursor-pointer" color="#1b74e4" />
        }
      />
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <FaSearch className="h-6 text-gray-600" />
        <input
          className="md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
          type="text"
          placeholder="Search Facebook"
        ></input>
      </div>
    </div>
  );
};

const NavBarIcon = ({ icon }) => <div className="leftbar-icon">{icon}</div>;

export default Leftbar;
