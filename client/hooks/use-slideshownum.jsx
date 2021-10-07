import { useEffect, useState } from "react";
import { useGetWidth } from "./use-get-width";
export const useSlideShowNum = () => {
  const { width } = useGetWidth();
  const [slidesShowNum, setSlideShowNum] = useState(1);

  useEffect(() => {
    if (width <= 640) {
      setSlideShowNum(3);
      return;
    }
    if (width <= 1280) {
      setSlideShowNum(4);
      return;
    }
    if (width <= 1440) {
      setSlideShowNum(5);
      return;
    }
    if (width <= 1880) {
      setSlideShowNum(6);
      return;
    }
  }, [width, slidesShowNum]);

  return {
    slidesShowNum,
  };
};
