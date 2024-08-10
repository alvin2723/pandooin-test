"use client";
import { useEffect, useState } from "react";

type SizeProps = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = () => {
  const hasWindow = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (hasWindow) {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

export default useWindowSize;
