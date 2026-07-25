import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const heading = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-heading", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://varekai.ai"),
  title: { default: "Varekai — Automation. Instantly.", template: "%s | Varekai" },
  description: "Practical AI transformation that removes operational friction and delivers measurable business results.",
  openGraph: {
    title: "Varekai — Automation. Instantly.",
    description: "Practical AI systems designed around the way your business actually operates.",
    url: "/",
    siteName: "Varekai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varekai — Automation. Instantly.",
    description: "Practical AI systems designed around the way your business actually operates.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#030711", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${sans.variable} ${heading.variable} ${mono.variable}`}><body>{children}</body></html>;
}
