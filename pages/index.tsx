import { useRef } from 'react'
import { Navbar, Footer } from "@ui";
import { HeroHome } from '@components'
import type { NextPage } from "next";
import emailjs from '@emailjs/browser';
import Head from "next/head";
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  const form = useRef<any>();
  const handleSubmit = (e: any): void => {
    e.preventDefault();

    emailjs.sendForm('service_l60tiwf', 'template_nlpgglg', form.current, 'ksOP34XIYWzs5XwUw')
      .then((result) => {
        toast.success(result.text);
        form.current.reset();
      }, (error) => {
        toast.error(error.text);
      });
  }
  return (
    <>
      <Head>
        <title>{t("meta_title")}</title>

        <meta name="description" content={t("meta_description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar logo="/images/logo.svg" />
      <HeroHome text={t("hero")} />
      <div className="about-us bg-[#040D20] overflow-hidden">
        <div className="container py-10 px-0 sm:px-6">
          <h3 className="sm:mx-[5px] p-0 sm:px-8  text-white mb-[100px] sm:my-0">{t("about_us")}</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center my-10 z-10">
            <div className="order-2 sm:order-1 max-w-[500px] w-[100%] sm:w-[50%] h-[fit-content] p-10 shadow-sm   text-white" data-aos="fade-up"
              data-aos-duration="2000">
              <p className="leading-loose">
                {t("about_us_description")}
              </p>
              <Link
                href='/about'

              >
                <a className="hover:scale-[1.1] transition-all ease-in" style={{
                  background: "linear-gradient(to right,#d8ba71 ,#c6bf78,#fff)",
                  color: "#fff",
                  width: "fit-content",
                  padding: ".5rem 3rem",
                  fontWeight: "bold",
                }}>
                  {t("learn_more")}
                </a></Link>
            </div>
            <div className="relative order-1 sm:order-2 w-[100%] sm:w-[30%] z-10" data-aos="zoom-in" data-aos-duration="1000">
              <img
                src="/images/home/about-us.png"
                alt="image about"
                className="  w-[100%] "
                style={{
                  zIndex: "10",
                }}
                loading="lazy"
              />
              <img
                src="/images/shape.svg"
                alt="shape"
                style={{
                  zIndex: "-1",
                }}
                className="absolute -top-[3.5rem] right-[-100px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="provideds-section overflow-hidden relative py-20 bg-[#040D20] text-white" >
        <img src="/images/shape_dots.svg" alt="shapeDOTS" className="absolute -bottom-20 right-[-100px]" />
        <div className=" container gap-y-10 flex flex-col sm:flex-row sm:justify-around items-center">
          <div className="flex flex-col" data-aos="fade-up"
            data-aos-duration="3000">
            <h6 className="text-white text-5xl">{t("section_title_1")} </h6>

            <ul className="sm:list-disc text-xl my-5">
              <li>{t("section_list_1")}</li>
              <li className="my-4">{t("section_list_2")}</li>
              <li>{t("section_list_3")}</li>
            </ul>
          </div>
          <div className="max-w-[100%] md:max-w-[100%]" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/home/provide.png" alt="images" className='max-w-[650px] w-[100%]' />
          </div>

        </div>
      </div>

      <div className="group-companies overflow-hidden relative py-20 bg-[#040D20]">
        <img src="/images/shape_dots.svg" alt="shapeDOTS" className="absolute bottom-0 left-[-100px]" />
        <div className="container py-20 px-0 sm:px-6">
          <h2 className="text-white capitalize">{t("our_group")}</h2>
          <div className="ltr flex flex-col py-10 gap-y-10">
            <div className="card-home-1 relative min-w-[250px] min-h-[250px] max-w-[400px] max-h-[400px] w-[100%] h-[100%] cursor-pointer z-30">
              <img src="/images/home/realestate.png" alt="card_image" className=" w-[100%] z-20 shadow-lg" />
              <div className="inside-card bg-white absolute  text-center py-10 top-0 right-0  bottom-0 w-[100%]  -z-10">
                <h5 className="text-[#2747a5]">Magic Real Estate</h5>
                <p className="text-[#000] text-lg px-2">{t("companie_1")}</p>
              </div>

            </div>
            <div className="card-home-2 relative min-w-[250px] min-h-[250px] max-w-[400px] max-h-[400px] w-[100%] h-[100%] cursor-pointer z-30 ">
              <img src="/images/home/specialone-clean.png" alt="card_image" className=" w-[100%] z-20 shadow-lg" />
              <div className="inside-card bg-white absolute  text-center py-10 top-0 left-0  bottom-0 w-[100%]  -z-10">
                <h5 className="text-[#2747a5]">Special One</h5>
                <p className="text-[#000] text-lg px-2">{t("companie_2")}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div
        className="py-12 bg-[#040D20]"

      >
        <div className="relative py-4">

          <div className="flex flex-row gap-x-4 sm:gap-x-12 justify-center mt-7 bg-[#303c4a] sm:w-[fit-content] m-auto px-3 sm:px-20 py-12">
            <Link href="https://twitter.com/MagicGroup8" passHref={true}>
              <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <img
                  src="/images/icons/twiter.png"
                  alt="twiter"
                  className="w-[20px] h-[20px] sm:h-[80px] sm:w-[80px] "
                  loading="lazy"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/magic.group.qar/" passHref={true}>
              <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="300">
                <img
                  src="/images/icons/instgrame.png"
                  alt="instagram"
                  className="w-[20px] h-[20px] sm:h-[80px] sm:w-[80px] "
                  loading="lazy"
                />
              </a></Link>
            <Link href="https://www.snapchat.com/add/magicgroup.qa?share_id=zYnEbxA1K0w&locale=en-US" passHref={true}>
              <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="600">
                <img
                  src="/images/icons/snapchat.png"
                  alt="snapchat"
                  className="w-[20px] h-[20px] sm:h-[80px] sm:w-[80px] "
                  loading="lazy"
                />
              </a></Link>
            <Link href="https://www.linkedin.com/company/magic-group-qa/about/?viewAsMember=true" passHref={true}>
              <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="900">
                <img
                  src="/images/icons/linkedin.png"
                  alt="linkedin"
                  className="w-[20px] h-[20px] sm:h-[80px] sm:w-[80px] "
                  loading="lazy"
                />
              </a>
            </Link>
            <Link href="https://www.facebook.com/Magic.group.qa/?ref=pages_you_manage" passHref={true}>
              <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1200">
                <img
                  src="/images/icons/facebook.png"
                  alt="facebook"
                  className="w-[20px] h-[20px] sm:h-[80px] sm:w-[80px] "
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
          <img
            src="/images/group_map_right.png"
            alt="group_map_right"
            width={200}
            className="absolute right-0 top-0 hidden md:block"
            loading="lazy"
          />
        </div>
        <div className=" bg-contact-us-home bg-cover bg-center  min-h-[400px] h-[100%] mt-10 py-10 w-[100%]">
          <div className="container flex flex-col sm:flex-row sm:justify-around lg:gap-x-20 gap-y-6   min-h-[400px] h-[100%] ">
            <div className="flex flex-col py-4 px-8 max-w-[500px] w-[100%]  gap-y-8 ">
              <h5 className="text-white">{t("contact_us")}</h5>
              <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-y-4">

                <input type="text" name='company' defaultValue="Magic Group" className="hidden" />
                <input
                  type="email"
                  name='email'
                  placeholder={t("email")}
                  className="px-6 py-3  outline-none border-2  placeholder:text-sm"
                />
                <textarea
                  rows={4}
                  name="message"
                  placeholder={t("message")}
                  className="px-6 py-3 resize-none  outline-none border-2    placeholder:text-sm"
                />
                <button
                  className="hover:scale-[1.1] transition-all ease-in"
                  style={{
                    background: "linear-gradient(to right,#d8ba71 ,#c6bf78,#fff)",
                    color: "#fff",
                    width: "fit-content",
                    padding: ".5rem 3rem",
                    fontWeight: "bold",
                  }}
                >
                  {t("send")}
                </button>
              </form>
            </div>
            <div className="flex flex-col py-4 px-8 max-w-[471px] sm:self-end sm:text-center gap-y-3 h-fit mb-6">
              <div className="flex flex-row items-center gap-x-2 text-white text-2xl ">
                <img
                  src="/images/icons/location.png"
                  alt="location"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <p className="h-[10px] text-2xl">{t("location")}</p>
              </div>
              <Link href="" passHref={true}>
                <a className="text-white text-2xl">

                  Al Sadd Royal Plaza, Doha, Qatar
                </a>
              </Link>


            </div>
          </div>
        </div>
      </div>
      <Footer logo="/images/logo.svg" />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable

      />
    </>
  );
};

export default Home;