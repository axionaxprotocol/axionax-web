import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function Features() {
  const features = [
    {
      title: 'Proof of Probabilistic Checking (PoPC)',
      description: 'Scalable validation through statistical sampling with O(s) verification cost instead of O(n). Delayed VRF ensures unpredictable challenge selection with stratified sampling for comprehensive coverage.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Ultra-High Performance',
      description: '45,000+ transactions per second with sub-second finality. 3x faster than Go implementation with 2.67x less memory usage. Built with Rust for maximum performance.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'AI-Powered Auto-Selection Router (ASR)',
      description: 'ML-powered worker assignment with fairness guarantees and load balancing. Optimizes compute resource allocation across the network automatically.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Multi-Language Architecture',
      description: 'Rust core (80%) for performance, Python (10%) for ML/AI via PyO3, and TypeScript SDK (10%) for developers. Best tool for each job.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'DeAI Sentinel & Dynamic Pricing',
      description: 'ML-based anomaly detection, fraud prevention, and Posted Price Controller for dynamic pricing based on real-time utilization and queue length.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Advanced Cryptographic Security',
      description: 'Delayed VRF for unpredictable randomness, Ed25519 signatures, Blake2b hashing, replica diversity to prevent collusion, and fraud-proof window with validator accountability.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Why Choose axionax?</h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Built from the ground up to solve real-world problems with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              hover
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg text-primary-500">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
