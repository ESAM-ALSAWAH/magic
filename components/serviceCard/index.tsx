import React from "react";

interface props {
  item: any;
  t: any;
  index: number;
}
export const ServiceCard: React.FC<props> = ({ item, t, index }) => {
  return (
    <div
      className="flex flex-col gap-y-4 py-12 px-6 max-w-[300px] shadow-xl relative box-service-animation"
      data-aos-duration="1000"
      data-aos="zoom-in"
      data-aos-delay={40 * index}
    >
      <img
        src={item.icon}
        alt={item.icon}
        width={30}
        height={30}
        loading="lazy"
      />
      <strong>{t(item.title)}</strong>
      <span>{t(item.description)}</span>
    </div>
  );
};
