import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crelyzor.com"),
  title: "Crelyzor — Your Professional OS",
  description:
    "Your identity, schedule, meetings, and work — all connected, all intelligent. Crelyzor replaces HiHello, Cal.com, Otter.ai, and Todoist in one seamless tool built for solo professionals.",
  keywords: [
    "meeting notes",
    "AI meeting assistant",
    "professional scheduling",
    "digital business card",
    "task management",
    "meeting transcription",
  ],
  authors: [{ name: "Crelyzor" }],
  creator: "Crelyzor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crelyzor.com",
    siteName: "Crelyzor",
    title: "Crelyzor — Your Professional OS",
    description:
      "Your meetings remember everything. So you don't have to. One tool for your identity, schedule, meetings, and work.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Crelyzor — Your Professional OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crelyzor — Your Professional OS",
    description: "Your meetings remember everything. So you don't have to.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased font-[family-name:var(--font-dm-sans)]`}>
        {children}
      </body>
    </html>
  );
}
