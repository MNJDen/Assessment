import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const aboutCards = [
  {
    number: "1",
    title: "Top Residential Sales Last 5 Years",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales!\n\nOur team works hard everyday to grow and learn, so that we may continue to excel in our market.",
    backgroundImage: "bg-gradient-to-br from-[#BFBFBF] via-[#242424]/50 to-[#BFBFBF]",
  },
  {
    number: "2",
    title: "Doesn't Just List It",
    description:
      "We make sure we get it SOLD!\n\nWe exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    backgroundImage: "bg-gradient-to-br from-[#BFBFBF] via-[#242424]/50 to-[#BFBFBF]",
  },
  {
    number: "3",
    title: "Guide Buyers",
    description:
      "Nobody knows the market like we do.\n\nEnjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    backgroundImage: "bg-gradient-to-br from-[#BFBFBF] via-[#242424]/50 to-[#BFBFBF]",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10">
      <h2 className="w-full [font-family:'Domine',Helvetica] font-bold text-[#232323] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50.5px] text-center tracking-[0] leading-[normal]">
        Discover What Sets Marci Metzger Apart
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[60px] w-full">
        {aboutCards.map((card, index) => (
          <Card
            key={index}
            className={`w-full lg:flex-1 h-[400px] sm:h-[500px] lg:h-[577px] rounded-xl overflow-hidden ${card.backgroundImage} bg-[100%_100%] border-0 noise-texture transition-all duration-300 ease-in-out hover:scale-[1.02] hover:brightness-110 hover:shadow-2xl`}
          >
            <CardContent className="flex flex-col h-full items-start gap-4 lg:gap-7 p-6 lg:p-10">
              <div className="flex items-center justify-center w-[60px] h-[60px] lg:w-[75px] lg:h-[75px] rounded-md bg-[linear-gradient(145deg,#E8E8E8_0%,#B7B7B7_47%,#787878_100%)]">
                <span className="[font-family:'Outfit',Helvetica] font-black text-white text-[18px] lg:text-[21.3px] text-center tracking-[0] leading-[normal]">
                  {card.number}
                </span>
              </div>

              <div className="flex flex-col items-start gap-4 lg:gap-7 flex-1 w-full">
                <h3 className="w-full [font-family:'Outfit',Helvetica] font-medium text-white text-[24px] md:text-[30px] lg:text-[37.9px] tracking-[0] leading-[normal]">
                  {card.title}
                </h3>

                <p className="w-full [font-family:'Outfit',Helvetica] font-normal text-white text-[16px] md:text-[18px] lg:text-[21.3px] tracking-[0] leading-[normal] whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
