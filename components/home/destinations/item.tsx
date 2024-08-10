"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DestinationImageGallery from "./image-gallery";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  day: number;
  title: string;
  desc: string;
  partnerName: string;
  price: string;
  discPrice?: string;
  related_galleries: {
    gallery_alt_text: string;
    gallery_id: number;
    src: string;
  };
};

const DestinationItem = ({
  day,
  title,
  desc,
  partnerName,
  price,
  discPrice,
  related_galleries,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === Object.keys(related_galleries).length
          ? 0
          : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 lg:py-[72px] w-full flex flex-col lg:even:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch">
      <DestinationImageGallery related_galleries={related_galleries} />
      <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
        <div className="w-full flex flex-col space-y-2">
          <span className="text-left text-xs lg:text-base uppercase">
            {day} days {day - 1} night
          </span>
          <h3 className="text-left text-dark-aquaman text-base lg:text-4xl font-bold line-clamp-2">
            {title}
          </h3>
          <span className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold">
            Organized by {partnerName}
          </span>
          <p className="text-left text-sm lg:text-base text-dark-teal line-clamp-4">
            {desc}
          </p>
        </div>
        <div className="mt-auto w-full inline-flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-left text-dark-teal text-xs lg:text-base">
              Start from
            </span>
            <span className="text-left font-unbounded text-dark-teal text-lg lg:text-[28px] font-medium">
              {price}
            </span>
          </div>
          <Button
            asChild
            className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal "
          >
            <Link href={"/"}>See Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;

export const DestinationItemSkeleton = (): any => {
  return (
    <div className="py-4 lg:py-[72px] w-full flex flex-col lg:even:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch">
      <Skeleton className="lg:w-1/2 h-[347px]" />
      <div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
        <div className="w-full flex flex-col space-y-2">
          <Skeleton className="w-[100px] h-5" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-20" />
        </div>
        <div className="mt-auto w-full inline-flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-left text-dark-teal text-xs lg:text-base">
              Start from
            </span>
            <Skeleton className="w-[170px] h-[28px]" />
          </div>
          <Button
            asChild
            className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal "
          >
            <Link href={"/"}>See Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
