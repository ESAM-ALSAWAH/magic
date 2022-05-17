import React from "react";

export const Contact_us: React.FC<{ t: any }> = ({ t }) => {
  return (
    <div
      className="pt-12"
      style={{
        background: "#f4e6d2",
      }}
    >
      <div className="relative py-4">
        <h6 className="text-center">{t("contact_us_title")}</h6>
        <div className="flex flex-row gap-x-6 justify-center mt-7 ">
          <a href="">
            <img
              src="/images/icons/twiter.png"
              alt="twiter"
              className="w-[30px] h-[30px] sm:h-[80px] sm:w-[80px] "
            />
          </a>
          <a href="">
            <img
              src="/images/icons/instgrame.png"
              alt="instagram"
              className="w-[30px] h-[30px] sm:h-[80px] sm:w-[80px] "
            />
          </a>
          <a href="">
            <img
              src="/images/icons/snapchat.png"
              alt="snapchat"
              className="w-[30px] h-[30px] sm:h-[80px] sm:w-[80px] "
            />
          </a>
          <a href="">
            <img
              src="/images/icons/linkedin.png"
              alt="linkedin"
              className="w-[30px] h-[30px] sm:h-[80px] sm:w-[80px] "
            />
          </a>
          <a href="">
            <img
              src="/images/icons/facebook.png"
              alt="facebook"
              className="w-[30px] h-[30px] sm:h-[80px] sm:w-[80px] "
            />
          </a>
        </div>
        <img
          src="/images/group_map_right.png"
          alt="group_map_right"
          width={200}
          className="absolute right-0 top-0 hidden md:block"
        />
        <img
          src="/images/group_map_left.png"
          alt="group_map_left"
          width={200}
          className="absolute left-0 bottom-0 hidden md:block"
        />
      </div>
      <div className="bg-contact-us bg-cover bg-center min-h-[400px] h-[100%] mt-10 py-10">
        <div className="container flex flex-col sm:flex-row gap-x-20 gap-y-6   min-h-[400px] h-[100%] ">
          <div className="flex flex-col py-4 px-8 max-w-[500px] w-[100%] bg-white gap-y-8 ">
            <p className="text-center">{t("form_1")}</p>
            <h5 className="text-[#0f1b3e]">{t("form_2")}</h5>
            <p className="text-[#0f1b3e]">{t("contact_us_title")}</p>
            <input
              type="text"
              placeholder={t("email")}
              className="px-6 py-3  outline-none border-2 focus:border-[#0f1b3e] placeholder:text-sm"
            />
            <textarea
              rows={4}
              placeholder={t("message")}
              className="px-6 py-3 resize-none  outline-none border-2  focus:border-[#0f1b3e]  placeholder:text-sm"
            />
            <button className="bg-primary-bg text-white font-semibold px-14 py-4 w-fit animation-button">
              {t("send")}
            </button>
          </div>
          <div className="flex flex-col py-4 px-8 max-w-[471px] bg-white gap-y-3 h-fit sm:self-end">
            <div className="flex flex-row items-center gap-x-2">
              <img
                src="/images/icons/location.png"
                alt="location"
                width={20}
                height={20}
              />
              <p>{t("location")} :</p>
            </div>
            <p>Al Sadd Royal Plaza</p>
            <a href="" className="text-[#d8ba71]">
              link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
