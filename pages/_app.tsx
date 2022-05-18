import {useEffect} from "react";
import type { AppProps } from "next/app";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "scss/index.scss";
import 'antd/dist/antd.css';

import { MainLayout } from "@layouts";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
