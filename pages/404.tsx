import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
const Error404 = () => {
  const router = useRouter();
  const { t } = useTranslation("404");
  return (
    <>
      <Head>
        <title>{t("404")} </title>
        <meta name="description" content="Page Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          background: "linear-gradient(to bottom,#0F1B3E ,#49526d)",
        }}
      >
        <div className="container min-h-[100vh] flex flex-col sm:flex-row sm:justify-around items-center justify-center gap-y-10">
          <div className="flex flex-col gap-y-6 order-2 sm:order-1">
            <h1 className="text-error-primary">{t("404")}</h1>
            <h2 className="text-white">{t("message")}</h2>
            <button
              className="hover:scale-[1.1] transition-all ease-in"
              style={{
                background: "linear-gradient(to right,#d8ba71 ,#c6bf78,#fff)",
                color: "#fff",
                width: "fit-content",
                padding: ".5rem 3rem",
                fontWeight: "bold",
              }}
              onClick={(e) => router.push("/")}
            >
              {t("back")}
            </button>
          </div>
          <div className="order-1  sm:order-2 w-[50%]  sm:w-[300px] sm:h-[300px]">
            <img src="/images/404.png" alt="404" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
