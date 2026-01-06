import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://fcode-design.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FCODE Design — Modern Web & SaaS Studio",
    template: "%s — FCODE Design",
  },
  description:
    "FCODE Design is a modern design & development studio building clean, fast, scalable web products and SaaS dashboards.",
  applicationName: "FCODE Design",
  keywords: [
    "FCODE",
    "Web Development",
    "Next.js",
    "TypeScript",
    "SaaS",
    "Dashboard",
    "UI/UX",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "FCODE Design — Modern Web & SaaS Studio",
    description:
      "Clean UI. Fast performance. Scalable builds — landing pages, dashboards, and web products.",
    siteName: "FCODE Design",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FCODE Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FCODE Design — Modern Web & SaaS Studio",
    description:
      "Clean UI. Fast performance. Scalable builds — landing pages, dashboards, and web products.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
