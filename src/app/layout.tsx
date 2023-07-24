import { ThemesProvider } from '@/contexts/ThemesProvider'
import type { Metadata } from 'next'
import { Montserrat, Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Quote Generator',
  description:
    'A web application that generates random quotes, built with React, Next.js and TailwindCSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} font-sans dark:bg-zinc-900`}
      >
        <ThemesProvider>{children}</ThemesProvider>
      </body>
    </html>
  )
}
