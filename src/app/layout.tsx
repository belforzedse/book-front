import type { Metadata } from "next"
import Providers from "@/components/Providers"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"
import "./globals.css"

const langConfig = process.env.NEXT_PUBLIC_LANG === "fa" ? "fa" : "en"
const dir = langConfig === "fa" ? "rtl" : "ltr"

export const metadata: Metadata = {
  title: "Shahreketab",
  description: "Online bookstore powered by Shahreketab.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyClass = cn("bg-gray-50 text-gray-900 antialiased font-sans")

  return (
    <html lang={langConfig} dir={dir} suppressHydrationWarning>
      <body className={bodyClass}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-gray-50">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}