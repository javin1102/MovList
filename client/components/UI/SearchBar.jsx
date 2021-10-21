import Search from "../../public/svg/search.svg";
import Image from "next/image";
import router from "next/router";
import { useState, useRef } from "react";

const SearchBar = ({ isTop, isClickSearch, isHomePage }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      router.push(`/results?search=${value}`);
      setValue("");
      inputRef.current.blur();
    }
  };
  const searchBarBGColor =
    isTop && isHomePage
      ? "bg-[rgba(255,255,255,0.4)] text-white placeholder-[rgba(255,255,255,0.8)]"
      : "bg-[rgba(193,193,193,0.5)] text-black ";

  const mobileSearchBarController = isClickSearch
    ? "-translate-y-0 opacity-100"
    : "-translate-y-1/2 opacity-0";
  return (
    <form
      className={` fixed left-1/2 -translate-x-1/2 top-24 w-4/5 text-xs transition-all ${mobileSearchBarController} lg:text-base lg:transition-none lg:block lg:w-1/2 lg:flex-1 lg:mx-6 lg:relative lg:left-0 lg:-translate-x-0 lg:top-0 lg:-translate-y-0 lg:opacity-100`}
      onSubmit={submitHandler}
    >
      <input
        placeholder="Search anything..."
        className={`rounded-full w-full ${searchBarBGColor} h-10 pl-5 pr-16 outline-none font-poppins `}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
        ref={inputRef}
      />
      <div className="w-6 h-6 absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 ">
        <Image src={Search} layout="responsive" />
      </div>
    </form>
  );
};

export default SearchBar;
