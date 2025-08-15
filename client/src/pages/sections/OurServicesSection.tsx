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
    <section className="flex w-full items-start gap-[60px] relative mt-[50px] mb-[50px]">
      <div className="relative flex-1 grow h-[378px] rounded-xl bg-[url(/figmaAssets/services-image.png)] bg-cover bg-[50%_50%]" />
      <div className="flex flex-col items-start gap-[60px] relative flex-1 self-stretch grow">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Domine',Helvetica] font-bold text-[#232323] text-[50.5px] tracking-[0] leading-[normal] whitespace-nowrap">
          Our Services
        </h2>

        <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#232323] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-[28.4px] tracking-[0] leading-[normal]">
                {service.title}
              </div>

              <ArrowRightIcon className="relative self-stretch w-9 h-9 text-[#232323]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
