import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "@ui";
import useTranslation from "next-translate/useTranslation";
const About = () => {
  const { t } = useTranslation("about_us");
  return (
    <>
      <Head>
        <title>{t("about_us")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar logo="/images/logo.svg" />
      <div className="bg-about-us overflow-hidden">
        <div className="container py-20 overflow-hidden">
          <div className="flex flex-row  items-center sm:justify-start  gap-x-2 mb-5" >

            <h4 className="titlePage mx-auto sm:mx-0 lg:mx-[100px]">{t("about_us")}</h4>
          </div>
          <div className="flex flex-col justify-center sm:flex-row sm:justify-around  items-center mb-[100px]  gap-6 w-[100%] overflow-hidden" data-aos={"fade-right"}
            data-aos-duration="1000">
            <p className="max-w-[500px] w-[100%] sm:w-[50%] p-4 sm:p-10 shadow-sm bg-white order-2 sm:order-1 font-medium">
              {t("about1")}
            </p>

            <img
              src="/images/about_1.png"
              alt="about"
              className="w-[100%] sm:w-[30%] order-1 sm:order-2"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center sm:justify-around sm:flex-row  items-center   gap-6 w-[100%] my-6 overflow-hidden " data-aos={"fade-left"}
            data-aos-duration="1000">
            <img
              src="/images/about_2.png"
              alt="about"
              className="w-[100%] sm:w-[30%]"
              loading="lazy"
            />
            <p className="max-w-[500px] w-[100%] sm:w-[50%] p-4 sm:p-10 shadow-sm bg-white font-medium">
              {t("about2")}
            </p>
          </div>
        </div>
      </div>
      <Footer logo="/images/logo.svg" />
    </>
  );
};

export default About;
