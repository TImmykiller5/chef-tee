import Image from "next/image";
import React from "react";

const SectionSeven = () => {
  return (
    <section className="my-40 py-20">
      <h2 className="font-meshed-display text-center font-bold md:text-6xl text-3xl mb-14 w-fit mx-auto">
        Our happy customers say about us
      </h2>
      <div className="flex gap-2 px-20">
        <div className="p-6 bg-[#1A1A1A] rotate-[-6.21deg] rounded-xl border border-[#606060] flex-1 h-[288px] flex flex-col justify-between">
          <span className="leading-6 ellipsis-multiline">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.&quot;
          </span>
          <div>
            <div className="h-[1px] bg-[#606060] my-4 mt-auto" />
            <div className="flex items-center justify-between ">
              <div className="flex flex-col gap-1">
                <span className="font-bold">Name Surname</span>
                <span>Position, Company name</span>
              </div>
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  width={40}
                  height={40}
                  src="/sectionSeven/image1.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#1A1A1A] rotate-[-2.25deg] rounded-xl border border-[#606060] flex-1 h-[288px] flex flex-col justify-between">
          <span className="leading-6 ellipsis-multiline">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.&quot;
          </span>
          <div>
            <div className="h-[1px] bg-[#606060] my-4 mt-auto" />
            <div className="flex items-center justify-between ">
              <div className="flex flex-col gap-1">
                <span className="font-bold">Name Surname</span>
                <span>Position, Company name</span>
              </div>
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  width={40}
                  height={40}
                  src="/sectionSeven/image1.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#1A1A1A] rotate-[6.07deg] rounded-xl border border-[#606060] flex-1 h-[288px] flex flex-col justify-between">
          <span className="leading-6 ellipsis-multiline">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.&quot;
          </span>
          <div>
            <div className="h-[1px] bg-[#606060] my-4 mt-auto" />
            <div className="flex items-center justify-between ">
              <div className="flex flex-col gap-1">
                <span className="font-bold">Name Surname</span>
                <span>Position, Company name</span>
              </div>
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <Image
                  width={40}
                  height={40}
                  src="/sectionSeven/image1.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
