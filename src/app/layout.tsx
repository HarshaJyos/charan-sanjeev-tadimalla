import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charan Sanjeev Tadimalla | Entrepreneurship Development Professional",
  description:
    "Portfolio of Charan Sanjeev Tadimalla — EDC Coordinator, Startup Mentor, and Ecosystem Builder with 5+ years of experience driving entrepreneurship development across universities, government initiatives, and grassroots ventures.",
  keywords: [
    "Charan Sanjeev Tadimalla",
    "Entrepreneurship Development",
    "Startup Mentor",
    "EDC Coordinator",
    "GetMyTailor",
    "Aditya University",
    "Incubation Program",
    "SIYB Trainer",
  ],
  authors: [{ name: "Charan Sanjeev Tadimalla" }],
  openGraph: {
    title: "Charan Sanjeev Tadimalla | Entrepreneurship Development Professional",
    description:
      "EDC Coordinator · Startup Mentor · Ecosystem Builder · Founder of GetMyTailor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ background: "var(--color-bg)", fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}
