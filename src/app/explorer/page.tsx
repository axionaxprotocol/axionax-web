'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function Explorer(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main className="container-custom py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Block Explorer
          </h1>
          <p className="text-dark-400 text-lg">
            Explore blocks, transactions, and addresses on the axionax testnet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary-400">Latest Block</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">#1,234,567</div>
              <div className="text-sm text-dark-400">2 seconds ago</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary-400">
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">5,678,901</div>
              <div className="text-sm text-dark-400">All time</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary-400">
                Active Validators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">127</div>
              <div className="text-sm text-dark-400">Online now</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Blocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-dark-900 rounded-lg border border-dark-800 hover:border-primary-500/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-primary-400 font-mono">
                      #{1234567 - i}
                    </div>
                    <div className="text-dark-400 text-sm">
                      {i * 2} seconds ago
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-dark-500">Txs:</span>{' '}
                      <span className="text-white">
                        {Math.floor(Math.random() * 50) + 10}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-dark-500">Size:</span>{' '}
                      <span className="text-white">
                        {Math.floor(Math.random() * 100) + 50} KB
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-dark-500 text-sm">
            Full explorer functionality coming soon. This is a preview
            interface.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
