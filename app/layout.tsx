import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContractGuard",
  description: "ContractGuard Ai, risk analysis software, legal tech, compliance automation, contract management, due diligence AI, legal risk assessment",
  icons: {
    icon: { url:"/logo5.jpg", sizes: "192x192", type: "image/jpeg" }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} antialiased`}
      >
      <NavbarDemo/>
        {children}
      </body>
    </html>
  );
}
