import Logo from "../../public/logo.svg";
import Google from "../../public/google.svg";
import Image from "next/image";
import Link from "next/link";
import Search from "../../public/search.svg";

import RoundedButton from "../UI/RoundedButton";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import NavList from "./NavList";

const Nav = () => {
  return (
    <nav className="h-16 sm:h-20 w-full bg-gray-700 flex items-center sm:px-6 px-4 bg-white shadow-sm fixed top-0 z-30">
      <Link href="/">
        <div className="flex flex-row items-center cursor-pointer">
          <div className="w-7 sm:w-8">
            <Image src={Logo} />
          </div>
          <div className="text-md sm:text-xl font-poppins ml-3 font-bold text-black">
            MovList
          </div>
        </div>
      </Link>

      <NavList />

      <div className="flex items-center ml-auto">
        <div className="w-6 h-6 sm:w-8 sm:h-8 relative mr-4 cursor-pointer">
          <Image src={Search} layout="fill" />
        </div>

        <RoundedButton>
          <span className="w-4 h-4  mr-2 relative">
            <Image src={Google} layout="fill" />
          </span>
          Sign in
        </RoundedButton>
      </div>

      {/*Hamburger*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-6 sm:h-10 sm:w-10"
        fill="white"
        viewBox="0 0 24 24"
        stroke="black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  );
};

export default Nav;
