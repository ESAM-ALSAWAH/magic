import React from "react";

interface props {
  title: string;
  title2: string;
  image: string;
  children: React.ReactNode;
}
export const Why_us: React.FC<props> = ({ title, title2, image, children }) => {
  return (
    <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-around gap-x-4 gap-y-6 px-4 my-4 overflow-hidden">
      <div className="flex flex-col gap-y-4 max-w-[600px] " data-aos={"fade-left"} data-aos-duration="1000">
        <h4 className="text-[#f8bf58]">{title}</h4>
        <h3 className="text-[#0f1b3e] font-semibold">{title2}</h3>

        {children}
      </div>
      <div className="max-w-[500px] w-[100%] overflow-hidden" data-aos={"fade-right"} data-aos-duration="1000" >
        <img src={image} alt="" width={"100%"} loading="lazy" />
      </div>
    </div>
  );
};
