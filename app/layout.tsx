import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"

const baseUrl = "https://ignaciobritos.com" // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ignacio Britos | Vibe Engineer",
  icons: {
    icon: "/projects/vcol.png",
  },
  description:
    "Portfolio personal de Ignacio Britos, Vibe Engineer especializado en crear experiencias digitales excepcionales.",
  generator: "v0.dev",
  alternates: {
    languages: {
      "es": "/",
      "en": "/",
    },
  },
  openGraph: {
    title: "Ignacio Britos | Vibe Engineer",
    description: "Portfolio personal de Ignacio Britos, Vibe Engineer especializado en crear experiencias digitales excepcionales.",
    url: baseUrl,
    siteName: "Ignacio Britos Portfolio",
    locale: "es",
    type: "website",
    images: [
      {
        url: "/ProfPic.jpg",
        width: 800,
        height: 800,
        alt: "Ignacio Britos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Britos | Vibe Engineer",
    description: "Portfolio personal de Ignacio Britos, Vibe Engineer",
    creator: "@nachobrit", // Replace if you have a different handle
    images: ["/ProfPic.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
