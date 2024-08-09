import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TailorExperience = () => {
  return (
    <div
      id="tailor-experience"
      className="mt-[54px] pt-4 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6"
    >
      <Image
        src={"/images/services/tailor.webp"}
        alt="Tailor Experience"
        loading="lazy"
        width={329}
        height={302}
        className="w-full h-[188px] lg:w-[329px] lg:h-[302px] object-contain object-center"
      />
      <div className="flex flex-col text-center lg:text-left w-full max-w-[398px] mx-auto lg:mx-0 lg:max-w-[599px]">
        <h2 className="text-xl2 lg:text-3xl2 text-dark-green font-unbounded">
          Discover Tailored Experiences
        </h2>
        <p className="text-sm lg:text-base text-black pt-2 lg:pt-4">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>
        <Button
          asChild
          className="lg:w-[200px] h-full max-h-[54px] py-3 lg:py-4 px-6 rounded-full text-sm lg:text-base text-light-brown font-bold bg-dark-green hover:bg-brown mt-6 lg:mt-4"
        >
          <Link
            href={
              "https://pandooin.com/id/tailor-made/create?utm_source=zamrood&utm_medium=website&utm_campaign=premium"
            }
            target="_blank"
            className=""
          >
            Customize Your Trip
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TailorExperience;
