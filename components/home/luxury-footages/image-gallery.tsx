"use client";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/footages/footage-1.webp",
  "/images/footages/footage-2.webp",
  "/images/footages/footage-3.webp",
  "/images/footages/footage-4.webp",
  "/images/footages/footage-5.webp",
];

const FootageImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageIndex = wrap(0, images.length, currentIndex);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="block lg:hidden relative w-full aspect-[356/256]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        key={currentIndex}
      >
        <Image
          src={images[imageIndex]}
          alt={`footage-${currentIndex}`}
          fill
          className="object-cover object-center"
          loading="lazy"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FootageImageGallery;
