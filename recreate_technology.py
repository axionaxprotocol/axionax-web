import os

tech_content = """import React from 'react';

export default function Technology() {
  const techStack = [
    {
      category: 'Core (Rust 80%)',
      items: [
        { name: 'Rust 1.75+', description: 'High-performance blockchain core' },
        { name: 'Tokio', description: 'Async runtime' },
        { name: 'RocksDB', description: 'State storage' },
        { name: 'libp2p', description: 'P2P networking' },
      ],
    },
    {
      category: 'AI Layer (Python 10%)',
      items: [
        { name: 'PyO3', description: 'Rust-Python bridge' },
        { name: 'ASR Router', description: 'ML-powered worker selection' },
        { name: 'DeAI Sentinel', description: 'Fraud detection' },
        { name: 'Price Controller', description: 'Dynamic pricing' },
      ],
    },
    {
      category: 'SDK (TypeScript 10%)',
      items: [
        { name: 'TypeScript SDK', description: 'Developer tools' },
        { name: 'Web3.js/Ethers.js', description: 'Web3 integration' },
        { name: 'JSON-RPC', description: 'API interface' },
      ],
    },
    {
      category: 'Consensus & Crypto',
      items: [
        { name: 'PoPC', description: 'Proof of Probabilistic Checking' },
        { name: 'VRF', description: 'Verifiable Random Function' },
        { name: 'Ed25519', description: 'Signature scheme' },
        { name: 'Blake2b', description: 'Hashing algorithm' },
      ],
    },
  ];

  return (
    <section className="section bg-dark-900/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Multi-Language Architecture</h2>
          <p className="text-dark-400 text-lg max-w-3xl mx-auto">
            Built with the best tool for each job: Rust for performance, Python for AI/ML, TypeScript for developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {techStack.map((stack, index) => (
            <div
              key={stack.category}
              className="card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{stack.category}</h3>
              <div className="space-y-3">
                {stack.items.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">{item.name}</div>
                      <div className="text-dark-400 text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Architecture Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl font-bold">🦀</span>
              </div>
              <div className="text-white font-medium">Rust Core</div>
              <div className="text-dark-400 text-sm">80%</div>
            </div>
            <div className="text-primary-500 text-2xl">→</div>
            <div className="flex-1">
              <div className="w-16 h-16 bg-gradient-secondary rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl font-bold">🐍</span>
              </div>
              <div className="text-white font-medium">Python AI</div>
              <div className="text-dark-400 text-sm">10%</div>
            </div>
            <div className="text-secondary-500 text-2xl">→</div>
            <div className="flex-1">
              <div className="w-16 h-16 bg-dark-800 border border-dark-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl font-bold">📘</span>
              </div>
              <div className="text-white font-medium">TypeScript SDK</div>
              <div className="text-dark-400 text-sm">10%</div>
            </div>
          </div>
        </div>

        <div className="mt-12 card max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-3">Example: PoPC Validation</h3>
          <pre className="bg-dark-950 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-dark-300">
{`// Rust Core
pub fn validate_block(block: &Block) -> Result<()> {
    let challenges = vrf.generate_challenges();
    check_probabilistic_proof(&challenges)?;
    Ok(())
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
"""

file_path = "src/components/home/Technology.tsx"

if os.path.exists(file_path):
    os.remove(file_path)
    print(f"Removed old {file_path}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(tech_content)
    print(f"Created new {file_path}")

print("Done!")
