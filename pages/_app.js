import "../styles/globals.css";


import {NavBar, Footer} from '../components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
