import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <section className="bg-[#1A1A1A] my-40 py-20">
      <h2 className="font-meshed-display font-bold md:text-6xl text-3xl mb-14 w-fit mx-auto">
        Gallery - Past Events
      </h2>
      <div className="flex flex-nowrap gap-4 overflow-x-scroll mb-10">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div
              className="min-w-[320px] overflow-hidden rounded-3xl flex-1 h-[320px]"
              key={index}
            >
              <Image
                width={320}
                height={320}
                objectFit="cover"
                className="h-full w-full object-cover"
                src={`/sectionSix/image${index + 1}.jpg`}
                alt="Gallery Image"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-nowrap gap-4 overflow-x-scroll">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div
              className="min-w-[320px] overflow-hidden rounded-3xl flex-1 h-[320px]"
              key={index}
            >
              <Image
                width={320}
                height={320}
                objectFit="cover"
                className="h-full w-full object-cover"
                src={`/sectionSix/image${8 - index}.jpg`}
                alt="Gallery Image"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionSix;
