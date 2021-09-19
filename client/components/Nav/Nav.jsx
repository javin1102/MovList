import Logo from "../../public/logo.svg";
import Google from "../../public/google.svg";
import Image from "next/image";
import Link from "next/link";
import Search from "../../public/search.svg";
import RoundedButton from "../UI/RoundedButton";
import { isMobile } from "react-device-detect";
const Nav = () => {
  return (
    <nav className="h-16 sm:h-20 w-full bg-gray-700 flex items-center sm:px-6 px-4 bg-[rgba(0,0,0,0.85)]">
      <Link href="/">
        <div className="flex flex-row items-center">
          <div className="w-7 sm:w-8">
            <Image src={Logo} />
          </div>
          <div className="text-md sm:text-xl font-poppins ml-3 font-bold text-white">
            MovList
          </div>
        </div>
      </Link>

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

      <div className="tham tham-e-spin tham-w-8 ml-10">
        <div class="tham-box ">
          <div class="tham-inner bg-white " />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
