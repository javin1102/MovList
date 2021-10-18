import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { Provider } from "next-auth/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Head>
          <title>MovList</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NextNProgress color="#E73959" />
        <Component {...pageProps} />
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;
