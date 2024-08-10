import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  active?: boolean;
  color: "light" | "brown";
};

const HeaderMenuItem = ({ title, link, color, active }: Props) => {
  return (
    <div
      className={cn(
        active
          ? `border-b-2 ${
              color === "brown" ? "border-dark-green" : "border-light-brown"
            }`
          : "border-none",
        "py-3 lg:py-4 px-4"
      )}
    >
      <Link
        href={link}
        className={cn(
          color === "brown" ? "text-green" : "text-light-brown",

          "text-base font-bold text-end lg:text-left"
        )}
      >
        {title}
      </Link>
    </div>
  );
};

export default HeaderMenuItem;
