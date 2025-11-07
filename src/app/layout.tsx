import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'axionax protocol',
  description: 'Layer-1 blockchain for decentralized compute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
