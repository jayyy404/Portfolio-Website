import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sapasap Portfolio',
  description: 'This is the portfolio of Sapasap, showcasing projects and skills.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
