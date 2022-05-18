import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from 'react-icons/ai'

interface props {
  images: string[];
  title: string;
  title2: string;
  description: string;
  button: string;
}
export const DynamicHero: React.FC<props> = ({
  images = [],
  title,
  title2,
  description,
  button,
}) => {


  const handleClick = () => {
    const top = document.getElementById("to-element")?.getBoundingClientRect().top
    window.scrollTo({
      behavior: "smooth",
      top: top,
    })
  }
  return (
    <div className="hero-section container flex flex-col md:flex-row md:justify-between mb-20 px-4 gap-20 z-50 ">
      <div className="flex flex-col gap-y-4 flex-1 justify-center order-2 md:order-1">
        <h4 className="text-[#f8bf58]">{title}</h4>
        <h3 className="text-[#0f1b3e] font-semibold">{title2}</h3>
        <p>{description}</p>
        <button className="bg-primary-bg text-white font-semibold px-14 py-3 w-fit animation-button">
          {button}
        </button>
        <div className="w-[40px] h-[40px] rotate-45 bg-[#f8bf58] grid place-items-center mt-10 cursor-pointer " onClick={handleClick}>
          <AiOutlineArrowDown className="  font-bold -rotate-45 bounce" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-10 min-w-w-[200px] flex-1 order-1 md:order-2  py-6 sm:py-20 px-4">
        <div className="image-container">
          <Image
            className="custome-image"
            src={images[0]}
            layout="fill"

            priority
          /></div>
        <div className="flex columns-3xs gap-x-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="image-container">
            <Image
              className="custome-image"
              src={images[1]}
              layout="fill"

              priority
            /></div>


          <div className="image-container">
            <Image
              className="custome-image"
              src={images[2]}
              layout="fill"

              priority
            /></div>

        </div>
      </div>
    </div>
  );
};
