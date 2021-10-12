import Link from "next/link";
import { useTop } from "../../hooks/use-top";
const NavListItem = ({ isHomePage, children }) => {
  const { isTop } = useTop();
  const textColor = isTop && isHomePage ? "lg:text-white" : "lg:text-black";
  return (
    <li
      className={`mb-3 last:mb-0 active:text-primary cursor-pointer text-xs lg:mb-0 lg:mr-5 lg:last:mr-0 lg:font-normal lg:text-lg hover:text-primary inline-block w-[fit-content] ${textColor}`}
    >
      <Link href="#">{children}</Link>
    </li>
  );
};

export default NavListItem;
