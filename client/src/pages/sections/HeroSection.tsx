import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start relative">
      <header className="relative w-full [font-family:'Domine',Helvetica] font-bold text-[#232323] text-[120px] text-center tracking-[-2.40px] leading-[120px] whitespace-nowrap mb-5">
        Find Your Dream Home
      </header>

      <div className="flex flex-col items-start gap-5 relative w-full">
        <div className="relative w-full h-[590px] rounded-xl bg-[url(/figmaAssets/main-image.png)] bg-cover bg-[50%_50%]" />

        <div className="flex items-center justify-between relative w-full">
          <p className="relative [font-family:'Outfit',Helvetica] font-semibold text-black text-[28.4px] tracking-[0] leading-5 whitespace-nowrap">
            Check out our listings—you just might discover your perfect home!
          </p>

          <Button className="inline-flex items-center justify-center gap-2.5 px-8 py-5 bg-[#232323] rounded-lg hover:bg-[#232323]/90 h-auto">
            <span className="[font-family:'Outfit',Helvetica] font-medium text-white text-[21.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Explore Listings
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
