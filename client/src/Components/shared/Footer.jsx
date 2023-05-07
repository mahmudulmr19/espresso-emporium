import React from "react";
import Container from "./Container";
import logo from "../../assets/icons/logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-gray-50">
      <Container className="py-4 grid md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-5 lg:gap-0">
        <div className="flex flex-col gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h3 className="text-[#331A15] font-semibold text-lg">
            Espresso Emporium
          </h3>
          <p className="text-gray-900">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Get in Touch</h2>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center text-gray-900 gap-2">
              <BsTelephoneFill />
              <p className="text-gray-900">+88 01533 333 333</p>
            </div>
            <div className="flex items-center text-gray-900 gap-2">
              <HiEnvelope />
              <p className="text-gray-900">info@gmail.com</p>
            </div>
            <div className="flex items-center text-gray-900 gap-2">
              <IoLocationSharp />
              <p className="text-gray-900">72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Subscribe</h2>
          <div className="flex flex-col gap-3 mt-2 items-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="font-light text-sm caret-[#331A15] text-[#331A15] placeholder:text-[#331A15] rounded outline-none px-4 py-2 shadow border border-transparent hover:border-[#331A15] focus:border-[#331A15]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-[#331A15] hover:bg-[#331A15]/90 text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
