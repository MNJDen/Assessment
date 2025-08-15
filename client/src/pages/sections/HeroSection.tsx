import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start relative">
      <header className="relative w-full [font-family:'Domine',Helvetica] font-bold text-[#232323] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] xl:text-[120px] text-center tracking-[-1.5px] md:tracking-[-2.40px] leading-tight mb-3 md:mb-5">
        Find Your Dream Home
      </header>

      <div className="flex flex-col items-start gap-5 relative w-full">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[590px] rounded-xl bg-[url(/figmaAssets/main-image.png)] bg-cover bg-[50%_50%]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative w-full gap-4 sm:gap-0">
          <p className="relative [font-family:'Outfit',Helvetica] font-semibold text-black text-[18px] sm:text-[22px] md:text-[28.4px] tracking-[0] leading-normal">
            Check out our listings—you just might discover your perfect home!
          </p>

          <Button className="inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-4 md:py-5 bg-[#232323] rounded-lg hover:bg-[#232323]/90 h-auto w-full sm:w-auto">
            <span className="[font-family:'Outfit',Helvetica] font-medium text-white text-[16px] md:text-[21.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Explore Listings
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
