import Theme from '../styles/theme';
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <ToastContainer/>
      </Theme>
    </>
  );
}
 