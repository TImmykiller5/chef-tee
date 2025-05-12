import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const SectionFive = () => {
  return (
    <section className="md:max-w-[1440px] w-full px-4 mx-auto my-32 pt-32">
      <div className="flex md:flex-row flex-col gap-20 mt-24">
        <div className="flex-1 my-auto">
          <h2 className="font-meshed-display font-bold text-5xl mb-3">
            Food Events
          </h2>
          <p className="mb-10">
            A masterfully curated lineup of dishes designed to surprise and
            delight.
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Note: Please order at least 24hours before the expected delivery
            date.
          </p>
          <Button className="mt-10 h-fit md:w-fit w-full bg-transparent py-3 px-6 dark:text-white text-black border border-black  dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            Vuew Events <ArrowRight />
          </Button>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full object-cover"
            src="/sectionFour/image1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
