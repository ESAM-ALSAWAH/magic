import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Loader } from "@ui";
import AOS from "aos";
import "aos/dist/aos.css";
import "scss/index.scss";
import "antd/dist/antd.css";

import { MainLayout } from "@layouts";
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);
  if (loading) return <Loader />;
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
