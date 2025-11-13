'use client';

import React, { useEffect, useState } from 'react';

export default function Statistics() {
  const [stats, setStats] = useState({
    blocks: 1000,
    services: 7,
    uptime: 44,
    deployment: 78,
  });

  useEffect(() => {
    // Simulate block increment
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        blocks: prev.blocks + 1,
      }));
    }, 3000); // Mock RPC mines blocks every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const statItems = [
    {
      label: 'Mock Block Height',
      value: formatNumber(stats.blocks),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subtitle: 'Auto-increment every 3s',
    },
    {
      label: 'Services Operational',
      value: `${stats.services}/9`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      subtitle: 'Infrastructure 100%',
    },
    {
      label: 'Infrastructure Uptime',
      value: `${stats.uptime}h+`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      subtitle: 'PostgreSQL & Redis',
    },
    {
      label: 'Testnet Deployment',
      value: `${stats.deployment}%`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      subtitle: 'VPS vmi2895217',
    },
  ];

  return (
    <section className="section bg-dark-900/50 border-y border-dark-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Live Testnet Metrics</h2>
          <p className="text-dark-400 text-lg">Real-time status from VPS 217.216.109.5</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <div
              key={stat.label}
              className="card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4 text-primary-500">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-dark-400 mb-1">{stat.label}</div>
              <div className="text-xs text-dark-500">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Service Status Bar */}
        <div className="mt-12 p-6 rounded-xl bg-dark-900 border border-dark-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-dark-200">Service Health</h3>
            <span className="text-sm text-amber-400">⚠️ 2 services debugging</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-full bg-dark-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <span className="text-sm text-dark-400 whitespace-nowrap">78%</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ RPC</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ PostgreSQL</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ Redis</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ Nginx/SSL</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ Grafana</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ Prometheus</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">✅ Web</span>
              <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded">🔧 Explorer API</span>
              <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded">🔧 Faucet API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
