import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import HeaderMenuItem from "../menu-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Close, Hamburger } from "../icon";

type Props = {
  color: "light" | "brown";
};

const MenuListMobile = ({ color }: Props) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Hamburger color={color} />
      </DrawerTrigger>
      <DrawerContent className="w-[calc(100vw_-_72px)] flex flex-col gap-y-5 overflow-y-auto p-4 bg-light-brown border-none h-full rounded-none ml-auto z-[9999]">
        <DrawerHeader className="p-0">
          <DrawerTitle>
            <DrawerClose className="w-full inline-flex justify-end">
              <Close />
            </DrawerClose>
          </DrawerTitle>
          <DrawerDescription className="h-0 w-0" />
        </DrawerHeader>

        <div className="mt-[156px] flex flex-col space-y-6 w-full items-end">
          <HeaderMenuItem title="Homepage" link="/" color={"brown"} />
          <HeaderMenuItem
            title="Customize Your Trip"
            link="/#tailored-experiences"
            color={"brown"}
          />
          <HeaderMenuItem
            title="Destination"
            link="/#destination"
            color={"brown"}
          />
          <HeaderMenuItem title="Article" link="/#article" color={"brown"} />

          <Button
            asChild
            className={
              "border-2 border-dark-green text-dark-green py-3 px-6 font-bold rounded-full text-base w-full max-w-[182px] h-[54px]"
            }
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
      </DrawerContent>
    </Drawer>
  );
};

export default MenuListMobile;
