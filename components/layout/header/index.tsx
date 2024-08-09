import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderMenu from "./header-menu";

const Header = () => {
  return (
    <header id="header" className="w-full absolute top-0 left-0 z-[999]">
      <nav className="w-full max-w-7xl py-4 lg:py-6 relative container flex items-center justify-between">
        <Link href={"/"} className="w-[135px] h-[50px] relative">
          <Image
            src={"/images/logo-zamrood-dark.png"}
            alt="Logo"
            fill
            priority
          />
        </Link>
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
