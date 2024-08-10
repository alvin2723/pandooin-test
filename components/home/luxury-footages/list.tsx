"use client";
import { useWindowSize } from "@/hooks";
import Image from "next/image";
import React from "react";
import FootageImageGallery from "./image-gallery";
import Separator from "@/components/ui/separator";

const FootageList = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width! >= 992 && (
        <div className="hidden w-full lg:grid grid-cols-3 gap-6">
          <div className="relative w-full aspect-[356/256] cursor-pointer">
            <Image
              src={"/images/footages/footage-1.webp"}
              alt="footage-1"
              fill
            />
          </div>
          <div className="relative w-full aspect-[356/256] cursor-pointer">
            <Image
              src={"/images/footages/footage-2.webp"}
              alt="footage-2"
              fill
            />
          </div>
          <div className="relative w-full aspect-[356/256] cursor-pointer">
            <Image
              src={"/images/footages/footage-3.webp"}
              alt="footage-3"
              fill
            />
          </div>
          <div className="col-span-full">
            <Separator color="white" className="mt-0" />
          </div>
          <div className="relative w-full aspect-[356/256] cursor-pointer">
            <Image
              src={"/images/footages/footage-4.webp"}
              alt="footage-4"
              fill
            />
          </div>
          <div className="relative w-full aspect-[356/256] cursor-pointer">
            <Image
              src={"/images/footages/footage-5.webp"}
              alt="footage-5"
              fill
            />
          </div>
          <div className="relative w-full aspect-[356/256] cursor-pointer">
            <Image
              src={"/images/footages/footage-6.webp"}
              alt="Footage 6"
              fill
            />
          </div>
        </div>
      )}
      {width! <= 991 && <FootageImageGallery />}
    </>
  );
};

export default FootageList;
