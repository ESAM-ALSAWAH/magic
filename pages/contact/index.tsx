import React,{useRef} from "react";
import Head from "next/head";
import { Navbar, Footer } from "@ui";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import useTranslation from "next-translate/useTranslation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormContact: React.FC<any> = (props) => {
  const { Social_Link_magic, company,t } = props;
  const {
    
    facebook,
    instagram,
    snapchat,
    linkedin,
    twiter,
  } = Social_Link_magic;
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
    <form ref={form} onSubmit={handleSubmit} className="flex flex-col py-4 px-4 sm:px-8 max-w-[500px] w-[100%] bg-white gap-y-4 m-auto">
      <input name="company" defaultValue={company} className="hidden"/>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="Full Name">{t("full_name")}</label>
        <input
          type="text"
          placeholder={t("full_name")}
          name="full_name"
          className="px-3 py-2  outline-none border-2 focus:border-[#0f1b3e] placeholder:text-sm"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="Email">{t("email")}</label>
        <input
          type="email"
          placeholder={t("email")}
          name="email"
          className="px-3 py-2  outline-none border-2 focus:border-[#0f1b3e] placeholder:text-sm"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="Subject">{t("subject")}</label>
        <input
          type="text"
          placeholder={t("subject")}
          name="subject"
          className="px-3 py-2  outline-none border-2 focus:border-[#0f1b3e] placeholder:text-sm"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="Message">{t("message")}</label>
        <textarea
          rows={4}
          placeholder={t("write_message")}
          name="message"
          className="px-3 py-2 resize-none  outline-none border-2  focus:border-[#0f1b3e]  placeholder:text-sm"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4">
        <button className="bg-[#CD802E] text-white w-[fit-content] font-bold px-3 py-2 rounded-md animation-button">
          {t("send_message")}
        </button>
        <div className="flex flex-col">
          <strong>{t("follow_us")} :</strong>
          <div className="flex items-center gap-x-2 mt-1">
            <Link href={twiter} passHref={true}>
              <a className="text-[#0f1b3e]">
                <AiOutlineTwitter fontSize="22px" />
              </a>
            </Link>
            <Link href={facebook} passHref={true}>
              <a className="text-[#0f1b3e]">
                <AiFillFacebook fontSize="22px" />
              </a>
            </Link>
            <Link href={linkedin} passHref={true}>
              <a className="text-[#0f1b3e]">
                <AiFillLinkedin fontSize="22px" />
              </a>
            </Link>
            <Link href={snapchat} passHref={true}>
              <a className="text-[#0f1b3e]">
                <BsSnapchat fontSize="22px" />
              </a>
            </Link>
            <Link href={instagram} passHref={true}>
              <a className="text-[#0f1b3e]">
                <AiFillInstagram fontSize="22px" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

const Social_Link_magic = {
  facebook: "https://www.facebook.com/Magic.group.qa/?ref=pages_you_manage",
  instagram: "https://www.instagram.com/magic.group.qar/",
  snapchat: "https://www.snapchat.com/add/specialone.qa?share_id=zYnEbxA1K0w&locale=en-US",
  linkedin: "https://www.linkedin.com/company/magic-group-qa/about/?viewAsMember=true",
  twiter: "https://twitter.com/MagicGroup8",
};
const Social_Link_Realestate = {
  facebook: "https://www.facebook.com/Magic.realestate.qa/?ref=pages_you_manage",
  instagram: "https://www.instagram.com/magic.realestate.qa/",
  snapchat: "https://www.snapchat.com/add/magicrealestate?share_id=shpUXVVcmWc&locale=en-US",
  linkedin: "https://www.linkedin.com/company/magic-realestate-qa/about/?viewAsMember=true",
  twiter: "https://twitter.com/MagicRealEstat1",
};
const Social_Link_Specialone = {
  facebook: "https://www.facebook.com/special.one.qa/?ref=pages_you_manage",
  instagram: "https://www.instagram.com/special.one.qa/",
  snapchat: "https://www.snapchat.com/add/specialone.qa?share_id=zYnEbxA1K0w&locale=en-US",
  linkedin: "https://www.linkedin.com/company/special-one-qa/about/?viewAsMember=true",
  twiter: "https://twitter.com/Special_one_qa",
};
const Contact = () => {
  const { t } = useTranslation("contact_us");
  return (
    <>
      <Head>
        <title>{t("contact_us")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar logo="/images/logo.svg" />
      <div className="container py-20 ">
        <div className="flex flex-row  items-center sm:justify-start gap-x-2 mb-5">
          <h4 className="titlePage">{t("contact_us")}</h4>
        </div>
        <div className="container grid grid-cols-1 sm:grid-cols-2 px-1 py-20 sm:px-10 bg-[#fff8f0] relative gap-y-6">
          <div className="flex flex-col order-2 sm:order-1">
            <div className="m-0 flex items-center justify-around">
              <h5 className="text-[#d8ba71]">{t("contact_magic")}</h5>
              <img
                src="/images/contact_magic.svg"
                alt="magic"
                loading="lazy"
                style={{
                  width: "100px",
                }}
              />
            </div>
            <FormContact Social_Link_magic={Social_Link_magic} t={t} company="Magic Group"/>
          </div>
          <img
            src="/images/contact_us.png"
            alt="magic"
            loading="lazy"
            className="order-1 mx-0  sm:mx-4 my-4 sm:mt-0 sm:mb-10  "
          />
          <div className="flex flex-col order-2 sm:order-1">
            <div className="m-0 flex items-center justify-around">
              <h5 className="text-[#d8ba71]">{t("contact_specialone")}</h5>
              <img
                src="/images/contact_specialone.svg"
                alt="special one"
                loading="lazy"
                style={{
                  width: "100px",
                }}
              />
            </div>
            <FormContact Social_Link_magic={Social_Link_Specialone} t={t} company="Special One" />
          </div>
          <div className="flex flex-col order-2 sm:order-1 mx-0  sm:mx-4">
            <div className="m-0 flex items-center justify-around">
              <h5 className="text-[#d8ba71]">{t("contact_realestate")}</h5>
              <img
                src="/images/contact_realestate.svg"
                alt="real estate"
                loading="lazy"
                style={{
                  width: "100px",
                }}
              />
            </div>
            <FormContact Social_Link_magic={Social_Link_Realestate} t={t} company="Real estate" />
          </div>

          <div className="absolute -bottom-16 left-[50%] -translate-x-[50%] text-center bg-white  py-4 px-8 shadow-lg min-w-[200px] ">
            <strong>{t("our_location")}</strong>
            <p>Al Sadd Royal Plaza</p>
            <Link href="mailto:esam@gmail.com" passHref={true}>
              <a className="text-[#d8ba71]">Email: info@magicgroup.qa</a>
            </Link>
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
export default Contact;
