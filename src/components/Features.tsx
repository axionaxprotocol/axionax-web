export default function Features() {
  const features = [
    {
      icon: '🔲',
      title: 'PoPC Consensus',
      description: 'Proof-of-Probabilistic-Checking enables scalable validation through statistical sampling with O(s) verification cost and fraud-proof security guarantees.',
    },
    {
      icon: '🎯',
      title: 'Auto-Selection Router (ASR)',
      description: 'ML-powered worker assignment with fairness guarantees, VRF-weighted selection, and quota management for optimal resource allocation.',
    },
    {
      icon: '💰',
      title: 'Dynamic Pricing (PPC)',
      description: 'Posted Price Controller adjusts pricing based on real-time utilization, queue length, and market conditions for efficient resource markets.',
    },
    {
      icon: '🛡️',
      title: 'DeAI Security Sentinel',
      description: 'ML-based anomaly detection using Isolation Forest for fraud prevention, risk scoring, and continuous security monitoring.',
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Rust core delivers 3x faster execution than Go, with Python ML layer for AI/ML workloads and TypeScript SDK for easy integration.',
    },
    {
      icon: '🗳️',
      title: 'DAO Governance',
      description: 'Community-driven parameter tuning, protocol upgrades, and transparent decision-making for sustainable decentralization.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Core Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
