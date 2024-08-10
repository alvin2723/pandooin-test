import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import HeaderMenuItem from "../menu-item";
import MenuListDesktop from "./desktop";
import MenuListMobile from "./mobile";

type Props = {
  color: "light" | "brown";
  isOpened?: boolean;
  width: number;
};

const HeaderMenuList = ({ color, isOpened, width }: Props) => {
  return (
    <>
      {width >= 992 && <MenuListDesktop color={color} />}
      {width <= 991 && <MenuListMobile color={color} />}
    </>
  );
};

export default HeaderMenuList;
