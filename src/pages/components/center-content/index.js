import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="flex items-center justify-center w-screen h-full text-white">
      <div className="flex items-center justify-center w-9/12 rounded-lg opacity-75 h-96 bg-zinc-700 lg:w-1/2 xl:w-1/3"></div>
      <div className="absolute text-center opacity-100 select-none">
        <Image
          className="rounded-full "
          objectFit="cover"
          src="/images/kobe.png"
          width={200}
          height={200}
          layout="fixed"
          alt=""
        />
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold transition lg:text-5xl text-kobe">
            K
          </h1>
          <h1 className="text-3xl font-semibold lg:text-5xl">
            obe Priam Bantes
          </h1>
        </div>
        <h1 className="text-xl font-normal lg:text-2xl">
          Junior Software Engineer
        </h1>
      </div>
    </div>
  );
};

export default Content;
