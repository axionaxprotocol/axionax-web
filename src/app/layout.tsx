import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Axionax Protocol - Layer-1 Blockchain for Decentralized Compute with AI',
  description: 'Axionax is a Layer-1 blockchain with PoPC consensus, ASR auto-selection, and DeAI security for decentralized compute markets',
  keywords: [
    'blockchain',
    'Layer-1',
    'L1',
    'decentralized compute',
    'PoPC',
    'Proof of Probabilistic Checking',
    'VRF',
    'AI',
    'machine learning',
    'DeAI',
    'fraud detection',
    'Rust',
    'Python',
    'TypeScript',
    'smart contracts',
    'Web3',
  ],
  authors: [{ name: 'Axionax Protocol Team' }],
  openGraph: {
    type: 'website',
    url: 'https://axionax.org/',
    title: 'Axionax Protocol - Layer-1 Blockchain for Decentralized Compute with AI',
    description: 'Unifying Execution, PoPC Validation, Data Availability, and Settlement with ML-powered auto-selection and fraud detection',
    siteName: 'Axionax Protocol',
    images: [
      {
        url: 'https://axionax.org/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Axionax Protocol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@axionaxprotocol',
    creator: '@axionaxprotocol',
    title: 'Axionax Protocol - Layer-1 Blockchain for Decentralized Compute with AI',
    description: 'Unifying Execution, PoPC Validation, Data Availability, and Settlement with ML-powered auto-selection and fraud detection',
    images: ['https://axionax.org/assets/twitter-card.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://axionax.org/" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
