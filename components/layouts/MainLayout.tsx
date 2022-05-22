import React, { useEffect, useState } from "react";

import clsx from "clsx";
import { useRouter } from "next/router";
const direction: any = {
  en: "ltr",
  ar: "rtl",
};
export const MainLayout: React.FC<any> = ({ children }) => {
  const { locale, defaultLocale } = useRouter();
  const [dir, setDir] = useState<any>();
  const [lang,setLang] = useState<string>("");
  useEffect(persistLocaleCookie, [locale, defaultLocale]);
  function persistLocaleCookie() {
    setDir(direction[String(locale)]);
    setLang((prev:String)=>String(locale));
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000;
    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
  }

  return <div dir={dir} className={clsx("App",lang)}>{children}</div>;
};
