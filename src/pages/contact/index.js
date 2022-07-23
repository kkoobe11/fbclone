import React from "react";
import Footer from "../components/nav-bar/footer";
import Navbar from "../components/nav-bar/nav-bar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center pt-[5rem] overflow-y-auto lg:h-screen lg:pt-0 lg:items-center bg-mainbg h-[63rem] sm:h-screen select-none pb-[5rem]">
        <div className=" absolute lg:flex flex-row gap-2 items-center justify-center w-11/12 text-white h-[25rem] rounded-xl ">
          <div className="flex flex-col items-center justify-start h-full gap-5 text-center lg:text-start lg:p-8 lg:w-screen">
            <div className="flex justify-center w-full pt-5 font-sans text-3xl text-center text-white lg:pt-0 lg:text-5xl lg:justify-center">
              Contact me!
            </div>
            <div className="flex lg:flex-row flex-col gap-7 pt-5">
              <div className=" pt-5 flex justify-center w-full font-sans text-2xl lg:text-3xl lg:justify-start border p-5 bg-topblack rounded-lg">
                <div className="flex flex-col">
                  <div className="font-bold">Give me a call:</div>
                  <div className="font-normal">0999 090 343</div>
                </div>
              </div>
              <div className=" pt-5 flex justify-center w-full font-sans text-2xl lg:text-3xl lg:justify-start border p-5 bg-topblack rounded-lg">
                <div className="flex flex-col">
                  <div className="font-bold">send me an e-mail:</div>
                  <div className="font-normal">bantes.kobe@gmail.com</div>
                </div>
              </div>
              <div className=" pt-5 flex justify-center w-full font-sans text-2xl lg:text-3xl lg:justify-start border p-5 bg-topblack rounded-lg">
                <div className="flex flex-col">
                  <div className=" font-bold">Address:</div>
                  <div className="font-normal">Taguig City, Metro Manila</div>
                </div>
              </div>
            </div>

            {/* <div className="pt-5 w-full border">
              <form>
                <div className="flex flex-col">
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
