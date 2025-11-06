'use client';

import React, { useEffect, useState } from 'react';

export default function Statistics() {
  const [stats, setStats] = useState({
    blocks: 1250000,
    transactions: 5430000,
    validators: 156,
    marketCap: 45200000,
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        blocks: prev.blocks + Math.floor(Math.random() * 3),
        transactions: prev.transactions + Math.floor(Math.random() * 50),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const statItems = [
    {
      label: 'Total Blocks',
      value: formatNumber(stats.blocks),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      label: 'Total Transactions',
      value: formatNumber(stats.transactions),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      label: 'Active Validators',
      value: formatNumber(stats.validators),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      label: 'Market Cap',
      value: `$${(stats.marketCap / 1000000).toFixed(1)}M`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-dark-900/50 border-y border-dark-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Network Statistics</h2>
          <p className="text-dark-400 text-lg">Real-time metrics from the AxionAX network</p>
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
              <div className="text-dark-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
