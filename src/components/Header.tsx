'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Axionax Protocol</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-text-secondary hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#tech" className="text-text-secondary hover:text-primary transition-colors">
                Technology
              </Link>
              <Link href="#architecture" className="text-text-secondary hover:text-primary transition-colors">
                Architecture
              </Link>
              <Link href="#roadmap" className="text-text-secondary hover:text-primary transition-colors">
                Roadmap
              </Link>
              <Link href="#docs" className="text-text-secondary hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link 
                href="https://github.com/axionaxprotocol/axionax-core" 
                target="_blank"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                GitHub
              </Link>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '72px' }}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          <Link 
            href="#features" 
            className="text-2xl text-text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#tech" 
            className="text-2xl text-text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Technology
          </Link>
          <Link 
            href="#architecture" 
            className="text-2xl text-text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Architecture
          </Link>
          <Link 
            href="#roadmap" 
            className="text-2xl text-text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Roadmap
          </Link>
          <Link 
            href="#docs" 
            className="text-2xl text-text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link 
            href="https://github.com/axionaxprotocol/axionax-core" 
            target="_blank"
            className="text-2xl text-text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            GitHub
          </Link>
        </nav>
      </div>
    </>
  )
}
