import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", isActive: true },
    { label: "Listings", isActive: false },
    { label: "About Us", isActive: false },
  ];

  return (
    <nav className="flex w-full items-center relative">
      {/* Left section - Logo */}
      <div className="flex-1 flex justify-start">
        <div className="relative w-[258px] h-[88px] bg-[url(/figmaAssets/marci-metzger.png)] bg-cover bg-[50%_50%]" />
      </div>

      {/* Center section - Navigation */}
      <div className="flex-1 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`flex items-center gap-1 ${item.isActive ? "opacity-100" : "opacity-70"}`}
                >
                  <span
                    className={`relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] ${item.isActive ? "font-bold" : "font-normal"} text-[#232323] text-base tracking-[0] leading-5 whitespace-nowrap`}
                  >
                    {item.label}
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right section - Contact Button */}
      <div className="flex-1 flex justify-end">
        <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-5 bg-[#232323] rounded-lg h-auto hover:bg-[#232323]/90">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Contact Us
          </span>
        </Button>
      </div>
    </nav>
  );
};
