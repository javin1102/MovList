import Search from "../../public/search.svg";
import Image from "next/image";
const SearchBar = () => {
  return (
    <form className="hidden lg:block w-1/2 flex-1 mx-6 relative">
      <input
        placeholder="Search anything..."
        className=" rounded-full w-full bg-[rgba(193,193,193,0.5)] h-10 pl-5 pr-16 outline-none font-poppins"
      />
      <div className="w-6 h-6 absolute cursor-pointer right-5 top-1/2 -translate-y-1/2">
        <Image src={Search} layout="fill" />
      </div>
    </form>
  );
};

export default SearchBar;
