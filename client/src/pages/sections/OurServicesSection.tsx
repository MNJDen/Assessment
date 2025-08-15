import { ArrowRightIcon } from "lucide-react";
import React from "react";

const servicesData = [
  {
    title: "Buy/Sell Properties",
  },
  {
    title: "Design and Development",
  },
  {
    title: "Consultation and Expert Advice",
  },
];

export const OurServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-[60px] relative">
      <div className="relative w-full lg:flex-1 lg:grow h-[250px] sm:h-[300px] lg:h-[378px] rounded-xl bg-[url(/figmaAssets/services-image.png)] bg-cover bg-[50%_50%]" />
      <div className="flex flex-col items-start gap-8 lg:gap-[60px] relative w-full lg:flex-1 lg:self-stretch lg:grow">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Domine',Helvetica] font-bold text-[#232323] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50.5px] tracking-[0] leading-[normal]">
          Our Services
        </h2>

        <div className="flex flex-col items-start gap-6 lg:gap-10 relative self-stretch w-full flex-[0_0_auto]">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#232323] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-[20px] sm:text-[24px] lg:text-[28.4px] tracking-[0] leading-[normal]">
                {service.title}
              </div>

              <ArrowRightIcon className="relative self-stretch w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-[#232323]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
