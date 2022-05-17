import Image from "next/image";
import React from "react";

export const Section2 = () => {
  return (
    <div className="container flex flex-wrap flex-row justify-center gap-y-10 gap-x-20 px-4 my-20">
      <div className="flex flex-col gap-y-4 max-w-[350px] zoom-div ">
        <div className="image-container">
          <Image
            src="/images/sections/section2/1.png"
            alt="image"
            layout="fill"
            className="zoom-image"
          />
        </div>

        <p className="text-[#d8ba71]">Villa in Ain Khaled</p>
      </div>
      <div className="flex flex-col gap-y-4 max-w-[350px] zoom-div">
        <div className="image-container">
          <Image
            src="/images/sections/section2/2.png"
            alt="image"
            layout="fill"
            className="zoom-image"
          />
        </div>
        <p className="text-[#d8ba71]">Lusail Townhouses</p>
      </div>
      <div className="flex flex-col gap-y-4 max-w-[350px] zoom-div">
        <div className="image-container">
          <Image
            src="/images/sections/section2/3.png"
            alt="image"
            layout="fill"
            className="zoom-image"
          />
        </div>
        <p className="text-[#d8ba71]">Al Thumama Villas</p>
      </div>
    </div>
  );
};
