import { useState } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Overlay from "../components/UI/Overlay";
export default function Home() {
  //Nav Controller

  return (
    <>
      <Nav />
      <Header />
      <div className="min-h-[1000px]"></div>
    </>
  );
}
