import type { Metadata } from "next";
import { meta } from "./utils/consts";
// import "./globals.css";
import { inter, saira } from "./utils/fonts";
import "bootstrap-icons/font/bootstrap-icons.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles/animate/animate.min.css";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: meta.applicationName,
  authors: meta.authors,
  keywords: meta.keywords,
  openGraph: meta.openGraph,
  twitter: meta.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body className={`${inter.className} ${saira.className}`}>
        <TopBar />
        <Nav />
        {children}
        <Footer />
        <a
          href="#"
          className="btn btn-secondary btn-square rounded-circle back-to-top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-white" />
        </a>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="jss/wow/wow.min.js" strategy="lazyOnload" />
        <Script src="jss/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="jss/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="jss/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
