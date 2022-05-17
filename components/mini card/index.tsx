import React from "react";

interface props {
  icon: string;
  title: string;
}
export const MiniCard: React.FC<props> = ({ icon, title }) => {
  return (
    <div className="flex flex-col gap-y-4 py-12 px-2 max-w-[300px] shadow-md relative box-service-animation hover:-translate-y-3">
      <img src={icon} alt={icon} width={180} height={200} className="m-auto" loading="lazy"/>
      <p className="text-center">{title}</p>
    </div>
  );
};
