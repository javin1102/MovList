import Logo from "../../public/logo.svg";
import Google from "../../public/google.svg";
import Image from "next/image";
import Link from "next/link";
import Search from "../../public/search.svg";

import RoundedButton from "../UI/RoundedButton";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import NavList from "./NavList";
import SearchBar from "../UI/SearchBar";

const Nav = () => {
  return (
    <nav className="h-16 sm:h-20 lg:h-24 w-full bg-gray-700 flex items-center sm:px-6 px-4 bg-white shadow-md fixed top-0 z-30 lg:px-12">
      {/*Nav Brand*/}
      <Link href="/">
        <div className="flex flex-row items-center cursor-pointer">
          <div className="w-7 sm:w-10 lg:w-12">
            <Image src={Logo} />
          </div>
          <div className="text-md sm:text-2xl lg:text-4xl font-poppins ml-3 font-bold text-black">
            MovList
          </div>
        </div>
      </Link>

      <NavList />

      <div className="flex items-center ml-auto lg:flex-1 ">
        {/*Search Image for mobile*/}
        <div className="w-6 h-6 sm:w-8 sm:h-8 relative mr-4 cursor-pointer lg:hidden">
          <Image src={Search} layout="fill" />
        </div>

        <SearchBar />

        {/*Google Login Button*/}
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
        className="h-6 w-6 ml-6 sm:h-10 sm:w-10 cursor-pointer lg:hidden"
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
