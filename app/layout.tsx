import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "De Praga a Venecia · Road Trip Septiembre 2027",
  description:
    "Planificador interactivo de road trip: Praga → Český Krumlov → Hallstatt → Budapest → Bled → Soča → Dolomitas → Venecia. 14 días, 5 países, 4 viajeros.",
  openGraph: {
    title: "De Praga a Venecia · Road Trip Septiembre 2027",
    description: "14 días por Europa · 5 países · 1.805 km · 4 viajeros",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
