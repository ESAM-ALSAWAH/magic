import type { AppProps } from "next/app";
import "scss/index.scss";

import { MainLayout } from "@layouts";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
