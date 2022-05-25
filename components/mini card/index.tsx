import React from "react";

interface props {
  icon: string;
  title: string;
  index: number;
}
export const MiniCard: React.FC<props> = ({ icon, title, index }) => {
  return (
    <div
      className="flex flex-col gap-y-4 py-12 px-2 max-w-[300px] min-w-[250px] w-[100%]  shadow-md relative box-service-animation hover:-translate-y-3"
      data-aos-duration="1000"
      data-aos="zoom-in"
      data-aos-delay={40 * index}
    >
      <img
        src={icon}
        alt={icon}
        width={250}
        height={200}
        className="m-auto"
        loading="lazy"
      />
      <p className="text-center capitalize">{title}</p>
    </div>
  );
};
