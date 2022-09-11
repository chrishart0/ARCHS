import "../styles/globals.css";

import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";



function MyApp({ Component, pageProps }) {
  // const router = useRouter()


  return (
    <div>
        <HeaderBar />
        <Component {...pageProps} />
        <FooterBar />
    </div>
  );
}

export default MyApp;
