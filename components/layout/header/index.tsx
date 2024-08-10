"use client";
import { useWindowSize } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenuList from "./menu-list";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";
import { useScrolls } from "@/hooks";
const Header = () => {
  const { width } = useWindowSize();
  const { position } = useScrolls();
  const isAnimate = width! >= 992 ? position.y! > 100 : false;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      {isAnimate ? (
        <motion.header
          id="header"
          className="w-full sticky top-0 left-0 z-40 bg-light-brown h-[88px] lg:h-[102px] hidden lg:block"
          variants={navVariants(0.5)}
          initial="hidden"
          whileInView={"show"}
        >
          <nav className="w-full max-w-7xl py-4 lg:py-6 relative container flex items-center justify-between">
            <Link href={"/"} className="w-[135px] h-[50px] relative">
              <Image
                src={"/images/logo-zamrood-dark.png"}
                alt="Logo"
                fill
                priority
              />
            </Link>

            <HeaderMenuList
              color={isAnimate ? "brown" : "light"}
              width={width!}
            />
          </nav>
        </motion.header>
      ) : (
        <header
          id="header"
          className={`w-full fixed bg-light-brown lg:bg-transparent lg:absolute top-0 left-0 z-40 h-[88px] lg:h-[102px]`}
        >
          <nav className="w-full max-w-7xl py-4 lg:py-6 relative container flex items-center justify-between">
            <Link href={"/"} className="w-[135px] h-[50px] relative">
              <Image
                src={
                  width! > 991 && width! !== null
                    ? "/images/logo-zamrood-light.png"
                    : "/images/logo-zamrood-dark.png"
                }
                alt="Logo"
                fill
                priority
              />
            </Link>
            {width! >= 992 && (
              <HeaderMenuList
                color={isAnimate ? "brown" : "light"}
                width={width!}
              />
            )}
            {width! <= 991 && <HeaderMenuList color={"brown"} width={width!} />}
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
