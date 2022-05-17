import React from "react";

export const Section1 = () => {
  return (
    <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-around gap-x-4 gap-y-6 px-4 my-4 ">
      <div className="flex flex-col gap-y-4 ">
        <p className="text-[#f8bf58]">why us</p>
        <h3 className="text-[#0f1b3e] font-semibold">
          We Make The Magic Happen
        </h3>
        <ul className="list-disc">
          <li>
            Our team of experts will help you with a variety of real estate
            services.
          </li>
          <li>
            We help individuals rent or buy a property that met their needs.
          </li>
          <li>
            We serve real estate agents by providing all kinds of services that
            could make their work easier.
          </li>
        </ul>
      </div>
      <div className="max-w-[500px] w-[100%] overflow-hidden">
        <img src="/images/sections/section1.png" alt="" width={"100%"} />
      </div>
    </div>
  );
};
