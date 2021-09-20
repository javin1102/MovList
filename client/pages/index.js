import { useState } from "react";
import Nav from "../components/Nav/Nav";
import Overlay from "../components/UI/Overlay";
export default function Home() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  return (
    <>
      <Nav
        isOpenHamburger={isOpenHamburger}
        HamburgerToggleHandler={setIsOpenHamburger}
      />
      <div className="min-h-[1000px]" id="head"></div>
      <Overlay isOpenHamburger={isOpenHamburger} />
    </>
  );
}
