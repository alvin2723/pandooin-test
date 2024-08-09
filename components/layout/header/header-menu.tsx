import React from "react";
import MenuItem from "./menu-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
      <MenuItem title="Homepage" link="/" />
      <MenuItem title="Customize Your Trip" link="/#tailored-experiences" />
      <MenuItem title="Destination" link="/#destination" />
      <MenuItem title="Article" link="/#article" />

      <Button
        asChild
        className="border border-white py-3 px-6 text-white font-bold rounded-full text-base w-full max-w-[182px] h-[54px]"
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

export default HeaderMenu;
