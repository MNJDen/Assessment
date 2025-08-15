import React, { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export const FeaturedPropertiesSection = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "start",
    slidesToScroll: 1
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const properties = [
    {
      id: 1,
      image: "/figmaAssets/property-image.png",
      title: "123 Elm Street, Springfield",
      description:
        "Welcome home! This charming property is more than just a house—it's the start of your next chapter.",
      bathrooms: 2,
      bedrooms: 2,
      sqft: 2000,
      bathroomIcon: "/figmaAssets/bathtub.png",
      bedroomIcon: "/figmaAssets/bed.png",
      sqftIcon: "/figmaAssets/guardian.png",
    },
    {
      id: 2,
      image: "/figmaAssets/property-image-1.png",
      title: "456 Maple Avenue, Springfield",
      description:
        "Step into elegance with this beautifully designed house perfect for family gatherings.",
      bathrooms: 3,
      bedrooms: 4,
      sqft: 2500,
      bathroomIcon: "/figmaAssets/bathtub-1.png",
      bedroomIcon: "/figmaAssets/bed-1.png",
      sqftIcon: "/figmaAssets/guardian-1.png",
    },
    {
      id: 3,
      image: "/figmaAssets/property-image-2.png",
      title: "789 Oak Lane, Springfield",
      description:
        "Discover tranquility in this serene home surrounded by lush greenery and modern amenities.",
      bathrooms: 2,
      bedrooms: 3,
      sqft: 1800,
      bathroomIcon: "/figmaAssets/bathtub-2.png",
      bedroomIcon: "/figmaAssets/bed-2.png",
      sqftIcon: "/figmaAssets/guardian-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start relative">
      <header className="flex items-center justify-between w-full mb-10">
        <div className="flex flex-col items-start gap-3">
          <h2 className="[font-family:'Domine',Helvetica] font-bold text-[#232323] text-[50.5px] tracking-[0] leading-[normal]">
            Top Properties
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-base text-[#232323] tracking-[0] leading-[normal]">
            Discover our featured listings.
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="rounded-full border-[#232323] text-[#232323] hover:bg-[#232323] hover:text-white disabled:opacity-50"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="rounded-full border-[#232323] text-[#232323] hover:bg-[#232323] hover:text-white disabled:opacity-50"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Embla Carousel */}
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {properties.map((property) => (
            <div key={property.id} className="embla__slide flex-[0_0_auto] min-w-[400px] pr-6">
              <Card className="flex flex-col items-start gap-5 border-none shadow-none bg-transparent w-full h-full">
                <CardContent className="p-0 w-full">
                  <div
                    className="w-full h-[385px] rounded-xl bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${property.image})` }}
                  />

                  <div className="flex flex-col items-start gap-5 mt-5 w-full">
                    <div className="flex flex-col items-start gap-3 w-full">
                      <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#232323] text-[28.4px] tracking-[0] leading-[normal]">
                        {property.title}
                      </h3>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#232323] text-base tracking-[0] leading-[normal]">
                        {property.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 opacity-70">
                      <Badge
                        variant="outline"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-solid border-[#232323] bg-transparent"
                      >
                        <img
                          className="w-4 h-4"
                          alt="Bathtub"
                          src={property.bathroomIcon}
                        />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#232323] text-sm tracking-[0] leading-[normal]">
                          {property.bathrooms} Bathroom
                        </span>
                      </Badge>

                      <Badge
                        variant="outline"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-solid border-[#232323] bg-transparent"
                      >
                        <img
                          className="w-4 h-4"
                          alt="Bed"
                          src={property.bedroomIcon}
                        />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#232323] text-sm tracking-[0] leading-[normal]">
                          {property.bedrooms} Bedroom
                        </span>
                      </Badge>

                      <Badge
                        variant="outline"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-solid border-[#232323] bg-transparent"
                      >
                        <img
                          className="w-4 h-4"
                          alt="Guardian"
                          src={property.sqftIcon}
                        />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#232323] text-sm tracking-[0] leading-[normal]">
                          {property.sqft} sq ft
                        </span>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};