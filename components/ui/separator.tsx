import Image from "next/image";
import React from "react";

type Props = {
  color: "brown" | "white";
};

const Separator = ({ color }: Props) => {
  return (
    <div className="w-full h-[37px] lg:h-[97px] mt-[72px] relative">
      <Image
        src={
          color === "brown"
            ? "/images/separator-1.svg"
            : "/images/separator-2.svg"
        }
        alt="Separator"
        fill
        loading="lazy"
      />
    </div>
  );
};

export default Separator;
