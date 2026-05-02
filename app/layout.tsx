import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solo Gracias — Tu mejor versión de cada día, finalmente en tu idioma",
  description:
    "La primera plataforma de crecimiento personal para los 700 millones de hispanohablantes.",
  metadataBase: new URL("https://www.sologracias.com"),
  verification: {
    google: "ih_EcFq-H7V-ThpUiJzqF06cnredxqSLnY-c0D06oeU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Solo Gracias",
      url: "https://www.sologracias.com",
      logo: "https://www.sologracias.com/favicon.ico",
      sameAs: ["https://www.instagram.com/sologracias.py"],
    },
    {
      "@type": "SiteNavigationElement",
      name: ["Membresía", "Academia", "Comunidad", "Experiencias"],
      url: [
        "https://www.sologracias.com/#membresia",
        "https://www.sologracias.com/#academia",
        "https://www.sologracias.com/#comunidad",
        "https://www.sologracias.com/#experiencias",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
