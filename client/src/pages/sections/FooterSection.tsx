import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const companyLinks = [
    { label: "Home", href: "#" },
    { label: "Listing", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const supportLinks = [
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="flex flex-col w-full items-center justify-center gap-10 p-6 md:p-12 bg-[#232323] overflow-hidden">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full max-w-[1440px]">
        <img className="w-62 md:flex-1" alt="Logos" src="/figmaAssets/logos.svg" />

        <div className="flex flex-col w-full md:w-[200px] items-start justify-center gap-2">
          <div className="[font-family:'Outfit',Helvetica] font-medium text-white text-base tracking-[0] leading-5">
            Company
          </div>
          {companyLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Outfit',Helvetica] font-medium text-[#ffffff9e] text-base tracking-[0] leading-5 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col w-full md:w-[200px] items-start justify-center gap-2">
          <div className="[font-family:'Outfit',Helvetica] font-medium text-white text-base tracking-[0] leading-5">
            Support
          </div>
          {supportLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Outfit',Helvetica] font-medium text-[#ffffff9e] text-base tracking-[0] leading-5 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col w-full md:w-[400px] items-start justify-center gap-4">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="[font-family:'Outfit',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
              Subscribe to our newsletter
            </div>
            <div className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-5">
              Stay updated with the latest listings
            </div>
          </div>

          <div className="flex items-start gap-3 w-full">
            <Input
              placeholder="Email address"
              className="flex-1 h-11 bg-[#ffffff17] border-transparent text-white placeholder:text-[#ffffff66] [font-family:'Outfit',Helvetica] font-normal text-base"
            />
            <Button
              variant="outline"
              className="h-auto px-4 py-2 bg-white text-[#232323] hover:bg-[#ffffff90] border-white [font-family:'Outfit',Helvetica] font-medium text-base transition-colors"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="w-full bg-white/10" />

      <div className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-5">
        Copyright © 2023 Marci METZGER Homes - All Rights Reserved
      </div>
    </footer>
  );
};
