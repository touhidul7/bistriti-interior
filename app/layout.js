import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bistriti Interior",
  description: "Britto Soft",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      ><Toaster
      position="top-center"
      reverseOrder={false}
    />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
