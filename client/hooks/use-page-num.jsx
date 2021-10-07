import { useCallback, useEffect, useState } from "react";
import { useSlideShowNum } from "./use-slideshownum";
export const usePageNum = (moviesLength) => {
  const [totalPageNum, setTotalPageNum] = useState(1);
  const { slidesShowNum } = useSlideShowNum();
  useEffect(() => {
    setTotalPageNum(Math.round(moviesLength / slidesShowNum));
  }, [totalPageNum]);
  return {
    totalPageNum,
    slidesShowNum,
  };
};
