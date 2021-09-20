import { useEffect, useState } from "react";

export const useTop = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsTop(false);
        return;
      }
      setIsTop(true);
    });
  }, [isTop]);
  return {
    isTop,
  };
};
