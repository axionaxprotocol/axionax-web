import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export default function Docs() {
  const docSections = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', href: '#intro' },
        { name: 'Quick Start', href: '#quickstart' },
        { name: 'Installation', href: '#installation' },
        { name: 'Network Configuration', href: '#network' },
      ],
    },
    {
      title: 'Core Concepts',
      items: [
        { name: 'Proof of Positive Contribution', href: '#popc' },
        { name: 'Validators', href: '#validators' },
        { name: 'Transactions', href: '#transactions' },
        { name: 'Smart Contracts', href: '#contracts' },
      ],
    },
    {
      title: 'Development',
      items: [
        { name: 'SDK Documentation', href: '#sdk' },
        { name: 'API Reference', href: '#api' },
        { name: 'Example Projects', href: '#examples' },
        { name: 'Testing Guide', href: '#testing' },
      ],
    },
    {
      title: 'Advanced',
      items: [
        { name: 'Running a Validator', href: '#run-validator' },
        { name: 'Network Architecture', href: '#architecture' },
        { name: 'Security Best Practices', href: '#security' },
        { name: 'Performance Optimization', href: '#performance' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main className="container-custom py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Documentation</h1>
          <p className="text-dark-400 text-lg">
            Everything you need to build on axionax
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {docSections.map((section) => (
            <Card key={section.title} hover>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-primary p-6 text-white">
            <div className="mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Start</h3>
            <p className="text-white/80 mb-4">
              Get started with axionax in under 5 minutes
            </p>
            <Link href="#quickstart" className="text-white font-semibold hover:underline">
              Start Building →
            </Link>
          </Card>

          <Card className="bg-gradient-to-br from-secondary-900 to-secondary-800 p-6 text-white">
            <div className="mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">SDK & API</h3>
            <p className="text-white/80 mb-4">
              Comprehensive SDK for TypeScript, Python, and Rust
            </p>
            <a
              href="https://github.com/axionaxprotocol/axionax-sdk-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              View on GitHub →
            </a>
          </Card>

          <Card className="bg-gradient-to-br from-dark-800 to-dark-900 p-6 text-white border-primary-500/50">
            <div className="mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Examples</h3>
            <p className="text-white/80 mb-4">
              Learn from real-world example projects
            </p>
            <Link href="#examples" className="text-white font-semibold hover:underline">
              Browse Examples →
            </Link>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">1. Install the SDK</h3>
              <div className="code-block mb-6">
                <code>npm install @axionax/sdk</code>
              </div>

              <h3 className="text-xl font-semibold mb-4">2. Connect to Testnet</h3>
              <div className="code-block mb-6">
                <pre>{`import { axionaxClient } from '@axionax/sdk';

const client = new axionaxClient({
  network: 'testnet',
  endpoint: 'https://rpc.testnet.axionax.org'
});

// Get network status
const status = await client.getNetworkStatus();
console.log(status);`}</pre>
              </div>

              <h3 className="text-xl font-semibold mb-4">3. Create a Wallet</h3>
              <div className="code-block mb-6">
                <pre>{`// Create new wallet
const wallet = client.createWallet();

// Or import existing
const imported = client.importWallet(privateKey);

// Get balance
const balance = await client.getBalance(wallet.address);`}</pre>
              </div>

              <div className="mt-8 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                <p className="text-primary-400 font-semibold mb-2">📚 Full documentation coming soon!</p>
                <p className="text-dark-400 text-sm">
                  We&apos;re working on comprehensive documentation. In the meantime, check out our{' '}
                  <a href="https://github.com/axionaxprotocol" className="text-primary-400 hover:underline">
                    GitHub repositories
                  </a>{' '}
                  for code examples and API references.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
