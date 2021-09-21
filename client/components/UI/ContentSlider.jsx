import ScrollContainer from "react-indiana-drag-scroll";
import SliderCard from "./SliderCard";

const as = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 28, 23, 23, 12, 123,
];

const ContentSlider = () => {
  return (
    <ScrollContainer className="h-[fit-content] ">
      <div className="w-[fit-content] flex">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
    </ScrollContainer>
  );
};

export default ContentSlider;
