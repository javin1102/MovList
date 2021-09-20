import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Overlay from "../components/UI/Overlay";
export default function Home() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  const [isClickSearch, setIsClickSearch] = useState(false);

  return (
    <>
      <Nav
        isOpenHamburger={isOpenHamburger}
        HamburgerToggleHandler={setIsOpenHamburger}
        searchHandler={setIsClickSearch}
        isClickSearch={isClickSearch}
      />
      <div className="min-h-[1000px]" id="head"></div>
      <Overlay
        isOpenHamburger={isOpenHamburger}
        isClickSearch={isClickSearch}
      />
    </>
  );
}
