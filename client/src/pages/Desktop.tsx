import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { NewsletterSignupSection } from "./sections/NewsletterSignupSection";
import { OfficeDetailsSection } from "./sections/OfficeDetailsSection";
import { OfficeTitleSection } from "./sections/OfficeTitleSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { PropertySearchSection } from "./sections/PropertySearchSection";

const galleryImages = [
  {
    src: "/figmaAssets/gallery-image.png",
    alt: "Gallery image",
  },
  {
    src: "/figmaAssets/gallery-image-1.png",
    alt: "Gallery image",
  },
  {
    src: "/figmaAssets/gallery-image-2.png",
    alt: "Gallery image",
  },
  {
    src: "/figmaAssets/gallery-image-3.png",
    alt: "Gallery image",
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 px-8 md:px-12 lg:px-16 xl:px-20 py-4">
        <NavigationBarSection />
      </div>
      <div className="px-8 md:px-12 lg:px-16 xl:px-20 space-y-16 md:space-y-20 lg:space-y-24 mb-16 md:mb-20 lg:mb-24">
        <HeroSection />
        <AboutUsSection />
        <OurServicesSection />
        <PropertySearchSection />
        <FeaturedPropertiesSection />
        <OfficeDetailsSection />
        <NewsletterSignupSection />
      </div>
      <FooterSection />
    </div>
  );
};
