import Image from "next/image";
import Link from "next/link";
import React from "react";

const PandooWebsite = () => {
  return (
    <section id="pandoo-website" className="w-full my-[54px]">
      <div className="w-full container max-w-7xl">
        <div className="w-full relative p-6">
          <Image
            src={"/images/bg-zamrood.webp"}
            alt="pandoo website"
            fill
            className="object-cover z-0"
            loading="lazy"
          />
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-[4]">
            <Image
              src={"/images/logo-zamrood-light.png"}
              alt="Logo"
              width={146}
              height={54}
              loading="lazy"
              unoptimized
            />
            <div className="flex flex-col justify-center lg:justify-end gap-2 mt-2 text-light-brown w-full max-w-[240px] lg:max-w-[444px] mx-auto lg:mx-0">
              <p className="text-light-brown text-sm lg:text-base text-center lg:text-end">
                Want to see other destinations? Check us out at our website
              </p>
              <Link
                href={"/"}
                className="flex items-center justify-center lg:justify-end gap-2"
              >
                <span className="text-base lg:text-xl font-bold underline">
                  pandooin.com
                </span>
                <Image
                  src={"/images/icon/arrow-icon.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PandooWebsite;
