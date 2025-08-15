import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const NewsletterSignupSection = (): JSX.Element => {
  return (
    <section className="w-full rounded-xl overflow-hidden bg-[linear-gradient(135deg,rgba(35,35,35,0.9)_0%,rgba(50,50,50,0.8)_50%,rgba(35,35,35,0.9)_100%)] relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2780%27%20height%3D%2780%27%20viewBox%3D%270%200%2080%2080%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.04%27%3E%3Cpath%20d%3D%27M20%2020c0-11.046%208.954-20%2020-20s20%208.954%2020%2020-8.954%2020-20%2020-20-8.954-20-20zm0%2040c0-11.046%208.954-20%2020-20s20%208.954%2020%2020-8.954%2020-20%2020-20-8.954-20-20zM0%2020c0-11.046%208.954-20%2020-20s20%208.954%2020%2020-8.954%2020-20%2020S0%2031.046%200%2020zm40%2040c0-11.046%208.954-20%2020-20s20%208.954%2020%2020-8.954%2020-20%2020-20-8.954-20-20zm0-40c0-11.046%208.954-20%2020-20s20%208.954%2020%2020-8.954%2020-20%2020-20-8.954-20-20z%27/%3E%3C/g%3E%3C/svg%3E')] before:opacity-50 before:pointer-events-none before:rounded-xl">
      <div className="flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-20 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col items-start gap-5 w-full lg:flex-1">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37.9px] tracking-[0] leading-[normal]">
            Contact Us
          </h2>

          <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-[16px] md:text-[18px] lg:text-[21.3px] tracking-[0] leading-5">
            Please feel free to contact us with any questions or inquiries you
            may have.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 w-full lg:flex-1">
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <Label className="text-white text-sm md:text-base [font-family:'Outfit',Helvetica] font-medium tracking-[0] leading-[normal]">
                  Email Address
                </Label>

                <Input
                  placeholder="Email Address"
                  className="bg-white rounded-lg px-4 py-3 lg:py-5 h-auto text-[#232323] [font-family:'Outfit',Helvetica] font-normal text-sm lg:text-base tracking-[0] placeholder:opacity-50 placeholder:text-[#232323] border-0"
                />
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <Label className="text-white text-sm md:text-base [font-family:'Outfit',Helvetica] font-medium tracking-[0] leading-[normal]">
                  Message
                </Label>

                <Textarea
                  placeholder="Type Here"
                  className="bg-white rounded-lg px-4 py-3 lg:py-5 h-auto min-h-[60px] lg:min-h-[80px] text-[#232323] [font-family:'Outfit',Helvetica] font-normal text-sm lg:text-base tracking-[0] placeholder:opacity-50 placeholder:text-[#232323] border-0 resize-none"
                />
              </div>
            </div>
          </div>

          <Button className="w-full h-auto px-4 py-3 lg:py-5 bg-[#232323] rounded-lg border-2 border-solid border-white hover:bg-[#232323] hover:border-white">
            <span className="[font-family:'Outfit',Helvetica] font-semibold text-white text-sm lg:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Send Message
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
