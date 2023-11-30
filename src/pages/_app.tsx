import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "@/lib/themes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { Noto_Serif, Anaheim } from "next/font/google";

const noto = Noto_Serif({ weight: ["700"], subsets: ["latin"] });
const anaheim = Anaheim({ weight: ["400"], subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  let getLayout:
    | ((page: ReactElement<any, string>) => ReactNode)
    | undefined = (page: ReactNode) => <>{page}</>;

  const router = useRouter();

  getLayout = Component.getLayout ?? getLayout;

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <style jsx global>
        {`
          :root {
            --font-main: ${anaheim.style.fontFamily};
            --font-head: ${noto.style.fontFamily};
            --primary: #0970b5;
            --secondary: #66c2ff;
            --tertiary: #eff7fd;
            --bg: #f9fdff;
          }
        `}
      </style>
      {router.pathname.startsWith("/dashboard") ? (
        getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}
