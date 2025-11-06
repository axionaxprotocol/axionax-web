import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-semibold">v1.6.0-dev • 🎉 Public Testnet LIVE</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Layer-1 Blockchain for<br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Decentralized Compute with AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Axionax unifies <strong className="text-white">Execution</strong>, <strong className="text-white">PoPC Validation</strong>, <strong className="text-white">Data Availability</strong>, and <strong className="text-white">Settlement</strong> with ML-powered auto-selection and fraud detection for next-generation decentralized compute markets.
        </p>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-red-400 mb-3">⚠️ Security Notice</h3>
          <p className="text-lg mb-2"><strong>This is TESTNET code. Mainnet has NOT launched.</strong></p>
          <p className="text-text-secondary mb-2">
            Official Networks: <strong className="text-white">Testnet Chain ID: 86137</strong> (active) • <strong className="text-white">Mainnet Chain ID: 86150</strong> (reserved)
          </p>
          <p className="text-text-secondary">
            Any network claiming to be "Axionax Mainnet" is a SCAM. Verify at{' '}
            <a href="https://axionax.org/networks" target="_blank" className="text-primary hover:underline">
              axionax.org/networks
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link href="#docs" className="btn btn-primary">
            📖 Read Documentation
          </Link>
          <Link href="https://github.com/axionaxprotocol/axionax-core" target="_blank" className="btn btn-secondary">
            🔗 View on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
