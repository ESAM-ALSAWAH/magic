import React from "react";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
interface props {
  logo?: string;
}
export const Footer: React.FC<props> = ({ logo }) => {
  return (
    <div className="footer">
      <div
        className="py-5 sm:py-10 md:py-15"
        style={{
          background: "linear-gradient(to bottom,#0F1B3E ,#49526d)",
        }}
      >
        <div className="container grid grid-cols-1 sm:grid-cols-5 px-4 gap-y-6">
          <div className="flex flex-col ">
            <img
              src={logo}
              alt="logo"
              className="mx-auto  max-w-[150px] max-h-[100px] w-[100%] h-[100%]"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start gap-y-1">
            <h6>Pages</h6>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-y-1 ">
            <h6>Services</h6>
            <Link href="/group/realestate">
              <a>Real estate</a>
            </Link>
            <Link href="/group/specialone">
              <a>Special one</a>
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-y-1">
            <h6>Follow Us</h6>
            <Link href="https://twitter.com/MagicGroup8" passHref={true}>
              <a className="flex flex-row items-center gap-x-3">
                <AiOutlineTwitter /> twitter
              </a>
            </Link>
            <Link href="https://www.facebook.com/Magic.group.qa/?ref=pages_you_manage" passHref={true}>
              <a className="flex flex-row items-center gap-x-3">
                <AiFillFacebook /> facebook
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/magic-group-qa/about/?viewAsMember=true" passHref={true}>
              <a className="flex flex-row items-center gap-x-3">
                <AiFillLinkedin /> Linked In
              </a>
            </Link>
            <Link href="https://www.snapchat.com/add/magicgroup.qa?share_id=zYnEbxA1K0w&locale=en-US" passHref={true}>
              <a className="flex flex-row items-center gap-x-3">
                <BsSnapchat /> snapchat
              </a>
            </Link>
            <Link href="https://www.instagram.com/magic.group.qar/" passHref={true}>
              <a className="flex flex-row items-center gap-x-3">
                <AiFillInstagram /> instagram
              </a>
            </Link>
          </div>
          <div className=" flex flex-col gap-y-1 items-center sm:items-start">
            <h6>Contact info</h6>
            <Link href="mailto:info@magicgroup.qa" passHref={true}>
              <a className="flex flex-row items-center gap-x-3">
                <AiFillMail />
                info@magicgroup.qa
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center px-2 py-3 bg-[#bd8c39] text-white  font-bold">
        © Copyright 2022. All Right Reserved Quantum Gate
      </div>
    </div>
  );
};
