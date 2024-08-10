import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  color: "brown" | "white";
  className?: string;
};

const Separator = ({ color, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full h-[37px] lg:h-[97px] mt-[72px] relative",
        className
      )}
    >
      <Image
        src={
          color === "brown"
            ? "/images/icon/separator-1.svg"
            : "/images/icon/separator-2.svg"
        }
        alt="Separator"
        fill
        loading="lazy"
      />
    </div>
  );
};

export default Separator;
