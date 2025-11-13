'use client';

import React from 'react';

export default function StatusBanner() {
  return (
    <section className="bg-gradient-to-r from-primary-900/30 to-secondary-900/30 border-y border-primary-500/30">
      <div className="container-custom py-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">🎊 November 2025 Update</h2>
          <p className="text-dark-300 text-lg">Major Code Quality Improvements Complete!</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-dark-800/50 rounded-lg p-4 text-center border border-dark-700">
            <div className="text-green-400 text-sm font-semibold mb-1">Repositories</div>
            <div className="text-2xl font-bold text-white">7/7</div>
            <div className="text-dark-400 text-xs">Updated</div>
          </div>
          
          <div className="bg-dark-800/50 rounded-lg p-4 text-center border border-dark-700">
            <div className="text-blue-400 text-sm font-semibold mb-1">Documentation</div>
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-dark-400 text-xs">Complete</div>
          </div>
          
          <div className="bg-dark-800/50 rounded-lg p-4 text-center border border-dark-700">
            <div className="text-purple-400 text-sm font-semibold mb-1">VPS Services</div>
            <div className="text-2xl font-bold text-white">7/9</div>
            <div className="text-dark-400 text-xs">Operational</div>
          </div>
          
          <div className="bg-dark-800/50 rounded-lg p-4 text-center border border-dark-700">
            <div className="text-pink-400 text-sm font-semibold mb-1">Testnet Launch</div>
            <div className="text-2xl font-bold text-white">Q1</div>
            <div className="text-dark-400 text-xs">2026</div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-dark-800/30 rounded-lg p-6 border border-dark-700">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="text-xl">✨</span>
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-dark-300">
                <strong className="text-white">Code Refactoring:</strong> 15+ methods extracted, complexity reduced 47%
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-dark-300">
                <strong className="text-white">Type Safety:</strong> 4 custom error classes, 100% TypeScript coverage
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-dark-300">
                <strong className="text-white">Magic Numbers:</strong> All constants extracted (-100%)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-dark-300">
                <strong className="text-white">Documentation:</strong> Comprehensive refactoring guide published
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/axionaxprotocol/axionax-core"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
