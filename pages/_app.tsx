import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import appDefaultTheme from "../themes/app-default.theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appDefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
