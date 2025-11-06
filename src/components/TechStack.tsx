export default function TechStack() {
  const techStack = [
    { name: '🦀 Rust', percentage: '80%', description: 'Consensus • Blockchain • Crypto • Network • State • RPC' },
    { name: '🐍 Python', percentage: '10%', description: 'ASR • Fraud Detection • ML Security' },
    { name: '📘 TypeScript', percentage: '10%', description: 'SDK • Client Library • DApp Integration' },
  ]

  return (
    <section id="tech" className="py-20 px-4 bg-white/[0.02]">
      <div className="container mx-auto">
        <h2 className="section-title">Multi-Language Architecture</h2>
        <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12">
          Axionax v1.6 leverages the best of each language: <strong className="text-white">Rust</strong> for performance-critical consensus, <strong className="text-white">Python</strong> for ML/AI workloads, and <strong className="text-white">TypeScript</strong> for developer experience.
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{tech.name}</span>
                <span className="text-2xl font-bold text-primary">{tech.percentage}</span>
              </div>
              <div className="text-text-secondary text-sm">{tech.description}</div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                  style={{ width: tech.percentage }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6">🚀 Quick Start Installation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h4 className="font-bold mb-2">🐧 Linux</h4>
              <pre className="bg-black/30 p-3 rounded text-xs overflow-x-auto">
                <code>curl -sSL https://raw.githubusercontent.com/axionaxprotocol/axionax-core/main/scripts/install_dependencies_linux.sh | bash</code>
              </pre>
              <p className="text-xs text-text-secondary mt-2">Ubuntu/Debian, CentOS/RHEL, Arch, Alpine</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h4 className="font-bold mb-2">🪟 Windows</h4>
              <pre className="bg-black/30 p-3 rounded text-xs overflow-x-auto">
                <code>irm https://raw.githubusercontent.com/axionaxprotocol/axionax-core/main/scripts/install_dependencies_windows.ps1 | iex</code>
              </pre>
              <p className="text-xs text-text-secondary mt-2">PowerShell as Administrator required</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h4 className="font-bold mb-2">🍎 macOS</h4>
              <pre className="bg-black/30 p-3 rounded text-xs overflow-x-auto">
                <code>curl -sSL https://raw.githubusercontent.com/axionaxprotocol/axionax-core/main/scripts/install_dependencies_macos.sh | bash</code>
              </pre>
              <p className="text-xs text-text-secondary mt-2">macOS 10.15+, M1/M2/M3 & Intel</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary mb-4">📦 Then Build All Components</h3>
          <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
            <code className="text-green-400"># 1. Clone repository</code><br />
            <code>git clone https://github.com/axionaxprotocol/axionax-core.git</code><br />
            <code>cd axionax-core</code><br />
            <br />
            <code className="text-green-400"># 2. Build Rust core</code><br />
            <code>cargo build --release --workspace</code><br />
            <br />
            <code className="text-green-400"># 3. Build Rust-Python bridge</code><br />
            <code>cd bridge/rust-python && ./build.sh && cd ../..</code><br />
            <br />
            <code className="text-green-400"># 4. Install Python ML dependencies</code><br />
            <code>pip install -r deai/requirements.txt</code><br />
            <br />
            <code className="text-green-400"># 5. Build TypeScript SDK</code><br />
            <code>cd sdk && npm install && npm run build && cd ..</code><br />
            <br />
            <code className="text-green-400"># 6. Run integration tests</code><br />
            <code>python3 tests/integration_simple.py</code><br />
            <br />
            <code className="text-yellow-400"># ✅ All 20/20 tests should pass!</code>
          </pre>

          <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold">
              ✔️ What gets installed: Rust, Node.js, Python, Docker, PostgreSQL, Nginx, Redis, and all build tools
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
