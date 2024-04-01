import React from "react";
import location from "../assets/Map.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FindUs = () => {
  return (
    <div className="container bg-red-200 mx-auto font-oxanium pb-[150px]">
      <div className="text-center">
        <h3 className="uppercase text-orange font-bold text-[31px]">find us</h3>
        <h3 className="font-extrabold capitalize font-raleway text-[39px] text-[#261134]">
          access us easily
        </h3>
      </div>
      <div className="flex mt-[85px] justify-between">
        <div className="">
          <img src={location} alt="" />
        </div>
        <div className="w-[536px] bg-white pt-[81px] pl-[88px]">
          <h3 className="font-bold text-xl font-raleway text-[#464558]">
            cantact with us
          </h3>
          <ul className="text-[#5C5B6C] font-raleway leading-5 pt-9">
            <li className="mt-4 items-center flex">
              <FaLocationDot className="inline-flex mr-3 text-[#FFAF0F]" />
              2277 Lorem Ave, San Diego, CA 22553
            </li>
            <li className="mt-4 items-center flex">
              <CiClock2 className="inline-flex mr-3 text-[#FFAF0F]" />
              Monday - Friday: 10 am - 10pm <br /> Sunday: 11 am - 9pm
            </li>
            <li className="mt-4 items-center flex">
              <FaRegMessage className="inline-flex mr-3 text-[#FFAF0F]" />
              info@quriarbox.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[25px]">
        <button className="mx-auto flex items-center w-[560px] py-6 px-[112px] rounded-[16px] justify-center font-bold text-xl text-white bg-orange"><IoCall className="mr-2"/>Call us to delivery  123-456789</button>
      </div>
    </div>
  );
};

export default FindUs;
