import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/themeprovider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gopinho - Profilev2',
  description: 'Personal webapp',
}

import Ocrb from 'next/font/local'
const ocrb = Ocrb({ src: '../public/fonts/ocrb.otf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className={`${ocrb.className} relative flex h-screen`}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
