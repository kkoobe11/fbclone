import React from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import Button from "./inputbuttoncomp";

const Inputbuttons = () => {
  const button_data = [
    {
      key: 1,
      icon: <AiFillVideoCamera className="text-red-500 h-7 w-8" />,
      title: "Live Video",
    },
    {
      key: 2,
      icon: <BiPhotoAlbum className="text-green-500 h-7 w-8" />,
      title: "Photo/Video",
    },
    {
      key: 3,
      icon: <VscSmiley className="text-yellow-500 h-10 w-8" />,
      title: "Feeling/Activity",
    },
  ];

  return (
    <div className="justify-center flex flex-grow ">
      {button_data.map((story) => (
        <Button Icon={story?.icon} title={story?.title} />
      ))}
    </div>
  );
};

export default Inputbuttons;
