"use client";
import { useEffect, useState } from "react";

type ScrollPosition = {
  y: number | undefined;
  height: number | undefined;
};

export default function useScrolls() {
  const [position, setPosition] = useState<ScrollPosition>({
    y: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setPosition({ y: window?.scrollY, height: window?.innerHeight });
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return { position };
}
