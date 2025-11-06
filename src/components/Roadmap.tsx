export default function Roadmap() {
  const phases = [
    {
      status: 'completed',
      date: 'Q4 2025',
      title: 'Phase 1: v1.6 Core Integration',
      description: 'Multi-language architecture complete with Rust core, Python ML layer, and TypeScript SDK. All 20 tests passing.',
      items: [
        '✅ Rust Core Modules (consensus, blockchain, crypto)',
        '✅ Network Layer (libp2p + 17 tests)',
        '✅ State & RPC (RocksDB + JSON-RPC)',
        '✅ Node Integration Complete',
        '✅ Python DeAI (ASR + Fraud Detection)',
      ],
    },
    {
      status: 'active',
      date: 'Q1 2026',
      title: 'Phase 2: v1.5 Testnet Launch',
      description: 'Public testnet with 50+ validators and 100+ worker nodes',
      items: [
        '→ Testnet genesis configuration',
        '→ Deploy validator infrastructure',
        '→ Block explorer and faucet',
        '→ Community onboarding',
        '→ Stress testing (10K+ TPS)',
      ],
    },
    {
      status: 'upcoming',
      date: 'Q2 2026',
      title: 'Phase 3: Production Optimization',
      description: 'Data Availability optimization and security audits',
      items: [
        'Production-grade DA layer (erasure coding)',
        'External security audits',
        'Performance optimization (20K+ TPS)',
        'Multi-node testing',
      ],
    },
    {
      status: 'upcoming',
      date: 'Q3-Q4 2026',
      title: 'Phase 4: Mainnet Launch',
      description: 'Production mainnet with full security guarantees',
      items: [
        'Mainnet genesis (Chain ID: 86150)',
        'Token distribution',
        'DAO governance activation',
        'Bug bounty program',
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 px-4 bg-white/[0.02]">
      <div className="container mx-auto">
        <h2 className="section-title">Development Roadmap</h2>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12">
          Our journey from testnet to mainnet and beyond
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative pl-8 border-l-4 pb-8 ${
                phase.status === 'completed' 
                  ? 'border-green-500' 
                  : phase.status === 'active'
                  ? 'border-primary'
                  : 'border-white/20'
              }`}
            >
              <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                phase.status === 'completed'
                  ? 'bg-green-500'
                  : phase.status === 'active'
                  ? 'bg-primary animate-pulse'
                  : 'bg-white/20'
              }`}>
                {phase.status === 'completed' && <span className="text-white text-sm">✓</span>}
                {phase.status === 'active' && <span className="text-white text-sm">⚡</span>}
                {phase.status === 'upcoming' && <span className="text-white text-sm">○</span>}
              </div>

              <div className="card">
                <div className="text-sm text-primary font-semibold mb-2">{phase.date}</div>
                <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                <p className="text-text-secondary mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-text-secondary pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
