import React from "react";
import Feedline from "./feedline";

const Topinput = () => {
  return (
    <div className="flex w-full h-12">
      <div>
        <img
          src="https://picsum.photos/id/1/45"
          className="cursor-pointer rounded-full"
        ></img>
      </div>
      <div className="w-full">
      <div className="flex ml-8 items-center rounded-full bg-gray-100 p-2 h-12 w-10/12">
        <input
          className="md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink w-10/12"
          type="text"
          placeholder="What's on your mind?"
        ></input>
      </div>
    </div>
      </div>

  );
};

export default Topinput;
