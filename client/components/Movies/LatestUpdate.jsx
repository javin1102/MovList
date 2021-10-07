import CardSlider from "./MovieSlider/SliderTrack";
import SliderHeading from "./MovieSlider/SliderHeading";
import SliderLayout from "./MovieSlider/SliderLayout";
import SliderHeader from "./MovieSlider/SliderHeader";
import SliderPageNum from "./MovieSlider/SliderPageNum";
import { usePageNum } from "../../hooks/use-page-num";
const LatestUpdate = ({ newMovies }) => {
  const { slidesShowNum, totalPageNum } = usePageNum(newMovies.length);
  return (
    <SliderLayout>
      <SliderHeader>
        <SliderHeading>Latest Update</SliderHeading>
        <SliderPageNum>3/{totalPageNum}</SliderPageNum>
      </SliderHeader>

      <CardSlider movies={newMovies} slidesShowNum={slidesShowNum} />
    </SliderLayout>
  );
};

export default LatestUpdate;
