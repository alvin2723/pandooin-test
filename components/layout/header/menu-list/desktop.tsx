"use client";
import React from "react";
import HeaderMenuItem from "../menu-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  color: "light" | "brown";
};

const MenuListDesktop = ({ color }: Props) => {
  const pathName = usePathname();
  return (
    <div
      className={"flex flex-col lg:flex-row items-center justify-center gap-6"}
    >
      <HeaderMenuItem
        title="Homepage"
        link="/"
        color={color}
        active={pathName === "/"}
      />
      <HeaderMenuItem
        title="Customize Your Trip"
        link="/#tailored-experiences"
        active={pathName === "/#tailored-experiences"}
        color={color}
      />
      <HeaderMenuItem
        title="Destination"
        link="/#destination"
        color={color}
        active={pathName === "/#destination"}
      />
      <HeaderMenuItem
        title="Article"
        link="/#article"
        color={color}
        active={pathName === "/#article"}
      />

      <Button
        asChild
        className={cn(
          color === "brown"
            ? "border-dark-green text-dark-green"
            : "border-light-brown text-light-brown",
          "border-2 py-3 px-6 font-bold rounded-full text-base w-full max-w-[182px] h-[54px]"
        )}
      >
        <Link
          href={
            "https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood"
          }
          target="_blank"
        >
          Need Assistance?
        </Link>
      </Button>
    </div>
  );
};

export default MenuListDesktop;
