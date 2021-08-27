import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import Wrapper from "./components/Wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
export default MyApp;
