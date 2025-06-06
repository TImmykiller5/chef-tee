/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";

const SectionOne = () => {
  const date = new Date();
  return (
    <div className="h-screen w-screen max-h-screen items-center overflow-x-hidden overflow-y-visible pointer-events-none justify-center flex relative">
      <img
        src="/hero/hero_1.png"
        alt="Hero image 1"
        style={{ filter: "brightness(50%)" }}
        className="absolute bottom-0 z-10 w-screen h-screen object-cover pointer-events-none"
      />
      <div className="z-10 flex flex-col items-center justify-center gap-5">
        <button className="border flex pointer-events-auto items-center justify-center gap-3 w-fit border-white rounded-full p-1">
          <span className="bg-chef-red-foreground text-chef-red rounded-full font-medium px-2.5 py-1">
            {format(date, "d/M/yyyy")}
          </span>
          <span className="font-semibold">Upcoming Event</span>
          <ChevronRight color="white" />
        </button>
        <span className="gold-shimmer font-bold lg:text-7xl text-5xl text-center font-meshed-display">
          Experience the Ultimate Easter Foodgasm
        </span>
        <div className=" w-full px-4 ">
          <p className=" text-center  text-white lg:text-2xl text-base">
            From the first bite to the last sip, every dish is designed to
            ignite your senses and leave you craving more.
          </p>
        </div>
        <div className="mt-12 flex justify-center items-center flex-col md:flex-row gap-3 w-full px-4">
          <Button
            className="text-lg pointer-events-auto p-2.5 h-fit w-full md:w-fit"
            variant={"chef-tee-1"}
          >
            Grab Your Ticket <ArrowRight color="white" />
          </Button>
          <Button
            className="text-lg p-2.5 h-fit w-full md:w-fit pointer-events-auto"
            variant={"chef-tee-2"}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
