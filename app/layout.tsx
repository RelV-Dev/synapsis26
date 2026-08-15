import type { Metadata } from "next";
import { Pacifico, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const fontSpace = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const fontPacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapsis 26 — Sistem Informasi UNAIR",
  description: "Program Studi Sistem Informasi, Universitas Airlangga",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${fontSpace.variable} ${fontPacifico.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#fff6dd] text-[#1a1a1a]">
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
