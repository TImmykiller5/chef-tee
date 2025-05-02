import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const SectionEight = () => {
  return (
    <section className="bg-[#1A1A1A] my-40 py-20 px-20">
      <h2 className="font-meshed-display text-center max-w-3xl font-bold text-5xl mb-16 w-fit mx-auto">
        Exceptional Catering & Unforgettable Food Experiences
      </h2>
      <div className="flex gap-6 ">
        <div className="flex-1 h-[772px] w-full p-8 rounded-md bg-[#333333] overflow-hidden relative">
          <h4 className="font-meshed-display font-bold text-4xl mg-2">
            Catering Services
          </h4>
          <span className="text-lg block">
            From intimate gatherings to grand celebrations, we bring
            restaurant-quality flavors to your event. Whether it’s a corporate
            luncheon, wedding, birthday, or private dinner, our expert chefs
            craft custom menus tailored to your taste and theme.
          </span>
          <Button className="mt-2 h-fit bg-transparent py-3 px-6 dark:text-white text-black border border-black  dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            Request Services <ArrowRight />
          </Button>
          <Image
            src="/sectionEight/image1.jpg"
            alt="image"
            objectFit="cover"
            width={408}
            height={577}
            className="w-[408px] h-[577px] object-cover absolute -bottom-32  right-16 rounded-3xl rotate-[7.08deg]"
          />
          <Image
            src="/sectionEight/image2.jpg"
            alt="image"
            objectFit="cover"
            width={312}
            height={376}
            className="w-[312px] h-[376px] object-cover absolute -bottom-16  left-10 border-[#D7D7D7] border rounded-3xl rotate-[-5.82deg]"
          />
        </div>
        <div className="flex-1 h-[772px] w-full p-8 rounded-md bg-[#333333] overflow-hidden relative">
          <h4 className="font-meshed-display font-bold text-4xl mg-2">
            Food Events
          </h4>
          <span className="text-lg block">
            We don’t just serve food—we create immersive culinary experiences.
            From exclusive pop-up dinners to themed tasting nights, our food
            events are crafted for those who appreciate bold flavors and
            unforgettable moments.
          </span>
          <Button className="mt-2 h-fit bg-transparent py-3 px-6 dark:text-white text-black border border-black  dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            Buy Ticket <ArrowRight />
          </Button>
          <Image
            src="/sectionEight/image3.jpg"
            alt="image"
            objectFit="cover"
            width={408}
            height={577}
            className="w-[408px] h-[577px] object-cover absolute -bottom-32  right-16 rounded-3xl rotate-[7.08deg]"
          />
          <Image
            src="/sectionEight/image4.jpg"
            alt="image"
            objectFit="cover"
            width={312}
            height={376}
            className="w-[312px] h-[376px] object-cover absolute -bottom-16  left-10 border-[#D7D7D7] border rounded-3xl rotate-[-5.82deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
