import os

# Clean Statistics content
content = """'use client';

import React from 'react';

export default function Statistics() {
  const statItems = [
    {
      label: 'Transactions Per Second',
      value: '45,000+',
      description: '3x faster than Go implementation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: 'Finality Time',
      value: '<1 sec',
      description: 'Sub-second transaction finality',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Validation Cost',
      value: 'O(s)',
      description: 'Instead of O(n) with PoPC',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      label: 'Memory Usage',
      value: '45 MB',
      description: '2.67x less than Go (120 MB)',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-dark-900/50 border-y border-dark-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Performance Benchmarks</h2>
          <p className="text-dark-400 text-lg">Real metrics from Rust v1.6 core implementation</p>
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
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-dark-400">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">2.68x</div>
            <div className="text-sm text-dark-400">VRF Operations Improvement</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">2.92x</div>
            <div className="text-sm text-dark-400">Block Validation Speed</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">3.0x</div>
            <div className="text-sm text-dark-400">TX Verification Speed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
"""

filepath = r"D:\Desktop\axionaxius01\axionax-web\src\components\home\Statistics.tsx"

# Remove old file
if os.path.exists(filepath):
    os.remove(filepath)
    print(f"Removed old file: {filepath}")

# Write new content
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
    print(f"Created new file: {filepath}")
    
print("Done!")
