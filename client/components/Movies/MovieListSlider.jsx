import SliderTrack from "./MovieSlider/SliderTrack";
import SliderHeading from "./MovieSlider/SliderHeading";
import SliderLayout from "./MovieSlider/SliderLayout";
import SliderHeader from "./MovieSlider/SliderHeader";
import SliderPageNum from "./MovieSlider/SliderPageNum";
import { usePageNum } from "../../hooks/use-page-num";
import { useEffect, useState } from "react";

const MoviesListSlider = ({ movies, headline }) => {
  const { slidesShowNum, totalPageNum } = usePageNum(movies.length);
  const [currentSlidePage, setCurrentSlidePage] = useState(1);
  const [canChangePage, setCanChangePage] = useState(true);

  const changePageHandler = () => {
    setCanChangePage(true);
  };

  useEffect(() => {
    //if slider is animating, can change page is false
    if (canChangePage === false) {
      //set canChangePage to true after finish slider finish animating
      setTimeout(changePageHandler, 400);
    }
    return () => {
      clearTimeout();
    };
  }, [canChangePage]);

  return (
    <SliderLayout>
      <SliderHeader>
        <SliderHeading>{headline}</SliderHeading>
        <SliderPageNum>
          {currentSlidePage}/{totalPageNum}
        </SliderPageNum>
      </SliderHeader>

      <SliderTrack
        movies={movies}
        slidesShowNum={slidesShowNum}
        setCurrentSlidePage={setCurrentSlidePage}
        setCanChangePage={setCanChangePage}
        canChangePage={canChangePage}
        totalPageNum={totalPageNum}
        currentSlidePage={currentSlidePage}
      />
    </SliderLayout>
  );
};

export default MoviesListSlider;
