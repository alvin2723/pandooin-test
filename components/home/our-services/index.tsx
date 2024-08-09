import ListItem from "@/components/ui/list-item";
import React from "react";
import TailorExperience from "./tailor-experience";

const OurServices = () => {
  return (
    <section
      id="beyond-premium"
      className="mt-[54px] lg:my-[72px] py-4 lg:py-0 w-full"
    >
      <div className="container max-w-7xl">
        <div className="text-center flex flex-col gap-4 lg:gap-[72px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-the-signature text-title-md2 lg:text-title-xl text-green">
              Beyond Premium
            </h2>
            <span className="uppercase font-unbounded font-bold text-xl2 lg:text-3xl2 text-dark-green">
              Elevate Your Experience
            </span>
          </div>
          <ul className="list-none flex flex-col lg:flex-row gap-4 lg:gap-6 px-4">
            <ListItem
              image="/images/services/icon-1.svg"
              title="Personalized Itineraries"
              desc="Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires."
            />
            <ListItem
              image="/images/services/icon-2.svg"
              title="Exclusive Experiences"
              desc="From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level."
            />
            <ListItem
              image="/images/services/icon-3.svg"
              title="Best Facilities"
              desc="Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence."
            />
          </ul>
        </div>
        <TailorExperience />
      </div>
    </section>
  );
};

export default OurServices;
