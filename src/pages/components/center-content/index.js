import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen pb-40 text-white">
      <div className="flex items-center justify-center rounded-lg opacity-75 w-96 h-96 bg-zinc-700 lg:w-1/3">
      </div>
      <div className="absolute items-center justify-center text-center opacity-100">
        <Image
          className="rounded-full"
          objectFit="cover"
          src="/images/mdk.png"
          width={200}
          height={200}
          layout="fixed"
          alt=""
        />
        <div className="flex items-center justify-center pt-2">
        <h1 className="text-4xl font-semibold lg:text-5xl text-kobe">R</h1>
        <h1 className="text-4xl font-semibold lg:text-5xl">in</h1>
        </div>
        <h1 className="text-xl font-normal lg:text-xl">Junior Software Engineer</h1>
        </div>
    </div>
  );
};

export default Content;
