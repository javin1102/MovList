import NavListItem from "./NavListItem";

const NavList = ({ isOpenHamburger, isHomePage }) => {
  const isHidden = isOpenHamburger
    ? "max-h-[fit-content] py-4"
    : "max-h-[0] py-0";
  const NavItem = ["Home", "Tv Shows", "Movies"];
  return (
    <ul
      className={` ${isHidden} overflow-hidden flex flex-col w-full bg-white text-black font-poppins text-xs px-8 py-4 absolute top-full left-0 shadow-top rounded-bl-xl rounded-br-xl z-20 lg:w-[fit-content] lg:flex lg:flex-row lg:static lg:py-0 lg:shadow-none lg:ml-8 lg:bg-transparent lg:max-h-[fit-content] transition-all`}
    >
      {NavItem.map((item) => (
        <NavListItem isHomePage={isHomePage}>{item}</NavListItem>
      ))}
    </ul>
  );
};

export default NavList;
