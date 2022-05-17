import React from "react";

interface props{
  item:any,
  t:any
}
export const ServiceCard: React.FC<props> = ({ item ,t}) => {
  return (
    <div
      className="flex flex-col gap-y-4 py-12 px-6 max-w-[300px] shadow-xl relative box-service-animation"

    >
      <img src={item.icon} alt={item.icon} width={30} height={30} loading="lazy"/>
      <strong>{t(item.title)}</strong>
      <span>{t(item.description)}</span>
    </div>


  );
};
