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
      <NavigationBarSection />
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <PropertySearchSection />
      <FeaturedPropertiesSection />
      <OfficeTitleSection />
      <OfficeDetailsSection />
      <NewsletterSignupSection />
      <FooterSection />
    </div>
  );
};
