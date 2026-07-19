import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunny Playland | Dečija igraonica i cafe u Višnjičkoj banji",
  description:
    "Sunny Playland je dečija igraonica i cafe u Višnjičkoj banji sa toboganima, trampolinama, lavirintom, arkadnim igrama, PlayStation zonom i prijatnim prostorom za roditelje.",
  keywords: [
    "dečija igraonica Višnjička banja",
    "igraonica Sunnyville",
    "dečiji rođendani Višnjička banja",
    "igraonica sa PlayStation zonom",
    "igraonica sa trampolinama Beograd",
    "cafe igraonica Beograd",
    "igraonica Slanački put",
  ],
  openGraph: {
    title: "Sunny Playland | Dečija igraonica i cafe",
    description:
      "Tobogani, trampoline, arkadne igre, PS5 zona i cafe za roditelje — sve na jednom mestu u Višnjičkoj banji.",
    locale: "sr_RS",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sr"
      className={`${fredoka.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
