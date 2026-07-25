import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
const sans=IBM_Plex_Sans({subsets:["latin"],weight:["400","500","600"],variable:"--font-sans",display:"swap"});
const heading=Space_Grotesk({subsets:["latin"],weight:["500","600","700"],variable:"--font-heading",display:"swap"});
const mono=IBM_Plex_Mono({subsets:["latin"],weight:["400","500"],variable:"--font-mono",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://varekai.com"),title:{default:"Varekai — Automation. Instantly.",template:"%s | Varekai"},description:"Production-ready AI automation, scoped, built, and live in under a month.",openGraph:{title:"Varekai — Automation. Instantly.",description:"AI automation that's live in weeks, not quarters.",url:"/",siteName:"Varekai",type:"website"},twitter:{card:"summary_large_image",title:"Varekai — Automation. Instantly.",description:"AI automation that's live in weeks, not quarters."},alternates:{canonical:"/"}};
export const viewport:Viewport={themeColor:"#0a0e1a",colorScheme:"dark"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${sans.variable} ${heading.variable} ${mono.variable}`}><body>{children}</body></html>}
