import CardSlider from "./MovieSlider/SliderTrack";
import SliderHeading from "./MovieSlider/SliderHeading";
import SliderLayout from "./MovieSlider/SliderLayout";

const LatestUpdate = () => {
  return (
    <SliderLayout>
      <SliderHeading>Latest Update</SliderHeading>
      <CardSlider />
    </SliderLayout>
  );
};

export default LatestUpdate;
