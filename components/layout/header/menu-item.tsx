import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  active?: boolean;
  color?: "light" | "brown";
};

const MenuItem = ({ title, link }: Props) => {
  return (
    <div className={cn(`py-3 lg:py-4 px-4`)}>
      <Link href={link} className={cn(`text-light-brown font-bold text-base`)}>
        {title}
      </Link>
    </div>
  );
};

export default MenuItem;
