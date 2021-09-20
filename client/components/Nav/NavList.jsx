import NavListItem from "./NavListItem";

const NavList = () => {
  return (
    <ul className="max-h-[fit-content] flex flex-col w-full bg-white text-black font-poppins text-xs px-8 py-4 absolute top-full left-0 shadow-top rounded-bl-xl rounded-br-xl">
      <NavListItem>Home</NavListItem>
      <NavListItem>TV Shows</NavListItem>
      <NavListItem>Movies</NavListItem>
    </ul>
  );
};

export default NavList;
