import React from "react";
import Link from "next/link";
import {
  FaUserFriends,
  FaStore,
  FaFirstOrder,
  FaFoursquare,
  FaConnectdevelop,
} from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { BsCollectionPlayFill, BsArrowDownCircle } from "react-icons/bs";
import Line from "./line";
import SidebarRow from "./Sidebarcont";

const Sidebar = () => {
  return (
    <div className="hidden lg:block p-1.5 max-w-[600px] xl:min-w-[300px] h-screen pb-44 hover:overflow-y-auto">
      <div className="relative flex items-center justify-start h-16 px-2 gap-x-2 mx-1.5 bg-primary hover:bg-gray-200 cursor-pointer rounded-lg">
        <img
          src="https://picsum.photos/id/1/35"
          className="cursor-pointer rounded-full"
        ></img>
        <div className="text-center font-semibold">
          <a>Kobe Priam Bantes</a>
        </div>
      </div>
      <SidebarRow Icon={FaUserFriends} title="Friends" />
      <SidebarRow Icon={HiUserGroup} title="Groups" />
      <SidebarRow Icon={FaStore} title="Marketplace" />
      <SidebarRow Icon={BsCollectionPlayFill} title="Watch" />
      <SidebarRow Icon={IoMdTimer} title="Memories" />
      <SidebarRow Icon={BsArrowDownCircle} title="See More" />
      <Line />
      <p className="pl-2 pt-2 font-semibold text-gray-500">Your Shortcuts</p>
      <SidebarRow Icon={FaConnectdevelop} title="Class Group" />
      <SidebarRow Icon={FaFoursquare} title="Memes Group" />
      <SidebarRow Icon={FaFirstOrder} title="Progmmers Codeposting" />
      <SidebarRow Icon={IoMdTimer} title="Buy and sell group" />
      <SidebarRow Icon={BsArrowDownCircle} title="See More" />
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
};

export default Sidebar;
