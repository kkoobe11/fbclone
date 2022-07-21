import React from "react";
import Feedline from "./feedline";
import Inputbuttons from "./inputbuttons";
import Topinput from "./topinput";

const Newpost = () => {
  return (
    <div className="flex flex-col h-36 rounded-lg bg-white mt-4 border p-2 gap-2.5">
      <Topinput />
      <Feedline />
      <Inputbuttons />
    </div>
  );
};

export default Newpost;
