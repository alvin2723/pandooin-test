import React from "react";
import FootageList from "./list";

const LuxuryFootages = () => {
  return (
    <section id="luxury-footages" className="bg-brown lg:mt-[72px]">
      <div className="pt-12 container py-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl lg:text-left flex flex-col space-y-6">
        <h2 className="font-the-signature text-[52px] lg:text-[72px] text-dark-green">
          Luxury Footages
        </h2>
        <FootageList/>
      </div>
    </section>
  );
};

export default LuxuryFootages;
