import React from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import SidebarRow from "../../side-bar/Sidebarcont";
import Button from "./inputbuttoncomp";

const Inputbuttons = () => {
  const button_data = [
    {
      icon: <AiFillVideoCamera className="text-red-500 h-7 w-8" />,
      title: "Live Video",
    },
    {
      icon: <AiFillVideoCamera className="text-green-500 h-7 w-8" />,
      title: "Photo/Video",
    },
    {
      icon: <AiFillVideoCamera className="text-yellow-500 h-10 w-8" />,
      title: "Activity",
    },
  ];

  return (
    <div className="justify-center flex flex-grow ">
      {button_data.map((story) => (
        <Button icon={story?.icon} title={story?.title} />
      ))}

      {/* <NavBarIcon
        icon={
          <AiFillVideoCamera
            size="28"
            className="cursor-pointer"
            color="#f4556f"
          />
        }
      />
      <NavBarIcon
        icon={
          <AiFillVideoCamera
            size="28"
            className="cursor-pointer"
            color="#f4556f"
          />
        }
      />
      <NavBarIcon
        icon={
          <AiFillVideoCamera
            size="28"
            className="cursor-pointer"
            color="#f4556f"
          />
        }
      /> */}
    </div>
  );
};

export default Inputbuttons;
