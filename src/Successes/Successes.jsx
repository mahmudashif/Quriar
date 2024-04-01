import React from "react";
import award from "../assets/LINE---COLOR.png";
import state from "../assets/IconSpace_Map_24Px.png";
import happyClient from "../assets/iconspace_Man_25px.png";
import delivary from "../assets/delivery.png";
import businessHour from "../assets/businessHour.png";

const Successes = () => {
  return (
    <div className="container mx-auto font-raleway flex justify-between pt-[180px]">
      <div className="text-center w-[180px]">
        <img
          className="flex mx-auto h-[67.5px] w-[67.5px]"
          src={award}
          alt=""
        />
        <h3 className="text-orange font-extrabold text-[39px] pt-7">26+</h3>
        <p className="text-[#464558] text-[20px] font-bold pt-[6px]">
          awards won
        </p>
      </div>
      <div className="text-center w-[180px]">
        <img
          className="flex mx-auto h-[67.5px] w-[67.5px]"
          src={state}
          alt=""
        />
        <h3 className="text-orange font-extrabold text-[39px] pt-[28px]">
          65+
        </h3>
        <p className="text-[#464558] text-[20px] font-bold pt-[6px]">
          States covered
        </p>
      </div>
      <div className="text-center w-[180px]">
        <img
          className="flex mx-auto h-[67.5px] w-[67.5px]"
          src={happyClient}
          alt=""
        />
        <h3 className="text-orange font-extrabold text-[39px] pt-[28px]">
          689k+
        </h3>
        <p className="text-[#464558] text-[20px] font-bold pt-[6px]">
          Happy client
        </p>
      </div>
      <div className="text-center w-[180px]">
        <img
          className="flex mx-auto h-[67.5px] w-[67.5px]"
          src={delivary}
          alt=""
        />
        <h3 className="text-orange font-extrabold text-[39px] pt-[28px]">
          130M+
        </h3>
        <p className="text-[#464558] text-[20px] font-bold pt-[6px]">
          Goods delivered
        </p>
      </div>
      <div className="text-center w-[180px]">
        <img
          className="flex mx-auto h-[67.5px] w-[67.5px]"
          src={businessHour}
          alt=""
        />
        <h3 className="text-orange font-extrabold text-[39px] pt-7">130M+</h3>
        <p className="text-[#464558] text-[20px] font-bold pt-[6px]">
          Business hours
        </p>
      </div>
    </div>
  );
};

export default Successes;
