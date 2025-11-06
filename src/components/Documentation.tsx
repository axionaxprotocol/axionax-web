export default function Documentation() {
  const docs = [
    {
      icon: '📚',
      title: 'API Reference',
      description: 'Complete API documentation for all modules, RPC methods, and client SDKs.',
      href: '/docs/api',
    },
    {
      icon: '🔨',
      title: 'Build Guide',
      description: 'Step-by-step instructions for building and deploying Axionax nodes.',
      href: '/docs/build',
    },
    {
      icon: '🎉',
      title: 'Testnet Integration',
      description: 'Connect to the Axionax testnet and start validating transactions.',
      href: '/docs/testnet',
    },
    {
      icon: '⚙️',
      title: 'Node Integration',
      description: 'Full node setup with Network, State, and RPC integration guide.',
      href: '/docs/node',
    },
    {
      icon: '🗄️',
      title: 'State & RPC Usage',
      description: 'RocksDB state management and JSON-RPC 2.0 server documentation.',
      href: '/docs/state',
    },
    {
      icon: '🏗️',
      title: 'Architecture',
      description: 'Deep dive into PoPC consensus, ASR, PPC, and DeAI security design.',
      href: '/docs/architecture',
    },
    {
      icon: '🚀',
      title: 'Quick Start',
      description: 'Get started with Axionax in 5 minutes - beginner-friendly tutorial.',
      href: '/docs/quickstart',
    },
  ]

  return (
    <section id="docs" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Documentation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {docs.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              className="card group"
            >
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {doc.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{doc.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
