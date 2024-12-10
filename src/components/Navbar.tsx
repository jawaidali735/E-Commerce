import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="overflow-hidden max-w-full mx-auto h-auto lg:h-[44px] bg-[#7E33E0] flex flex-col md:flex-row items-center">

      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-16 font-josefin text-[14px] md:text-[16px] text-white pt-2 md:gap-10">
        <div className="flex gap-6 md:gap-10 items-center">
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <span className="text-[12px] md:text-[16px]">Jawaidali0735@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="text-[12px] md:text-[16px]">(+923156520735)</span>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-center md:justify-end items-center w-full px-4 md:px-16 font-josefin text-[14px] md:text-[16px] text-white gap-4 md:gap-6 mt-2 md:mt-0">
        <select className="bg-transparent border-none outline-none text-white cursor-pointer">
          <option value="English">English</option>
        </select>
        <select className="bg-transparent border-none md:pr-2 outline-none text-white cursor-pointer">
          <option value="USD">USD</option>
        </select>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Login</span>
          <GoPerson />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Wishlist</span>
          <CiHeart />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>Cart</span>
          <PiShoppingCartSimple />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
