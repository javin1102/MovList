import LatestUpdate from "../components/Content/LatestUpdate";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import ContentSlider from "../components/UI/ContentSlider";

export default function Home() {
  //Nav Controller

  return (
    <>
      <Nav />
      <Header />
      <LatestUpdate />
      <div className="min-h-[1000px]"></div>
    </>
  );
}
