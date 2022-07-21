import React from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import Roomsusers from "./roomsusers";

const contacts = [
  {
    key: 1,
    name: "Vladimir Putin",
    src: "/images/1.png",
    profile: "/images/1.png",
  },
  {
    key: 2,
    name: "Donald Trump",
    src: "/images/2.png",
    profile: "/images/2.png",
  },
  {
    key: 3,
    name: "Jef",
    src: "/images/3.png",
    profile: "/images/3.png",
  },
  {
    key: 4,
    name: "John",
    src: "/images/4.png",
    profile: "/images/4.png",
  },
  {
    key: 5,
    name: "Giovannetta",
    src: "/images/5.png",
    profile: "/images/5.png",
  },
  {
    key: 6,
    name: "Anna",
    src: "/images/1.png",
    profile: "/images/1.png",
  },
  {
    key: 7,
    name: "Mario",
    src: "/images/2.png",
    profile: "/images/2.png",
  },
  {
    key: 8,
    name: "Luigi",
    src: "/images/4.png",
    profile: "/images/4.png",
  },
];

const Roomscomp = () => {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="flex ml-2 items-center rounded-full bg-white p-5 h-9 cursor-pointer border border-blue-100 mr-3 w-1/4">
        <AiFillVideoCamera className="text-blue-500 mr-2"></AiFillVideoCamera>
        <a className="text-blue-500 font-semibold">Create Room</a>
      </div>
      <div className="flex flex-row justify-start w-3/4">
        {contacts.map((contact) => (
          <Roomsusers
            key={contact.key}
            src={contact.profile}
            name={contact.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Roomscomp;
