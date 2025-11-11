'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function Faucet() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleClaim = async () => {
    if (!address) {
      setMessage('Please enter a valid address');
      return;
    }

    setLoading(true);
    setMessage('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage('✅ Successfully sent 100 AX to your address! Check your wallet in a few seconds.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main className="container-custom py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">Testnet Faucet</h1>
            <p className="text-dark-400 text-lg">
              Get free testnet AX tokens for development and testing
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Claim Testnet Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Wallet Address
                  </label>
                  <Input
                    type="text"
                    placeholder="0x..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={handleClaim}
                  isLoading={loading}
                  disabled={loading || !address}
                >
                  {loading ? 'Processing...' : 'Claim 100 AX'}
                </Button>

                {message && (
                  <div className={`p-4 rounded-lg ${
                    message.includes('✅') 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Faucet Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-dark-400">
                <div className="flex items-start gap-3">
                  <div className="text-primary-500 mt-1">•</div>
                  <div>
                    <strong className="text-white">Amount:</strong> 100 AX per request
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary-500 mt-1">•</div>
                  <div>
                    <strong className="text-white">Cooldown:</strong> 24 hours between requests
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary-500 mt-1">•</div>
                  <div>
                    <strong className="text-white">Network:</strong> axionax Testnet
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary-500 mt-1">•</div>
                  <div>
                    <strong className="text-white">Purpose:</strong> For testing and development only
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-dark-500 text-sm">
              Need more tokens? Join our{' '}
              <a href="https://discord.gg/axionax" className="text-primary-400 hover:text-primary-300">
                Discord
              </a>{' '}
              for developer support.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
