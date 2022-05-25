import type { NextPage } from "next";
import Head from "next/head";
import { SwiperSlide } from "swiper/react";
import { Navbar, Footer } from "@ui";
import {
  Contact_us,
  DynamicSection,
  Why_us,
  MiniCard,
  DynamicHero,
  SwiperImage,
  
} from "@components";
import { Sparkling_services, Premium_Services } from "@constants";
import useTranslation from "next-translate/useTranslation";

const HeroBackground=[
  "/images/specialone/hero/1.png",
  "/images/specialone/hero/2.png",
  "/images/specialone/hero/3.png",
]
const Section1_Images = [
  "/images/specialone/section1/1.png",
  "/images/specialone/section1/2.png",
  "/images/specialone/section1/3.png",
];

const Social_Link_Specialone = {
  facebook: "https://www.facebook.com/special.one.qa/?ref=pages_you_manage",
  instagram: "https://www.instagram.com/special.one.qa/",
  snapchat: "https://www.snapchat.com/add/specialone.qa?share_id=zYnEbxA1K0w&locale=en-US",
  linkedin: "https://www.linkedin.com/company/special-one-qa/about/?viewAsMember=true",
  twiter: "https://twitter.com/Special_one_qa",
};
const Specialone: NextPage = () => {
  const { t, lang } = useTranslation("specialone");

  return (
    <>
      <Head>
      <title>{t("meta_title")}</title>
        
        <meta name="description" content={t("meta_description")}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar logo="/images/special_one_logo.svg" />
      <DynamicHero
        button={t("section1_button")}
        title="Special One"
        title2={t("hero_title2")}
        description={t("hero_description")}
        images={HeroBackground}
      />
        <DynamicSection
        images={Section1_Images}
        title={t("section1_title")}
        title2={t("section1_seconde_title")}
        description={t("section1_description")}
        button={t("section1_button")}
        lang={lang}
        id="to-element"
      />

      <div className="container px-4 my-20">
        <h4 className="text-[#f8bf58] text-center sm:px-4 ">
          {t("sparkling_services_title")}
        </h4>
        <div className="flex flex-wrap flex-row justify-center gap-y-10 gap-x-4 px-4 my-20">
          {Sparkling_services?.map((item: any, index: number) => (
            <MiniCard
              key={index}
              icon={item.icon}
              title={t(item.title)}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="relative py-[50px]">
        <img
          src="/images/shape.svg"
          alt="shape"
          className="absolute -left-[200px] -bottom-[200px] "
          style={{ zIndex: -1 }}
          loading="lazy"
        />
      </div>
      <div className="container px-4 my-20">
        <h4 className="text-[#f8bf58] text-center sm:px-4 ">
          {t("premium_services_title")}
        </h4>
        <div className="flex flex-wrap flex-row justify-center gap-y-10 gap-x-4 px-4 my-20">
          {Premium_Services?.map((item: any, index: number) => (
            <MiniCard
              key={index}
              icon={item.icon}
              title={t(item.title)}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="container px-8 flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="flex flex-col">
          <h4 className="text-[#f8bf58]">{t("work_title")}</h4>
          <ul className="list-disc mt-6 text-xl">
            <li>{t("work_1")}</li>
            <li className="my-4">{t("work_2")}</li>
            <li>{t("work_3")}</li>
          </ul>
        </div>
        <SwiperImage>
          <SwiperSlide>
            <img
              src="/images/specialone/slider/1.png"
              alt="why us"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/specialone/slider/2.png"
              alt="why us"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/specialone/slider/3.png"
              alt="why us"
              loading="lazy"
            />
          </SwiperSlide>
        </SwiperImage>
      </div>
  {/*     <div className="container px-4 flex flex-col items-center my-40">
        <h3 className="text-[#f8bf58] text-center">{t("Partner_title")}</h3>
        <div className="relative py-8 px-4 shadow-lg my-8 max-w-[800px] m-auto ">
          <div className="p-6 bg-[#fff6e7]">
            <p className="text-center">{t("Partner_description")}</p>
          </div>
        </div>
        <img src="/images/shape.svg" alt="shape" loading="lazy" />
      </div> */}
      <Why_us
        title={t("why_title")}
        title2={t("why_title2")}
        image="/images/specialone/why-us.png"
      >
        <p>{t("why_description")}</p>
      </Why_us>
      <Contact_us t={t} company="Special One" Social_Link={Social_Link_Specialone} />
      <Footer logo="/images/special_one_logo.svg" />
    </>
  );
};

export default Specialone;
