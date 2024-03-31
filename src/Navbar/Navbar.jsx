import React from "react";
import logo from "../assets/Logo.png";
import search from "../assets/Search.png"

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <div>
          <ul className="flex font-raleway pr-[45px] gap-6 text-[16px] capitalize font-bold">
            <li className="hover:text-[#F95C19] hover:font-extrabold">home</li>
            <li className="hover:text-[#F95C19] hover:font-extrabold">our service</li>
            <li className="hover:text-[#F95C19] hover:font-extrabold">about us</li>
            <li className="hover:text-[#F95C19] hover:font-extrabold">what's new?</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img src={search} alt="search button" />
          <button className="px-5 py-3 bg-[#FFE4D9] rounded-[5px] font-oxanium text-[20px] font-bold text-[#F95C19]">contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
