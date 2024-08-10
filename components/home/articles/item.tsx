import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Skeleton } from "../../ui/skeleton";

type Props = {
  index: number;
  title: string;
  cover: string;
  caption: string;
};

type SkeletonProps = {
  index: number;
};

const ArticleItem = ({ index, title, cover, caption }: Props) => {
  return (
    <div
      className={cn(
        index === 0 && "lg:row-span-2 lg:col-span-2",
        "w-full flex flex-col"
      )}
    >
      <div className="relative w-full h-full aspect-video overflow-hidden">
        <Image
          src={cover}
          alt={caption}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all"
        />
      </div>
      <div className="w-full p-6 lg:p-4 bg-dark-green flex flex-col">
        <p className="text-base text-light-brown font-bold line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ArticleItem;

export const ArticleSkeleton = ({ index }: SkeletonProps) => {
  return (
    <div
      className={cn(
        index === 0 && "lg:row-span-2 lg:col-span-2",
        "w-full flex flex-col"
      )}
    >
      <Skeleton
        className={cn(
          index === 0 ? "lg:h-[380px]" : "lg:h-[130px]",
          "w-full overflow-hidden h-[221px]"
        )}
      />
      <div className="w-full p-6 lg:p-4  flex flex-col">
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};
