import { ChevronUpIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const OfficeDetailsSection = (): JSX.Element => {
  const officeHours = [
    { day: "Monday", hours: "08:00 Am – 06:30 Pm" },
    { day: "Tuesday", hours: "08:00 Am – 06:30 Pm" },
    { day: "Wednesday", hours: "08:00 Am – 06:30 Pm" },
    { day: "Thursday", hours: "08:00 Am – 06:30 Pm" },
    { day: "Friday", hours: "08:00 Am – 06:30 Pm" },
    { day: "Saturday", hours: "08:00 Am – 06:30 Pm" },
    { day: "Sunday", hours: "01:00 Pm – 07:00 Pm" },
  ];

  return (
    <section className="flex w-full items-start gap-20 relative mt-[20px] mb-[20px]">
      <div className="flex flex-col items-center gap-10 px-0 py-5 relative flex-1 grow">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-[37.9px] tracking-[0] leading-[normal]">
              Marci Metzger - The Ridge Realty Group
            </h1>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <MapPinIcon className="relative w-6 h-6 text-[#232323]" />
              <address className="relative w-fit [font-family:'Outfit',Helvetica] font-light text-[#232323] text-[21.3px] tracking-[0] leading-[normal] whitespace-nowrap not-italic">
                3190 Hw-160, Suite F, Pahrump, Nevada 89048, United States
              </address>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <PhoneIcon className="relative w-6 h-6 text-[#232323]" />
              <a
                href="tel:(206) 919-6886"
                className="relative w-fit [font-family:'Outfit',Helvetica] font-light text-[#232323] text-[21.3px] tracking-[0] leading-[normal] whitespace-nowrap"
              >
                (206) 919-6886
              </a>
            </div>
          </div>
        </div>

        <div className="flex-col items-start gap-5 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="mt-[-1.00px] font-normal text-[#232323] text-[28.4px] relative w-fit [font-family:'Outfit',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
              Office Hours
            </h2>
          </div>

          <Collapsible
            defaultOpen
            className="flex-col items-start gap-4 flex relative self-stretch w-full flex-[0_0_auto]"
          >
            <CollapsibleTrigger className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto] bg-transparent border-none p-0 cursor-pointer">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                <ClockIcon className="relative w-6 h-6 text-[#11b216]" />
                <div className="font-normal text-[#11b216] text-[21.3px] relative w-fit [font-family:'Outfit',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                  Open Now
                </div>
              </div>
              <ChevronUpIcon className="relative w-5 h-5 text-[#232323]" />
            </CollapsibleTrigger>

            <CollapsibleContent className="flex-col items-start gap-4 pl-10 pr-0 py-0 flex relative self-stretch w-full flex-[0_0_auto]">
              {officeHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-light text-[#232323] text-[21.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {schedule.day}
                  </div>
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <time className="mt-[-1.00px] font-light text-[#232323] text-[21.3px] relative w-fit [font-family:'Outfit',Helvetica] tracking-[0] leading-[normal] whitespace-nowrap">
                      {schedule.hours}
                    </time>
                  </div>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="relative self-stretch w-[580px] rounded-xl [background:url(../figmaAssets/office-image.png)_50%_50%_/_cover]" />
    </section>
  );
};
