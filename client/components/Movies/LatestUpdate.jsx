import CardSlider from "./MovieSlider/SliderTrack";
import SliderHeading from "./MovieSlider/SliderHeading";
import SliderLayout from "./MovieSlider/SliderLayout";
import SliderHeader from "./MovieSlider/SliderHeader";
import SliderPageNum from "./MovieSlider/SliderPageNum";
const LatestUpdate = ({ newMovies }) => {
  return (
    <SliderLayout>
      <SliderHeader>
        <SliderHeading>Latest Update</SliderHeading>
        <SliderPageNum>3/5</SliderPageNum>
      </SliderHeader>
      <CardSlider movies={newMovies} />
    </SliderLayout>
  );
};

export default LatestUpdate;
