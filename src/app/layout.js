import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";

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
  title: "Minutes Global FZ-LLC",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sky-200`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
