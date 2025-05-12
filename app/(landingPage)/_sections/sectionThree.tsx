/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionThree = () => {
  return (
    <div className=" px-4 w-full">
      <div className=" max-w-7xl  h-[800px] !overflow-x-auto mx-auto my-16 py-24  bg-[#1A1A1A] rounded-3xl border border-[#606060]">
        <div className="grid grid-cols-4  min-w-[1000px] w-full  grid-rows-7 gap-6  grid-flow-col   ">
          <div className="row-span-4">
            <img
              alt="image"
              src={"/sectionThree/one.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3">
            <img
              alt="image"
              src={"/sectionThree/five.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3">
            <img
              alt="image"
              src={"/sectionThree/two.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-4">
            <img
              alt="image"
              src={"/sectionThree/six.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-4">
            <img
              alt="image"
              src={"/sectionThree/three.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3">
            <img
              alt="image"
              src={"/sectionThree/seven.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3">
            <img
              alt="image"
              src={"/sectionThree/four.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-4">
            <img
              alt="image"
              src={"/sectionThree/eight.png"}
              className="w-[250px] h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
