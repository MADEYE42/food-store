import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {BsFillCartFill,BsGiftFill  } from "react-icons/bs";
import { TbTruckDelivery,TbBrandAppleArcade  } from "react-icons/tb";
import { FaHeart,FaWallet  } from "react-icons/fa";
import { TfiHelp } from "react-icons/tfi";
import { FaL, FaPeoplePulling } from "react-icons/fa6";

const NavBar = () => {
    const [nav,setNav]= useState(true);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 font-[Poppins]">
      <div className="flex items-center">
        <div onClick={()=>setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-1 ">
          Get <span className="font-bold">Fat</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
            <p className="bg-black text-white p-2 rounded-full">Delivery</p>
            <p>Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25}/>
        <input type="text" placeholder="Screw You" className="bg-transparent p-2 focus:outline-none w-full"/>
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill className="mr-2"/>Cart
      </button>
      {nav?<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>:''}
      
      <div className={nav?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className="text-2xl p-4">
        Get <span className="font-bold">Fat</span>
        </h2>
        <nav>
            <ul className="flex flex-col p-4 text-gray-800">
                <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4"/> Orders </li>
                <li className="text-xl py-4 flex"><FaHeart size={25} className="mr-4"/> Favorites </li>
                <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4"/> Wallet </li>
                <li className="text-xl py-4 flex"><TfiHelp size={25} className="mr-4"/> Help </li>
                <li className="text-xl py-4 flex"><BsGiftFill size={25} className="mr-4"/> Best One </li>
                <li className="text-xl py-4 flex"><FaPeoplePulling size={25} className="mr-4"/> Invite Friends </li>
                <li className="text-xl py-4 flex"><TbBrandAppleArcade size={25} className="mr-4"/> Promotions </li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
