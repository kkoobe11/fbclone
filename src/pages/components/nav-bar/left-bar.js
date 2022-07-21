import React from "react";
import Link from "next/link";

const Leftbar = () => {
  return (
    <div className="flex items-center justify-center gap-3 pl-1 lg:pl-4">
      <Link href="/">
        <div className="flex items-center justify-center w-10 h-12 rounded-lg cursor-pointer hover:bg-gray-700">
          <h1 className="text-3xl font-semibold lg:text-3xl text-kobe">K</h1>
          <h1 className="text-3xl font-semibold text-white lg:text-3xl">B</h1>
        </div>
      </Link>

      <Link href="/about">
        <div className="relative flex items-center justify-center w-20 h-12 font-normal text-white rounded-lg cursor-pointer lg:w-28 hover:bg-gray-700">
          About Me
        </div>
      </Link>

      <Link href="/projects">
        <div className="relative flex items-center justify-center w-20 h-12 font-normal text-white rounded-lg cursor-pointer lg:w-28 hover:bg-gray-700">
          Projects
        </div>
      </Link>

      <Link href="/contact">
        <div className="relative flex items-center justify-center w-20 h-12 font-normal text-white rounded-lg cursor-pointer lg:w-28 hover:bg-gray-700">
          Contact
        </div>
      </Link>
      {/* <div className="flex items-center p-2 ml-2 bg-transparent rounded-full">
        <FaSearch className="h-6 text-gray-600" />
        <input
          className="flex items-center flex-shrink ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex"
          type="text"
          placeholder="Search Facebook"
        ></input>
      </div> */}
    </div>
  );
};

const NavBarIcon = ({ icon }) => <div className="leftbar-icon">{icon}</div>;

export default Leftbar;
