import React, { useState, useEffect, useRef } from "react";
import { IoLanguageOutline } from "react-icons/io5";
import setLanguage from "next-translate/setLanguage";
import clsx from "clsx";

interface props {
  t?: any;
  lang?: string;
}
export const Dropdown: React.FC<props> = ({ t, lang }) => {
  const [active, setActive] = useState<boolean>(false);
  const menuRef = useRef<any>();
  useEffect(() => {
    const listner = (e: Event) => {
      if (e.target === menuRef.current && !active) return;
      setActive((prev) => false);
    };
    document.addEventListener("click", listner);
    return () => document.removeEventListener("click", listner);
  }, []);
  return (
    <div className="relative">
      <div
        ref={menuRef}
        className="cursor-pointer sm:mx-6 w-[fit-content] p-2"
        onClick={(e) => setActive((prev) => !prev)}
      >
        <IoLanguageOutline
          style={{
            color: "#fff",
            fontSize: "25px",
            
            pointerEvents: "none",
          }}
        />
      </div>
      {active && (
        <div
          className={clsx(
            "flex flex-col absolute top-14 bg-transparent sm:bg-primary-text shadow-lg cursor-context-menu p-3 min-w-[100%] sm:min-w-[120px] gap-y-4 py-6 language-menu max-h-[200px]  z-20 sm:left-[-40px]",
            lang === "ar" && "rtl"
          )}
        >
          <div
            className="font-semibold text-white sm:text-black sm:hover:text-primary-bg cursor-pointer w-[fit-content]"
            onClick={async () => await setLanguage("ar")}
          >
            {t("ar")}
          </div>
          <div
            className="font-semibold text-white sm:text-black sm:hover:text-primary-bg cursor-pointer w-[fit-content]"
            onClick={async () => await setLanguage("en")}
          >
            {t("en")}
          </div>
        </div>
      )}
    </div>
  );
};
