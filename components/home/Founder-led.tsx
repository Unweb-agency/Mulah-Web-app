import Container from "@/containers/Container";
import React from "react";
import { Badge } from "../ui/badge";

const FounderLed = () => {
  return (
    <div className="relative w-full">
      <Container className="flex flex-col justify-center items-center py-10 md:py-16 lg:py-20 gap-4">
        <Badge className="uppercase bg-slate-100 text-neutral-500 font-semibold text-xs md:text-sm border border-neutral-600/20">
          Transparency
        </Badge>

        <div className="max-w-180 w-full flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#2C2C2C]">
            Founder-led. Thoughtfully built. Actively evolving.
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base mt-3.5 sm:mt-4 md:mt-4.5 lg:mt-5 leading-tight">
            Mülah is an early-stage product built with intention. The system is
            real, the direction is clear, and the work is ongoing.
          </p>
          <p className="text-gray-500 font-medium text-sm md:text-base mt-3.5 sm:mt-4 md:mt-4.5 lg:mt-5 leading-tight">
            We&apos;re learning alongside our users—continuously refining how
            financial intelligence and emotional awareness come together in
            practical, meaningful ways.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FounderLed;
