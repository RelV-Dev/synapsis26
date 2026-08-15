import type { Metadata } from "next";
import { Pacifico, Rye, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const fontPacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const fontRye = Rye({
  weight: "400",
  variable: "--font-rye",
  subsets: ["latin"],
});

const fontSpace = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapsis Citizen - Sistem Informasi",
  description: "Website Prodi Sistem Informasi Universitas Airlangga",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${fontPacifico.variable} ${fontRye.variable} ${fontSpace.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8f9fa] text-zinc-900 selection:bg-cyan-300">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
