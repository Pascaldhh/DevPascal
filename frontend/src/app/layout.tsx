import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import { config as fortConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
fortConfig.autoAddCss = false;

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins: NextFontWithVariable = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "devpascal",
  description: "The website made by devpascal",
};

// export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-pt-24 scroll-smooth">
      <body
        className={`${poppins.className} ${poppins.variable} text-red-primary-900`}
      >
        <Header />
        <div className="min-h-[80svh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
