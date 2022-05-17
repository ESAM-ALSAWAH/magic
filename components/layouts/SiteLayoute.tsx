import React from "react";
import { Navbar, Footer } from "@ui";

export const SiteLayoute: React.FC<React.ReactNode | any> = ({
  children,
  dir,
}) => {
  return (
    <div
      style={{
        direction: dir,
      }}
    >
      {children}
    </div>
  );
};
