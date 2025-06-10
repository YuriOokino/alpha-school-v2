import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const workSans = Work_Sans({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: "Alpha School | Where Kids Crush Academics",
  description:
    "A school where kids crush academics in 2 hours, build life skills through workshops, and thrive beyond the classroom.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
