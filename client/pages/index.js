import LatestUpdate from "../components/Movies/LatestUpdate";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

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
