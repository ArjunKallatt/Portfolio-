import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Kallatt — Software Engineer & Security Researcher",
  description:
    "Arjun 'Aaru' Kallatt — I build the tools that make enterprise software teams faster, and dig into the systems that break them. Assistant Solutions Analyst at Nucleus Software, working on FinnOne Neo.",
  metadataBase: new URL("https://arjunkallatt.dev"),
  openGraph: {
    title: "Arjun Kallatt — Software Engineer & Security Researcher",
    description:
      "I build the tools that make enterprise software teams faster, and dig into the systems that break them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-paper antialiased selection:bg-gold selection:text-ink">
        <div className="grain-overlay" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
