import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: "Home", isActive: true },
    { label: "Listings", isActive: false },
    { label: "About Us", isActive: false },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-full items-center relative">
        {/* Left section - Logo */}
        <div className="flex-1 flex justify-start">
          <div className="relative w-[200px] lg:w-[258px] h-[60px] lg:h-[88px] bg-[url(/figmaAssets/marci-metzger.png)] bg-cover bg-[50%_50%]" />
        </div>

        {/* Center section - Navigation */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-start gap-6 lg:gap-8">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`flex items-center gap-1 ${item.isActive ? "opacity-100" : "opacity-70"}`}
                  >
                    <span
                      className={`relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] ${item.isActive ? "font-bold" : "font-normal"} text-[#232323] text-sm lg:text-base tracking-[0] leading-5 whitespace-nowrap`}
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
          <Button className="inline-flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-5 bg-[#232323] rounded-lg h-auto hover:bg-[#232323]/90">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-white text-sm lg:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Contact Us
            </span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex w-full items-center justify-between relative">
        {/* Logo */}
        <div className="relative w-[180px] h-[50px] bg-[url(/figmaAssets/marci-metzger.png)] bg-cover bg-[50%_50%]" />
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6 text-[#232323]" />
          ) : (
            <MenuIcon className="h-6 w-6 text-[#232323]" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg z-40">
          <div className="flex flex-col p-4 space-y-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`text-left py-2 px-4 rounded-lg ${item.isActive ? "bg-gray-100 font-bold" : "font-normal"} [font-family:'Outfit',Helvetica] text-[#232323] text-base tracking-[0] leading-5`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full mt-4 bg-[#232323] rounded-lg hover:bg-[#232323]/90">
              <span className="[font-family:'Outfit',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
                Contact Us
              </span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};