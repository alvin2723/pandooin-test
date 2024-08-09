import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  coverImg: string;
  title: string;
  subTitle: string;
  paragraph: string;
  buttonText?: string;
  link?: string;
};

const Hero = ({
  coverImg,
  title,
  subTitle,
  paragraph,
  buttonText,
  link,
}: Props) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full h-[756px] lg:h-[810px] z-[4]"
    >
      <Image
        src={coverImg}
        alt="Hero"
        className="object-cover object-[30%] lg:object-center"
        loading="eager"
        fill
      />
      <div className="relative w-full h-full flex justify-center items-center z-[2]">
        <div className="w-full max-w-7xl container  text-center lg:text-left">
          <h1 className="text-title-xxl2 lg:text-title-xxl font-the-signature text-brown whitespace-nowrap ">
            {title}
          </h1>
          <span className="text-2xl lg:text-title-md font-bold font-unbounded text-light-brown">
            {subTitle}
          </span>
          <p className="text-base lg:text-2xl text-light-brown pt-2 w-full lg:max-w-[708px]">
            {paragraph}
          </p>

          {buttonText ? (
            <Button
              asChild
              className="text-light-brown border border-light-brown rounded-full text-center py-3 lg:py-4 px-6 text-sm lg:first-letter:text-base font-bold mt-6 hover:bg-brown hover:border-none bg-transparent transition-colors ease-in-out h-full max-h-[54px]"
            >
              <Link href={link || "/"}>{buttonText}</Link>
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
