import React from "react";
import Stories from "../story/stories";
import NewPost from "../input/input";
import Rooms from "../rooms/rooms";

const Feed = () => {
  return (
    <div
      className="flex-grow h-screen pb-44 pt-6 
         overflow-y-auto scrollbar-hide"
    >
      <div
        className="mx-auto max-w-md md:max-w-lg 
            lg:max-w-2xl"
      >
        <Stories />
        {/* <InputBox/> */}
        <NewPost />
        <Rooms />
      </div>
    </div>
  );
};
export default Feed;
