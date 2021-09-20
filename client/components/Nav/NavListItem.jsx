import Link from "next/link";
const NavListItem = (props) => {
  return (
    <li className="mb-3 last:mb-0 active:text-primary cursor-pointer text-xs lg:mb-0 lg:mr-5 lg:last:mr-0 lg:font-normal lg:text-lg hover:text-primary inline-block w-[fit-content]">
      <Link href="#">{props.children}</Link>
    </li>
  );
};

export default NavListItem;
