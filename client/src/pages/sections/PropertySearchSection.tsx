import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PropertySearchSection = (): JSX.Element => {
  const formFields = [
    {
      label: "Location",
      type: "input",
      placeholder: "Location",
    },
    {
      label: "Type",
      type: "select",
      placeholder: "Unit Type",
    },
    {
      label: "Bedrooms",
      type: "select",
      placeholder: "1 Bedroom",
    },
    {
      label: "Baths",
      type: "select",
      placeholder: "1 bath",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-10 relative">
      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="mt-[-1.00px] [font-family:'Domine',Helvetica] font-bold text-[50.5px] relative self-stretch text-[#232323] tracking-[0] leading-[normal]">
          Find Your Dream Home
        </h1>

        <p className="[font-family:'Outfit',Helvetica] font-normal text-base relative self-stretch text-[#232323] tracking-[0] leading-[normal]">
          Explore our property listings.
        </p>
      </div>
      <Card className="relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl">
        <CardContent className="flex flex-col items-start gap-12 p-8">
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
              {formFields.map((field, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 relative flex-1 grow"
                >
                  <Label className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#232323] text-[21.3px] tracking-[0] leading-[normal]">
                    {field.label}
                  </Label>

                  {field.type === "input" ? (
                    <Input
                      placeholder={field.placeholder}
                      className="flex items-center gap-2.5 px-4 py-5 relative self-stretch w-full flex-[0_0_auto] bg-[#eeeeee] rounded-lg border-0 h-[51px] placeholder:opacity-50 placeholder:[font-family:'Outfit',Helvetica] placeholder:font-normal placeholder:text-[#232323] placeholder:text-base placeholder:text-left"
                    />
                  ) : (
                    <Select>
                      <SelectTrigger className="flex h-[51px] items-center justify-between px-4 py-5 relative self-stretch w-full bg-[#eeeeee] rounded-lg border-0">
                        <SelectValue
                          placeholder={
                            <span className="opacity-50 [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-base text-left tracking-[0] leading-[normal] whitespace-nowrap">
                              {field.placeholder}
                            </span>
                          }
                        />
                        <ChevronDownIcon className="w-5 h-5" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-end gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[620px] items-start gap-5 relative self-stretch">
                <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="w-fit text-[#232323] text-[21.3px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium tracking-[0] leading-[normal]">
                    Price
                  </Label>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#232323] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    $ 0 - $800,000+
                  </div>
                </div>

                <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Outfit',Helvetica] font-light text-[#232323] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    min
                  </div>

                  <div className="relative w-[521px] h-[38px]">
                    <div className="left-0 absolute w-[38px] h-[38px] top-0 bg-white rounded-[19px] border border-solid border-[#232323]" />

                    <div className="left-[483px] absolute w-[38px] h-[38px] top-0 bg-white rounded-[19px] border border-solid border-[#232323]" />

                    <img
                      className="absolute w-[445px] h-[3px] top-[18px] left-[38px]"
                      alt="Line"
                      src="/figmaAssets/line-1.svg"
                    />
                  </div>

                  <div className="relative w-fit [font-family:'Outfit',Helvetica] font-light text-[#232323] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    max
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                <Label className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#232323] text-[21.3px] tracking-[0] leading-[normal]">
                  Filter
                </Label>

                <Select>
                  <SelectTrigger className="flex h-[51px] items-center justify-between px-4 py-5 relative self-stretch w-full bg-[#eeeeee] rounded-lg border-0">
                    <SelectValue
                      placeholder={
                        <span className="opacity-50 [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-base text-left tracking-[0] leading-[normal] whitespace-nowrap">
                          Filter
                        </span>
                      }
                    />
                    <ChevronDownIcon className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="filter1">Filter 1</SelectItem>
                    <SelectItem value="filter2">Filter 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="flex items-center justify-center gap-2.5 px-4 py-5 relative flex-1 grow bg-[#232323] rounded-lg h-auto hover:bg-[#232323]/90">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Search
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
