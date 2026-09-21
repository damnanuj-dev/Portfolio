import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANUJ — Web Developer & App Developer",
  description: "Portfolio of Anuj — CS Student, Web & App Developer based in India. Crafting tactile digital products, minimal interfaces, and high-performance applications.",
  keywords: ["Anuj", "Web Developer", "App Developer", "Portfolio", "Flutter", "React", "Next.js", "Creative Developer", "India"],
  authors: [{ name: "Anuj" }],
  creator: "Anuj",
  openGraph: {
    title: "ANUJ — Web Developer & App Developer",
    description: "CS Student • Web & App Developer • India. Crafting tactile interfaces and high-performance digital products.",
    url: "https://anuj.dev",
    siteName: "Anuj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANUJ — Web Developer & App Developer",
    description: "CS Student • Web & App Developer • India. Crafting tactile interfaces and high-performance digital products.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0A] text-[#F3F1EA] antialiased selection:bg-[#315CFF] selection:text-white">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
