import clsx from "clsx";
import React from "react";

interface props {
  images: string[];
  title: string;
  title2: string;
  description: string;
  button: string;
  lang: string;
  id?: string;
}
export const DynamicSection: React.FC<props> = ({
  images = [],
  title,
  title2,
  description,
  button,
  lang,
  id,
}) => {
  return (
    <div className=" relative my-40 overflow-hidden" id={id}>
      <img
        src="/images/shape.svg"
        className={clsx(
          "absolute -right-20  -bottom-[200px] hidden md:block ",
          lang === "ar" && "-left-20 right-auto"
        )}
        style={{ zIndex: -1 }}
        loading="lazy"
      />
      <div className="container flex flex-col md:flex-row md:justify-between my-10 px-4 gap-20 z-50">
        <div
          className="flex flex-row items-center gap-x-10 min-w-w-[200px] flex-1"
          data-aos={"fade-right"}
          data-aos-duration="1000"
        >
          <div className="max-w-[250px] w-[100%]">
            <img src={images[0]} width="100%" loading="lazy" alt="image" />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="max-w-[250px] w-[100%]">
              <img src={images[1]} width="100%" loading="lazy" alt="image1" />
            </div>
            <div className="max-w-[250px] w-[100%]">
              <img src={images[2]} width="100%" loading="lazy" alt="image2" />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-y-4 flex-1 justify-center  "
          data-aos={"fade-left"}
          data-aos-duration="1000"
        >
          <h4 className="text-[#f8bf58]">{title}</h4>
          <h3 className="text-[#0f1b3e] font-semibold">{title2}</h3>
          <p>{description}</p>
          <button className="bg-primary-bg text-white font-semibold px-14 py-4 w-fit animation-button">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};