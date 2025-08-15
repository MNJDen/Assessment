import React from "react";

export const OfficeTitleSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-3 relative">
      <h2 className="[font-family:'Domine',Helvetica] font-bold text-[50.5px] text-[#232323] tracking-[0] leading-[normal]">
        Our Office
      </h2>

      <p className="[font-family:'Outfit',Helvetica] font-normal text-base text-[#232323] tracking-[0] leading-[normal]">
        Appointments outside office hours available upon request.
      </p>
    </section>
  );
};
