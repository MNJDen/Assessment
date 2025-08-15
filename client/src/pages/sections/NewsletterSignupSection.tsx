import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const NewsletterSignupSection = (): JSX.Element => {
  return (
    <section className="w-full min-h-[279px] rounded-xl bg-[url(/figmaAssets/newsletter.svg)] bg-[100%_100%] relative">
      <div className="flex w-full items-start gap-20 p-8">
        <div className="flex flex-col items-start gap-5 flex-1">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-[37.9px] tracking-[0] leading-[normal]">
            Contact Us
          </h2>

          <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-[21.3px] tracking-[0] leading-5">
            Please feel free to contact us with any questions or inquiries you
            may have.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <Label className="text-white text-base [font-family:'Outfit',Helvetica] font-medium tracking-[0] leading-[normal]">
                  Email Address
                </Label>

                <Input
                  placeholder="Email Address"
                  className="bg-white rounded-lg px-4 py-5 h-auto text-[#232323] [font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] placeholder:opacity-50 placeholder:text-[#232323] border-0"
                />
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <Label className="text-white text-base [font-family:'Outfit',Helvetica] font-medium tracking-[0] leading-[normal]">
                  Message
                </Label>

                <Textarea
                  placeholder="Type Here"
                  className="bg-white rounded-lg px-4 py-5 h-auto min-h-[60px] text-[#232323] [font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] placeholder:opacity-50 placeholder:text-[#232323] border-0 resize-none"
                />
              </div>
            </div>
          </div>

          <Button className="w-full h-auto px-4 py-5 bg-[#232323] rounded-lg border-2 border-solid border-white hover:bg-[#232323] hover:border-white">
            <span className="[font-family:'Outfit',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Send Message
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
