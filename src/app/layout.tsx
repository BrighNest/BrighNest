import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { BUSINESS, OG_IMAGE, SITE_URL } from "@/lib/constants";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BrighNest Cleaning | Home & Office Cleaning in Levittown, PA",
    template: "%s",
  },
  description:
    "Residential, commercial & specialty cleaning in Levittown, Bucks County & Greater Philadelphia. Licensed & insured. Request your free quote today.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
