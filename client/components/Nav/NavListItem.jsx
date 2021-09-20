import Link from "next/link";
const NavListItem = (props) => {
  return (
    <li className="mb-3 last:mb-0 active:text-primary cursor-pointer text-xs">
      <Link href="#">{props.children}</Link>
    </li>
  );
};

export default NavListItem;
