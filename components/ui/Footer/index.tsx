import React from "react";

export const Footer = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 px-4">
      <div className="flex flex-col items-center bg-red-200">1</div>
      <div className="flex flex-col items-center bg-blue-200">1</div>
      <div className="flex flex-col items-center bg-green-200">1</div>
      <div className="flex flex-col items-center  md:col-start-2 lg:col-start-[auto] md:items-start lg:items-center bg-yellow-200">
        1
      </div>
      <div className="flex flex-col items-center  md:items-start lg:items-center  ">
        1
      </div>
    </div>
  );
};
