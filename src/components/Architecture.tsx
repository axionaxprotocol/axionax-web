export default function Architecture() {
  const layers = [
    {
      badge: 'Layer 1',
      icon: '⚙️',
      title: 'Execution Layer',
      description: 'Worker nodes execute compute jobs with proof generation',
      features: ['ASR Router', 'Worker Selection', 'Job Queue'],
    },
    {
      badge: 'Layer 2',
      icon: '🔲',
      title: 'PoPC Validation',
      description: 'Probabilistic checking of execution proofs via VRF sampling',
      features: ['VRF Selection', 'Stratified Sampling', 'Fraud Detection'],
    },
    {
      badge: 'Layer 3',
      icon: '🗄️',
      title: 'Data Availability',
      description: 'Erasure coding ensures data can be reconstructed from any subset',
      features: ['Reed-Solomon', 'Sharding', 'CDN Storage'],
    },
    {
      badge: 'Layer 4',
      icon: '✔️',
      title: 'Settlement Layer',
      description: 'Final state commitment and economic settlement on L1',
      features: ['State Root', 'Payment', 'Slashing'],
    },
  ]

  const sidebars = [
    {
      icon: '💰',
      title: 'Price Controller',
      description: 'Dynamic pricing based on utilization and queue length',
    },
    {
      icon: '🛡️',
      title: 'DeAI Sentinel',
      description: 'ML-based fraud detection and anomaly monitoring',
    },
    {
      icon: '🗳️',
      title: 'DAO Governance',
      description: 'Community parameter tuning and upgrades',
    },
  ]

  return (
    <section id="architecture" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">System Architecture</h2>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12">
          Axionax unifies all four critical blockchain layers into a single, cohesive protocol designed for high-performance decentralized compute.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            {layers.map((layer, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <div className="card flex-1 w-full">
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                    {layer.badge}
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{layer.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{layer.title}</h3>
                      <p className="text-text-secondary mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < layers.length - 1 && (
                  <div className="text-4xl text-primary rotate-90 md:rotate-0">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {sidebars.map((sidebar, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{sidebar.icon}</div>
                <h4 className="text-xl font-bold mb-2">{sidebar.title}</h4>
                <p className="text-text-secondary text-sm">{sidebar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
