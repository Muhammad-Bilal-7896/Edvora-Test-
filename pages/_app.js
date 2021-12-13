import Head from "next/head"
import '../styles/globals.css';

import "../ContainerCss/Home.scss";

//Importing the styles for navigation bar.
import "../Components/Navbar/Navbar.css";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="Edvora Test Figma to Next JS Conversion" />
      <meta name="keywords" content="Test,Edvora" />
      <meta name="author" content="Muhammad-Bilal-7896" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Font Awesome */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      {/* MDB */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css" rel="stylesheet" />
      {/* <!-- MDB --> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
      ></script>
      <title>Edvora Test</title>
    </Head>
    
      <Component {...pageProps} />
  
  </>
}

export default MyApp
