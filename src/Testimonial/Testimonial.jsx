import React from "react";
import quote from "../assets/Quote.png";
import rating from "../assets/rating.png";
import avatar from "../assets/Avatar.png";

const Testimonial = () => {
  return (
    <div className="mt-[150px] font-raleway bg-primary pb-12">
      <div className="container mx-auto font-raleway">
        <div className="flex items-center">
          <img
            className="mx-auto justify-center items-center"
            src={quote}
            alt=""
          />
          <div className="text-center mx-auto">
            <h3>TESTIMONIAL</h3>
            <p>Our Awesome Clients</p>
          </div>
        </div>
        <div className="w-[805px] bg-white p-10 mx-auto mt-[90px]">
          <h5 className="text-[25px] pb-2 text-orange font-bold">
            Fantastic service!
          </h5>
          <p className="text-[#464558]">
            I purchased a phone from an e-commerce site, and this courier
            service provider assisted me in getting it delivered to my home. I
            received my phone within one day, and I was really satisfied with
            their service when I received it. They are really quick and
            dependable. They give me with the option of real-time delivery
            status, which allows me to track the progress of my goods delivery.
            I get a lot of questions from call center support and key account
            managers. They come highly recommended. Confidently say that they
            are really reliable.
          </p>
          <div className="flex justify-between pt-7 items-center">
            <div>
              <img src={rating} alt="" />
            </div>
            <div className="flex items-center">
              <div className="pr-2 text-right">
                <h4 className="font-semibold ">Yves Tanguy</h4>
                <p className="text-[#464558]">Chief Executive, DLF</p>
              </div>
              <div>
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
