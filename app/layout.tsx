import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gopinho - Profilev2',
  description: 'Personal webapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
