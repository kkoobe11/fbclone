import React from "react";
import Footer from "../components/nav-bar/footer";
import Navbar from "../components/nav-bar/nav-bar";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-screen pt-[5rem] overflow-y-auto lg:h-screen lg:pt-0 lg:items-center bg-mainbg h-[69rem]">
        <div className=" absolute lg:flex flex-row gap-2 items-center justify-center w-11/12 text-white h-[25rem] rounded-xl ">
          <div className="flex flex-col items-start justify-start h-full gap-0 text-center lg:text-start lg:p-8 lg:w-1/2">
            <div className="flex justify-center w-full pt-5 font-sans text-3xl text-center text-white lg:pt-0 lg:text-5xl lg:justify-start">
              Jr Software Engineer
            </div>
            <div className="flex justify-center w-full font-sans text-3xl lg:text-5xl text-kobe lg:justify-start">Kobe Priam Bantes</div>
            <div className="flex pt-4 font-sans text-base text-white lg:text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="flex justify-center h-full pt-12 lg:items-start lg:w-1/2 md:pt-0">
            <div>        <Image
          className="rounded-3xl"
          objectFit="cover"
          src="/images/grad.png"
          width={300}
          height={400}
          layout="fixed"
          alt=""
        /></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // <div className="flex h-screen overflow-hidden">
    //   <Navbar></Navbar>
    //   <div className="flex justify-center w-screen h-full align-center">heh</div>
    //   <Footer></Footer>
    // </div>
  );
};

export default About;
