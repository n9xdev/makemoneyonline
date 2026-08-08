import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '$150k+ Profit Trader, Researcher & Developer',
  description: 'AI Agents, GameFi, Provably Fair Casinos',
  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

