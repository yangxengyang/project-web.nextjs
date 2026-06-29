import type { Metadata } from "next";
import { Inter, Noto_Serif_Lao} from "next/font/google";
import "./globals.css"
import Header from "./components/header";
import Footer from "./components/footer";
import { NextIntlClientProvider } from "next-intl";
import { TbFaceId } from "react-icons/tb";


const inter = Inter({
  subsets: ["latin"],
});

const noto = Noto_Serif_Lao({
  subsets: ["lao"]
});


export const metadata = {
  title: "xeng_tech.com",
  description: "Portfolio",
  icons: {
    icon: "./HMOLOGO.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 <body className={`${inter.className} ${noto.className} antialiased`}>
  <Header/>
  {children}
  <Footer/>
  </body>
    </html>
  );
}
