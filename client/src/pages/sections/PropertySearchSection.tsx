import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
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
import { Slider } from "@/components/ui/slider";

export const PropertySearchSection = (): JSX.Element => {
  const [priceRange, setPriceRange] = useState([0, 800000]);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

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
        <h1 className="mt-[-1.00px] [font-family:'Domine',Helvetica] font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50.5px] relative self-stretch text-[#232323] tracking-[0] leading-[normal]">
          Find Your Dream Home
        </h1>

        <p className="[font-family:'Outfit',Helvetica] font-normal text-sm md:text-base relative self-stretch text-[#232323] tracking-[0] leading-[normal]">
          Explore our property listings.
        </p>
      </div>
      <Card className="relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl">
        <CardContent className="flex flex-col items-start gap-8 lg:gap-12 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 relative self-stretch w-full flex-[0_0_auto]">
              {formFields.map((field, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 relative w-full"
                >
                  <Label className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#232323] text-[16px] md:text-[18px] lg:text-[21.3px] tracking-[0] leading-[normal]">
                    {field.label}
                  </Label>

                  {field.type === "input" ? (
                    <Input
                      placeholder={field.placeholder}
                      className="flex items-center gap-2.5 px-4 py-3 lg:py-5 relative self-stretch w-full flex-[0_0_auto] bg-[#eeeeee] rounded-lg border-0 h-[45px] lg:h-[51px] placeholder:opacity-50 placeholder:[font-family:'Outfit',Helvetica] placeholder:font-normal placeholder:text-[#232323] placeholder:text-sm lg:text-base placeholder:text-left"
                    />
                  ) : (
                    <Select>
                      <SelectTrigger className="flex h-[45px] lg:h-[51px] items-center justify-between px-4 py-3 lg:py-5 relative self-stretch w-full bg-[#eeeeee] rounded-lg border-0">
                        <SelectValue
                          placeholder={
                            <span className="opacity-50 [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-sm lg:text-base text-left tracking-[0] leading-[normal] whitespace-nowrap">
                              {field.placeholder}
                            </span>
                          }
                        />
                        <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5" />
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

            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-full lg:w-[620px] items-start gap-5 relative self-stretch">
                <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="w-fit text-[#232323] text-[16px] md:text-[18px] lg:text-[21.3px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium tracking-[0] leading-[normal]">
                    Price
                  </Label>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#232323] text-sm lg:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}+
                  </div>
                </div>

                <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit [font-family:'Outfit',Helvetica] font-light text-[#232323] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    min
                  </div>

                  <div className="flex-1">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000000}
                      min={0}
                      step={10000}
                      className="w-full"
                    />
                  </div>

                  <div className="relative w-fit [font-family:'Outfit',Helvetica] font-light text-[#232323] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    max
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 relative w-full lg:flex-1 lg:grow">
                <Label className="relative self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#232323] text-[16px] md:text-[18px] lg:text-[21.3px] tracking-[0] leading-[normal]">
                  Filter
                </Label>

                <Select>
                  <SelectTrigger className="flex h-[45px] lg:h-[51px] items-center justify-between px-4 py-3 lg:py-5 relative self-stretch w-full bg-[#eeeeee] rounded-lg border-0">
                    <SelectValue
                      placeholder={
                        <span className="opacity-50 [font-family:'Outfit',Helvetica] font-normal text-[#232323] text-sm lg:text-base text-left tracking-[0] leading-[normal] whitespace-nowrap">
                          Filter
                        </span>
                      }
                    />
                    <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="filter1">Filter 1</SelectItem>
                    <SelectItem value="filter2">Filter 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="flex items-center justify-center gap-2.5 px-4 py-3 lg:py-5 relative w-full lg:flex-1 lg:grow bg-[#232323] rounded-lg h-auto hover:bg-[#232323]/90">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold text-white text-sm lg:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
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