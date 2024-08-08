import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  desc: string;
};

const ListItem = ({ image, title, desc }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={image}
        alt={title}
        loading={"lazy"}
        width={128}
        height={128}
        className="mx-auto"
      />
      <h3 className="text-base lg:text-2xl text-center text-green font-bold uppercase">
        {title}
      </h3>
      <p className="text-sm lg:text-base text-black text-center">{desc}</p>
    </div>
  );
};

export default ListItem;
