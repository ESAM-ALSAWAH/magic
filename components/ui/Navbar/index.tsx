import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import clsx from "clsx";
import { Dropdown } from "./Dropdown";
import { LinkDropdown } from "./LinkDropdown";
import useTranslation from "next-translate/useTranslation";
interface props {
  active: boolean;
  t?: any;
  lang: string;
}
const NavMobile: React.FC<props> = ({ active, t, lang }) => {
  const { pathname } = useRouter();
  return (
    <div
      className={clsx(
        "sm:hidden px-4 fixed h-[100vh] bg-primary-bg top-0 ",
        "mobile-nav z-50",
        lang === "ar" && "rtl",
        !active && "hide"
      )}
    >
      <div className="flex items-center justify-between">
        <Image src="/images/logo.svg" width="50px" height="50px" />
      </div>
      <div className="flex flex-col mt-12 mb-6 gap-x-6 gap-y-5">

        <Link href='/'>
          <a
            className={clsx(
              "text-primary-text w-[fit-content] p-1 capitalize",
              pathname === '/' && "text-secondary-bg"
            )}
          >
            {t('home')}
          </a>
        </Link>
        <Link href='/about'>
          <a
            className={clsx(
              "text-primary-text w-[fit-content] p-1 capitalize",
              pathname === '/about' && "text-secondary-bg"
            )}
          >
            {t('about')}
          </a>
        </Link>
        <LinkDropdown t={t} lang={lang} />
        <Link href='/contact'>
          <a
            className={clsx(
              "text-primary-text w-[fit-content] p-1 capitalize",
              pathname === '/contact' && "text-secondary-bg"
            )}
          >
            {t('contact')}
          </a>
        </Link>
       

      </div>

      <Dropdown t={t} lang={lang} />

    </div>
  );
};
const MenuIcon = ({ ...rest }) => (
  <div {...rest}>
    <span className="w-[20px] h-[2px] bg-primary-text block"></span>
    <span className="w-[20px] h-[2px] bg-primary-text block my-1"></span>
    <span className="w-[20px] h-[2px] bg-primary-text block"></span>
  </div>
);
interface propsNavbar {
  logo: string;
}
export const Navbar: React.FC<propsNavbar> = ({ logo }) => {
  const { pathname } = useRouter();
  const { t, lang } = useTranslation("nav");

  const [active, setActive] = useState<boolean>(false);
  return (
    <nav className="nav ltr bg-primary-bg ">
      <div className="container flex  items-center py-3  gap-y-5 px-2">
        <Image src={logo} width="100px" height="70px" />

        <div
          className={clsx(
            "hidden sm:flex  items-center  mx-auto gap-x-6 gap-y-5",
            lang === "ar" && "rtl"
          )}
        >
          <Link href='/'>
            <a
              className={clsx(
                "text-primary-text w-[fit-content] p-1 capitalize",
                pathname === '/' && "text-secondary-bg"
              )}
            >
              {t('home')}
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={clsx(
                "text-primary-text w-[fit-content] p-1 capitalize",
                pathname === '/about' && "text-secondary-bg"
              )}
            >
              {t('about')}
            </a>
          </Link>
          <LinkDropdown t={t} lang={lang} />
          <Link href='/contact'>
            <a
              className={clsx(
                "text-primary-text w-[fit-content] p-1 capitalize",
                pathname === '/contact' && "text-secondary-bg"
              )}
            >
              {t('contact')}
            </a>
          </Link>

        </div>


        <div className="hidden sm:block">
          <Dropdown t={t} lang={lang} />
        </div>

        <MenuIcon
          className={clsx(
            "sm:hidden cursor-pointer flex flex-col  items-end z-10",
            active && "menuIconActive"
          )}
          style={{
            marginInlineStart: "auto",
          }}
          onClick={(e: any) => setActive((prev) => !prev)}
        />
      </div>

      <NavMobile active={active} t={t} lang={lang} />
    </nav>
  );
};
