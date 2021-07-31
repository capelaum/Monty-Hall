import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { DoorsProvider } from "../hooks/useDoors";

import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DoorsProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </DoorsProvider>
  );
}

export default MyApp;
