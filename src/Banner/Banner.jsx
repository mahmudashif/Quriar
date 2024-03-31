import React from "react";
import banner from "../assets/banner.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="pl-[293px] absolute flex pt-[170px] font-raleway">
      <div className="pt-[170px] relative">
        <h1 className="text-[49px] w-[516px]">
          A trusted provider of{" "}
          <span className="font-extrabold">courier services.</span>
        </h1>
        <p className="text-[20px] w-[330px] text-[#4D4D4D] mt-4">
          We deliver your products safely to your home in a reasonable time.
        </p>
        <button className="text-[20px] px-5 py-3 bg-[#F95C19] rounded-[5px] mt-10 font-extrabold capitalize font-oxanium">
          get started<FaArrowRight className="inline ml-3 text-[20px]" />
        </button>
      </div>
      <div className="flex justify-end">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
