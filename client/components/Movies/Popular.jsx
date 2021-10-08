import CardSlider from "./MovieSlider/SliderTrack";
import SliderHeading from "./MovieSlider/SliderHeading";
import SliderLayout from "./MovieSlider/SliderLayout";
import SliderHeader from "./MovieSlider/SliderHeader";
import SliderPageNum from "./MovieSlider/SliderPageNum";
import { usePageNum } from "../../hooks/use-page-num";
const Popular = ({ popularMovies }) => {
  const { slidesShowNum, totalPageNum } = usePageNum(popularMovies.length);
  return (
    <SliderLayout>
      <SliderHeader>
        <SliderHeading>Popular</SliderHeading>
        <SliderPageNum>3/{totalPageNum}</SliderPageNum>
      </SliderHeader>

      <CardSlider movies={popularMovies} slidesShowNum={slidesShowNum} />
    </SliderLayout>
  );
};

export default Popular;
