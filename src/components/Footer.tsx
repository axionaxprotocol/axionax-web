import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-white/[0.02]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <Link href="https://github.com/axionaxprotocol/axionax-core" target="_blank" className="text-text-secondary hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href="https://axionax.org" target="_blank" className="text-text-secondary hover:text-primary transition-colors">
            Website
          </Link>
          <Link href="/coming-soon" className="text-text-secondary hover:text-primary transition-colors opacity-60">
            Discord 🔜
          </Link>
          <Link href="/coming-soon" className="text-text-secondary hover:text-primary transition-colors opacity-60">
            Twitter 🔜
          </Link>
          <Link href="/LICENSE" target="_blank" className="text-text-secondary hover:text-primary transition-colors">
            License (AGPLv3)
          </Link>
        </div>

        <p className="text-center text-text-secondary">
          &copy; 2025 Axionax Protocol. Licensed under{' '}
          <Link href="/LICENSE" target="_blank" className="text-primary hover:underline">
            AGPLv3
          </Link>
          {' '}with Custom Protection Clause.
        </p>
        <p className="text-center text-text-secondary text-sm mt-2">
          Made with 💙 by the Axionax Core Team
        </p>
      </div>
    </footer>
  )
}
