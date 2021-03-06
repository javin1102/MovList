import Logo from "../../public/svg/logo.svg";
import Google from "../../public/svg/google.svg";
import Image from "next/image";
import Link from "next/link";
import Search from "../../public/svg/search.svg";
import RoundedButton from "../UI/RoundedButton";
import { useEffect, useState } from "react";
import NavList from "./NavList";
import SearchBar from "../UI/SearchBar";
import Overlay from "../UI/Overlay";
import { useTop } from "../../hooks/use-top";
import { signIn, useSession, signOut } from "next-auth/client";
const Nav = ({ isHomePage }) => {
  const { isTop } = useTop();
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  const [isClickSearch, setIsClickSearch] = useState(false);
  const [isClickOverlay, setIsClickOverlay] = useState(false);
  const [session] = useSession();
  const navBGColor =
    isTop && isHomePage ? "bg-[rgba(24,24,24,0.7)]" : "bg-white";

  const navBrandColor = isTop && isHomePage ? "text-white" : "text-black";
  const signButtonText = session ? "Sign Out" : "Sign In";
  const signButtonHandler = () => {
    if (!session) signIn("google");
    else {
      signOut();
    }
  };
  const signButtonImgSrc = session ? session.user.image : Google;

  useEffect(() => {
    if (isClickOverlay) {
      setIsClickSearch(false);
      setIsClickOverlay(false);
      setIsOpenHamburger(false);
    }
  }, [isClickOverlay]);

  return (
    <>
      {(isOpenHamburger || isClickSearch) && (
        <Overlay
          setIsClickOverlay={setIsClickOverlay}
          bgColor={`bg-[rgba(0,0,0,0.85)]`}
        />
      )}
      <nav
        className={`h-16 sm:h-20 lg:h-24 w-full bg-gray-700 flex items-center sm:px-6 px-4 ${navBGColor} shadow-md fixed top-0 z-30 lg:px-12 transition-colors`}
      >
        {/*Nav Brand*/}
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <div className="w-6 sm:w-10 lg:w-12">
              <Image src={Logo} />
            </div>
            <div
              className={`text-sm sm:text-2xl lg:text-4xl font-poppins ml-3 font-bold ${navBrandColor}`}
            >
              MovList
            </div>
          </div>
        </Link>

        <NavList isHomePage={isHomePage} isOpenHamburger={isOpenHamburger} />

        <div className="flex items-center ml-auto lg:flex-1 ">
          {/*Search Image for mobile*/}
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 relative mr-4 cursor-pointer lg:hidden"
            onClick={() => {
              setIsOpenHamburger(false);
              setIsClickSearch((prev) => !prev);
            }}
          >
            <Image src={Search} layout="fill" />
          </div>

          <SearchBar
            isTop={isTop}
            isHomePage={isHomePage}
            isClickSearch={isClickSearch}
          />

          {/*Google Login Button*/}
          <RoundedButton color="tertiary" onClick={signButtonHandler}>
            <span className="w-6 h-6 mr-2 relative rounded-full overflow-hidden">
              <Image src={signButtonImgSrc} layout="fill" alt="user profile " />
            </span>
            {signButtonText}
          </RoundedButton>
        </div>

        {/*Hamburger*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-6 sm:h-10 sm:w-10 cursor-pointer lg:hidden"
          fill="white"
          viewBox="0 0 24 24"
          stroke={`${isTop && isHomePage ? "white" : "black"}`}
          onClick={() => {
            setIsOpenHamburger((prev) => !prev);
            setIsClickSearch(false);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
    </>
  );
};

export default Nav;
