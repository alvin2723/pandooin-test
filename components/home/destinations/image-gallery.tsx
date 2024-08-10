"use client";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageGallery {
  [key: number]: ImageGallery;
  gallery_alt_text: string;
  gallery_id: number;
  src: string;
}
type Props = {
  related_galleries: ImageGallery;
};

const DestinationImageGallery = ({ related_galleries }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageIndex = wrap(
    0,
    Object.keys(related_galleries).length,
    currentIndex
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === Object.keys(related_galleries).length
          ? 0
          : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="relative lg:w-1/2 h-full max-h-[256px] lg:max-h-[400px] aspect-video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        key={currentIndex}
      >
        <Image
          src={related_galleries[imageIndex].src}
          alt={related_galleries[imageIndex].gallery_alt_text || "image"}
          fill
          className="object-cover object-center"
          loading="lazy"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default DestinationImageGallery;
