import React from "react";
import quote from "../assets/Quote.png";

const Testimonial = () => {
  return (
    <div className="mt-[150px] bg-primary">
      <div className="container mx-auto font-raleway">
        <div className="flex items-center">
          <img className="absolute mx-auto justify-center items-center" src={quote} alt="" />
          <div className="text-center mx-auto">
            <h3>TESTIMONIAL</h3>
            <p>Our Awesome Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
