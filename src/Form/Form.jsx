import React from "react";
import ladyvector from "../assets/Illustration.png";

const Form = () => {
  return (
    <div className="bg-primary pt-[172px] pb-[172px] font-oxanium">
      <div className="w-[872px] mx-auto flex justify-between">
        <div>
          <img src={ladyvector} alt="" />
          <h5 className="font-bold text-2xl text-orange mt-3">
            REQUEST A CALLBACK
          </h5>
          <h4 className="mt-5 text-[#222132] font-extrabold w-[412px] text-[39px]">
            We will contact in the shortest time.
          </h4>
          <p className="text-[#9291A1] font-bold text-2xl mt-2">
            Monday to Friday, 9am-5pm.
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-[423px] h-[49px] rounded-[8px] bg-[#C5C5D2] mt-10"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[423px] h-[49px] rounded-[8px] bg-[#C5C5D2] mt-4"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-[423px] pb-[154px] rounded-[8px] bg-[#C5C5D2] mt-4"
          />
          <div className="mt-[54px]">
            <button className="rounded-[8px] w-[424px] py-3 bg-[#C5C5D2] font-extrabold items-center text-xl hover:bg-orange hover:text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
