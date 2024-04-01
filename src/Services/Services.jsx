import React from "react";
import businessService from "../assets/iCON.svg";

const Services = () => {
  return (
    <div className="bg-primary pt-[168px] font-raleway">
      <div className="container mx-auto bg-primary">
        <div className="text-center">
          <h2 className="text-orange pb-4 uppercase font-bold text-[31px] font-oxanium">
            services
          </h2>
          <h3 className="font-extrabold capitalize text-[39px] font-raleway">
            our services for you
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="bg-white w-[424px]">
            <img
              className="mx-auto pt-[67px] pb-[29px]"
              src={businessService}
              alt=""
            />
            <h4 className="text-[25px] font-extrabold text-center">
              Business Services
            </h4>
            <div className="mx-auto flex pt-8 justify-center">
              <p className="text-left w-[301px] h-[95px] text-[#7B7A8B]">
                We give you complete reliable delivery for your company. We will
                take full responsibility of the deliveries.
              </p>
            </div>
            <div className="flex justify-center w-[247px] pt-2">
              <ul className="capitalize text-[#7B7A8B]">
                <li className="pt-4">corporate goods</li>
                <li className="pt-4">shipment</li>
                <li className="pt-4">accesories</li>
              </ul>
            </div>
            <button className="capitalize mb-[49px] bg-white mt-[60px] mx-auto rounded-[5px] border font-bold text-[20px] border-solid border-orange font-oxanium flex py-3 w-[301px] justify-center items-center hover:bg-orange hover:text-white">
              learn more
            </button>
          </div>
          <div className="bg-white w-[424px]">
            <img
              className="mx-auto pt-[67px] pb-[29px]"
              src={businessService}
              alt=""
            />
            <h4 className="text-[25px] font-extrabold text-center">
              Business Services
            </h4>
            <div className="mx-auto flex pt-8 justify-center">
              <p className="text-left w-[301px] h-[95px] text-[#7B7A8B]">
                We give you complete reliable delivery for your company. We will
                take full responsibility of the deliveries.
              </p>
            </div>
            <div className="flex justify-center w-[247px] pt-2">
              <ul className="capitalize text-[#7B7A8B]">
                <li className="pt-4">corporate goods</li>
                <li className="pt-4">shipment</li>
                <li className="pt-4">accesories</li>
              </ul>
            </div>
            <button className="capitalize mb-[49px] bg-white mt-[60px] mx-auto rounded-[5px] border font-bold text-[20px] border-solid border-orange font-oxanium flex py-3 w-[301px] justify-center items-center hover:bg-orange hover:text-white">
              learn more
            </button>
          </div>
          <div className="bg-white w-[424px]">
            <img
              className="mx-auto pt-[67px] pb-[29px]"
              src={businessService}
              alt=""
            />
            <h4 className="text-[25px] font-extrabold text-center">
              Business Services
            </h4>
            <div className="mx-auto flex pt-8 justify-center">
              <p className="text-left w-[301px] h-[95px] text-[#7B7A8B]">
                We give you complete reliable delivery for your company. We will
                take full responsibility of the deliveries.
              </p>
            </div>
            <div className="flex justify-center w-[247px] pt-2">
              <ul className="capitalize text-[#7B7A8B]">
                <li className="pt-4">corporate goods</li>
                <li className="pt-4">shipment</li>
                <li className="pt-4">accesories</li>
              </ul>
            </div>
            <button className="capitalize mb-[49px] bg-white mt-[60px] mx-auto rounded-[5px] border font-bold text-[20px] border-solid border-orange font-oxanium flex py-3 w-[301px] justify-center items-center hover:bg-orange hover:text-white">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
