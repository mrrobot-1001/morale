import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morale | Human-First AI Solutions from India",
  description: "Homegrown AI solutions proudly made in India. User-oriented, privacy-first, and beautifully simple. Building AI that respects humanity.",
  keywords: ["AI", "Privacy", "Machine Learning", "User-Friendly", "Data Privacy", "Morale", "India", "Made in India"],
  authors: [{ name: "Morale" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Morale | Human-First AI Solutions from India",
    description: "Homegrown AI solutions proudly made in India. User-oriented, privacy-first, and beautifully simple.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morale | Human-First AI Solutions from India",
    description: "Homegrown AI solutions proudly made in India. User-oriented, privacy-first, and beautifully simple.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
