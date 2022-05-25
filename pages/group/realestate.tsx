import type { NextPage } from "next";

import Head from "next/head";
import { Navbar, Footer } from "@ui";
import {
  Contact_us,
  DynamicSection,
  Why_us,
  ServiceCard,
  DynamicHero,
  SwiperSection
} from "@components";
import { services } from "@constants";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
const Section1_Images = [
  "/images/realestate/section1/1.png",
  "/images/realestate/section1/2.png",
  "/images/realestate/section1/3.png",
];
const hero_Images = [
  "/images/realestate/hero/1.png",
  "/images/realestate/hero/2.png",
  "/images/specialone/section1/3.png",
];
const Social_Link_Realestate = {
  facebook: "https://www.facebook.com/Magic.realestate.qa/?ref=pages_you_manage",
  instagram: "https://www.instagram.com/magic.realestate.qa/",
  snapchat: "https://www.snapchat.com/add/magicrealestate?share_id=shpUXVVcmWc&locale=en-US",
  linkedin: "https://www.linkedin.com/company/magic-realestate-qa/about/?viewAsMember=true",
  twiter: "https://twitter.com/MagicRealEstat1",
};
const Realestate: NextPage = () => {
  const { t, lang } = useTranslation("realestate");

  return (
    <>
      <Head>
        <title>{t("meta_title")}</title>

        <meta name="description" content={t("meta_description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar logo="/images/real_estate_logo.svg" />
      <DynamicHero
        button={t("section1_button")}
        title="Real estate"
        title2={t("hero_title2")}
        description={t("hero_description")}
        images={hero_Images}
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
      <div className="container ">
        <h5 className="text-[#f8bf58] text-center">
          {t("services_section_title")}
        </h5>
        <div className="flex flex-wrap flex-row justify-center gap-y-10 gap-x-20 px-4 my-20">
          {services?.map((item: any, index: number) => (
            <ServiceCard item={item} key={index} t={t} index={index} />
          ))}
        </div>
      </div>

      <SwiperSection />



      <div className="container flex flex-col md:flex-row gap-x-10 gap-y-8 md:justify-start my-20 ">
        <div className=" flex flex-col max-w-full md:max-w-[40%]  gap-y-10">
          <div className="max-w-[100%] max-h-[300px] overflow-hidden">
            <img src="/images/realestate/dream1.png" alt="image" className="w-[80%] h-[100%] object-cover m-auto md:m-0" />
          </div>
          <div className="flex flex-row justify-center gap-x-10 max-w-[100%] max-h-[250px] items-center overflow-hidden ">
            <img src="/images/realestate/dream2.png" alt="image" className="w-[60%] h-[100%] object-cover" />
            <img src="/images/realestate/rectangle.png" alt="image" className="w-[25%] h-[50%] object-cover" />
          </div>
        </div>
        <div className=" flex flex-col gap-y-10 text-[#0f1b3e] justify-center  lg:mx-20 w-[100%]">
          <h3 className="w-[100%]  text-[#0f1b3e]">{t("section_dream_title")}</h3>
          <div className="flex flex-row items-center gap-x-1 md:gap-x-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" >
            <img src="/images/realestate/home.png" className="w-[80px]" />
            <div className=" flex flex-col">
              <h6 className="font-medium text-[#0f1b3e]">{t("section_dream_1_title")}</h6>
              <span>{t("section_dream_1_description")}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-1 md:gap-x-10" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="300">
            <img src="/images/realestate/heart.png" className="w-[80px]" />
            <div className=" flex flex-col">
              <h6 className="font-medium text-[#0f1b3e]">{t("section_dream_2_title")}</h6>
              <span>{t("section_dream_2_description")}</span>
            </div>
          </div>

          <Link href="/contact" passHref={true} >
            <a className="bg-primary-bg text-white font-semibold px-14 py-4 w-fit animation-button self-start hover:text-white" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="600">

              {t("form_1")}
            </a></Link>



        </div>
      </div>
      <div className="our-partners ltr">
        <div className="container">

          <h3 className="text-[#0F1B3E]">Our Partners</h3>
          <div className="bg-[#fff6e7] py-10  gap-y-10 flex flex-col w-full">
            <div className="flex flex-wrap gap-x-4  justify-center  sm:flex-row sm:gap-x-[220px]  gap-y-10 m-auto w-[90%]">
              <div className="max-w-[25%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full  box-partners bg-white py-11 px-3 text-black">capstone real estate</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-white grid items-center ">
                  <img src="/images/rectangle_gold.svg" alt="shape" className=" absolute " />
                  <p className="z-20">1</p>
                </div>
              </div>
              <div className="max-w-[25%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Kaizen real estate
                </div>

                <div className="relative w-[100px] mt-4 h-[60px] text-white grid items-center ">
                  <img src="/images/rectangle_gold.svg" alt="shape" className=" absolute " />
                  <p className="z-20">2</p>
                </div>
              </div>
              <div className=" max-w-[100%]  sm:min-w-[200px] sm:max-w-[25%] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Shorek real estate</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-white grid items-center ">
                  <img src="/images/rectangle_gold.svg" alt="shape" className=" absolute " />
                  <p className="z-20">3</p>
                </div>
              </div>


            </div>
            <div className="flex flex-wrap gap-x-4 justify-center  sm:flex-row sm:gap-x-[120px] gap-y-10 m-auto w-[90%]">
              <div className="max-w-[25%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Debaj real estate</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-black grid items-center ">
                  <img src="/images/rectangle_white.svg" alt="shape" className=" absolute " />
                  <p className="z-20">4</p>
                </div>
              </div>
              <div className="max-w-[25%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Q Finder</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-black grid items-center ">
                  <img src="/images/rectangle_white.svg" alt="shape" className=" absolute " />
                  <p className="z-20">5</p>
                </div>
              </div>
              <div className="max-w-[100%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">La luna real estate</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-black grid items-center ">
                  <img src="/images/rectangle_white.svg" alt="shape" className=" absolute " />
                  <p className="z-20">6</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap  gap-x-4 justify-center  sm:flex-row sm:gap-x-[280px] gap-y-10 m-auto w-[90%]">
              <div className="max-w-[25%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Retaj real estate</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-white grid items-center ">
                  <img src="/images/rectangle_gold.svg" alt="shape" className=" absolute " />
                  <p className="z-20">7</p>
                </div>
              </div>
              <div className="max-w-[25%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Square real estate</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-white grid items-center ">
                  <img src="/images/rectangle_gold.svg" alt="shape" className=" absolute " />
                  <p className="z-20">8</p>
                </div>
              </div>
              <div className="  max-w-[100%] min-w-[40%] sm:min-w-[200px] text-center flex flex-col items-center gap-y-4">
                <div className="grid place-items-center w-full h-full box-partners bg-white py-11 px-3 text-black">Al Ahli group for real estate project</div>

                <div className="relative w-[100px] mt-4 h-[60px] text-white grid items-center ">
                  <img src="/images/rectangle_gold.svg" alt="shape" className=" absolute " />
                  <p className="z-20">9</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <Why_us
        title={t("why_title")}
        title2={t("why_title2")}
        image="/images/realestate/why-us.png"
      >
        <ul className="list-disc mt-6">
          <li>{t("why_list_1")}</li>
          <li className="my-4">{t("why_list_2")}</li>
          <li>{t("why_list_3")}</li>
        </ul>
      </Why_us>
      <Contact_us t={t} company="Real estate" Social_Link={Social_Link_Realestate} />
      <Footer logo="/images/real_estate_logo.svg" />
    </>
  );
};

export default Realestate;
