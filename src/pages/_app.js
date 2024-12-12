// import "@/styles/globals.css";
// import Header from "@/components/header";
// export default function App({ Component, pageProps }) {
//   return   
//   <>
//   <Header />
//   < Component {...pageProps} />;
// </> 
// }




// src/pages/_app.js
import Header from '../components/header';
import '../styles/globals.css'; // Import global styles if needed

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

