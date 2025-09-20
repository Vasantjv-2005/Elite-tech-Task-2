import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vasant Jevengekar - Frontend Developer & Web Designer",
  description:
    "Passionate front-end developer and web designer creating responsive, user-friendly web interfaces. Expertise in React, Next.js, and modern web technologies.",
  generator: "v0.app",
  keywords: ["frontend developer", "web designer", "React", "Next.js", "web development", "UI/UX"],
  authors: [{ name: "Vasant Jevengekar" }],
  openGraph: {
    title: "Vasant Jevengekar - Frontend Developer & Web Designer",
    description: "Passionate front-end developer creating beautiful web experiences",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
