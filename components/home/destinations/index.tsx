import Image from "next/image";
import Link from "next/link";
import React from "react";
import DestinationList from "./list";

const Destinations = () => {
  return (
    <section id="destination" className="w-full mt-[54px] lg:mt-[72px]">
      <div className="container max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-4 py-6">
          <h2 className="text-xl2 lg:text-4xl font-unbounded font-bold text-green">
            Destinations
          </h2>
          <Link href={"/"} className="flex items-center gap-4">
            <Image
              src={"/images/icon/arrow-icon-2.svg"}
              alt="arrow"
              width={44}
              height={44}
              loading="lazy"
            />
            <p className="text-base uppercase text-dark-green font-bold">
              Explore More
            </p>
          </Link>
        </div>
        <DestinationList />
        <div className="w-full flex justify-end py-[26px]">
          <Link href={"/"} className="flex items-center gap-4">
            <Image
              src={"/images/icon/arrow-icon-2.svg"}
              alt="arrow"
              width={44}
              height={44}
              loading="lazy"
            />
            <p className="text-base uppercase text-dark-green font-bold">
              Explore More
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
