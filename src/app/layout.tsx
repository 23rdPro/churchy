import type { Metadata } from "next";
import { meta } from "./utils/consts";
// import "./globals.css";
import { inter, saira } from "./utils/fonts";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './styles/animate/animate.min.css'
import './styles/bootstrap.min.css'
import './styles/style.css'
config.autoAddCss = false;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: meta.applicationName,
  authors: meta.authors,
  keywords: meta.keywords,
  openGraph: meta.openGraph,
  twitter: meta.twitter
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
        {children}
      </body>
    </html>
  );
}
