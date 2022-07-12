import React from "react";
import Feedline from "./feedline";
import Inputbuttons from "./inputbuttons";
import Topinput from "./topinput";

const Newpost = () => {
  return (
    <div className="flex flex-col w-12/12 h-36 rounded-lg bg-white mt-4 border pt-3 pl-5 gap-2.5">
      <Topinput />
      <Feedline />
      <Inputbuttons />
    </div>
  );
};

export default Newpost;
