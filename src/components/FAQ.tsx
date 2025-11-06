export default function FAQ() {
  const faqs = [
    {
      icon: '🎯',
      question: 'What makes Axionax different from other L1 blockchains?',
      answer: 'Axionax uniquely combines PoPC consensus (probabilistic validation with O(s) cost), ML-powered ASR for fair worker selection, and native DeAI security. We\'re specifically optimized for decentralized compute markets, not generic smart contracts.',
    },
    {
      icon: '🔲',
      question: 'How does PoPC consensus work?',
      answer: 'Instead of re-executing all computations (expensive), PoPC uses VRF to randomly sample a small subset of proofs for verification. This provides probabilistic security guarantees while dramatically reducing verification costs to O(s) where s << n.',
    },
    {
      icon: '🎯',
      question: 'What is ASR (Auto-Selection Router)?',
      answer: 'ASR is our ML-powered system that automatically selects the best workers for each job based on suitability score, performance history, and fairness quotas. It uses ε-greedy exploration and VRF weighting to prevent centralization.',
    },
    {
      icon: '🛡️',
      question: 'How does DeAI Sentinel protect against fraud?',
      answer: 'DeAI Sentinel uses Isolation Forest (unsupervised ML) to detect anomalous proof patterns in real-time. It analyzes proof size, timing, merkle depth, and historical patterns to flag suspicious workers before they can cause damage.',
    },
    {
      icon: '💰',
      question: 'How is pricing determined?',
      answer: 'Our Posted Price Controller dynamically adjusts prices based on real-time utilization and queue length. When demand is high, prices increase to incentivize more workers. When supply exceeds demand, prices decrease to attract more jobs.',
    },
    {
      icon: '⚡',
      question: 'Why use Rust + Python + TypeScript?',
      answer: 'Each language excels at different tasks: Rust provides blazing-fast performance (3x faster than Go) for consensus and networking. Python offers rich ML libraries for ASR and fraud detection. TypeScript ensures great developer experience for SDKs and dApps.',
    },
    {
      icon: '🎉',
      question: 'When will mainnet launch?',
      answer: 'Mainnet is planned for Q3-Q4 2026 after thorough testnet validation, security audits, and community testing. We\'re currently in v1.6 development with testnet launch scheduled for Q1 2026.',
    },
    {
      icon: '🔥',
      question: 'Is the testnet safe to use?',
      answer: 'The testnet (Chain ID: 86137) is for testing only. DO NOT send real funds. Any network claiming to be "Axionax Mainnet" is a scam. Only use testnet tokens for development and testing purposes.',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{faq.icon}</span>
                <h3 className="text-xl font-bold flex-1">{faq.question}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
