import "./globals.css"
import { Inter } from "next/font/google"
import { DesignProvider } from "./components/contexts/DesignContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CMS Project",
  description: "A simple CMS-like project with design selection",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DesignProvider>{children}</DesignProvider>
      </body>
    </html>
  )
}

