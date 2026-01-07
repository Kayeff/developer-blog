import { Geist } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const generalSans = localFont({
  src: [{ path: "../public/fonts/GeneralSans.woff2" }],
  variable: "--font-generalSans",
  display: "swap",
});

export const tanker = localFont({
  src: [{ path: "../public/fonts/Tanker.woff2" }],
  variable: "--font-tanker",
  display: "swap",
});
