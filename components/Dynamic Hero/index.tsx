import Image from "next/image";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

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
    const top = document.getElementById("to-element")?.getBoundingClientRect()
      .top;
    window.scrollTo({
      behavior: "smooth",
      top: top,
    });
  };
  return (
    <div className="hero-section container flex flex-col md:flex-row md:justify-between mb-20 px-4 gap-20 z-50 overflow-hidden w-[100%]">
      <div className="flex flex-col gap-y-4 flex-1 justify-center order-2 md:order-1">
        <h4 className="text-[#f8bf58]">{title}</h4>
        <h3 className="text-[#0f1b3e] font-semibold">{title2}</h3>
        <p>{description}</p>
        <button
          className="bg-primary-bg text-white font-semibold px-14 py-3 w-fit animation-button"
          onClick={handleClick}
        >
          {button}
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-10 min-w-[200px] flex-1 order-1 md:order-2  py-6 sm:py-20 px-4">
        <div className="max-w-[450px] w-[100%] max-h-[250px] overflow-hidden">
          <img
            className="hero-image"
            data-aos="fade-down"
            data-aos-duration="1000"
            src={images[0]}
            alt="image-hero"
            width="100%"
            loading="lazy"
          />
        </div>
        <div className="flex justify-center  gap-x-4 mt-6">
          <div
            className="max-w-[250px] w-[100%]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <img
              className="hero-image"
              src={images[1]}
              alt="image-hero"
              width="100%"
              loading="lazy"
            />
          </div>

          <div
            className="max-w-[250px] w-[100%]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <img
              className="hero-image"
              src={images[2]}
              alt="image-hero"
              width="100%"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
