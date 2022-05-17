import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "@ui";
import useTranslation from "next-translate/useTranslation";
const About = () => {
  const { t } = useTranslation("about_us");
  return (
    <>  
    <Head>
      <title>Special One Company</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Navbar logo="/images/logo.svg" />
      <div className="container py-20">
        <div className="flex flex-row  items-center sm:justify-start gap-x-2 mb-5">
          <Image src="/images/logo.svg" width="100px" height="100px" loading="lazy" />
          <h4 className="titlePage">{t("about_us")}</h4>
        </div>
        <div className="flex flex-col justify-center sm:flex-row sm:justify-around items-center  gap-6 w-[100%]">
          <p className="max-w-[500px] w-[100%] sm:w-[50%] p-10 shadow-sm bg-white order-2 sm:order-1 font-medium">
           {t("about1")}
          </p>

          <img
            src="/images/about_1.png"
            className="w-[100%] sm:w-[30%] order-1 sm:order-2"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center sm:flex-row sm:justify-around items-center  gap-6 w-[100%] my-6">
          <img src="/images/about_2.png" className="w-[100%] sm:w-[30%]" loading="lazy" />
          <p className="max-w-[500px] w-[100%] sm:w-[50%] p-10 shadow-sm bg-white font-medium">
          {t("about2")}
          </p>
        </div>
      </div></>
  );
};

export default About;
