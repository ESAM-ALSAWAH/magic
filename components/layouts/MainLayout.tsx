import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { SiteLayoute } from "./SiteLayoute";

const direction: any = {
  en: "ltr",
  ar: "rtl",
};
export const MainLayout: React.FC<any> = ({ children }) => {
  const { pathname } = useRouter();
  const { locale, defaultLocale } = useRouter();
  const [dir, setDir] = useState<any>();
  useEffect(persistLocaleCookie, [locale, defaultLocale]);
  function persistLocaleCookie() {
    setDir(direction[String(locale)]);
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000;
    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
  }
  if (pathname.startsWith("/404"))
    return (
      <div
        style={{
          direction: dir,
        }}
      >
        {children}
      </div>
    );
  return <SiteLayoute dir={dir}>{children}</SiteLayoute>;
};
