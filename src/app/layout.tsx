import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SocialIcons } from "@/components/SocialIcons";

// Initialize Inter font with multiple weights
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Initialize The Nautigal font
const nautigal = localFont({
  src: [
    {
      path: "../../public/fonts/TheNautigal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TheNautigal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nautigal",
});

export const metadata: Metadata = {
  title: "Charan Sanjeev Tadimalla | Entrepreneurship Professional",
  description:
    "Portfolio of Charan Sanjeev Tadimalla, an entrepreneurship development professional with over 5 years of experience mentoring startups and fostering innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nautigal.variable} antialiased bg-[radial-gradient(circle_at_center,#000000,#000000)]`}
      >
        {children}
        <SocialIcons />
      </body>
    </html>
  );
}
