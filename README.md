# Axionax Protocol - Web Interface 🌐

<div align="center">

![axionax Logo](public/logo.svg)

**Official Web Interface for axionax Blockchain Protocol**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Protocol](https://img.shields.io/badge/Protocol-AxionAX-purple)](https://axionax.org)

[Website](https://axionax.org) • [Documentation](https://docs.axionax.org) •
[Explorer](https://explorer.axionax.org) • [Faucet](https://faucet.axionax.org)

</div>

---

## � Latest Update (November 2025)

🎯 **Pre-Testnet Launch Preparation!**

Recent updates:
- ✅ Fixed Docker build issues (added package-lock.json)
- ✅ Removed unpublished SDK dependency
- ✅ Updated deployment documentation for Linux & Windows
- 🔥 Enhanced DEPLOYMENT.md with platform-specific instructions
- 📦 Ready for VPS deployment (both Linux and Windows Server)

**Status**: Production-ready web interface, awaiting testnet launch Q1 2026

---

## 🖼️ Screenshots

### Home Page
![AxionAX Home Page](docs/screenshots/home.png)
*Landing page showcasing Axionax Protocol features and roadmap*

### Block Explorer
![Block Explorer](docs/screenshots/explorer.png)
*Real-time blockchain data visualization with block and transaction search*

### Testnet Faucet
![Testnet Faucet](docs/screenshots/faucet.png)
*Easy AXX token distribution for testnet users*

### Compute Marketplace
![Compute Marketplace](docs/screenshots/marketplace.png)
*Browse and purchase decentralized compute resources*

---

## About

Official web interface for Axionax Protocol - a next-generation Layer-1 blockchain for decentralized compute markets.

**Repository**: [axionaxprotocol/axionax-web](https://github.com/axionaxprotocol/axionax-web)

**Related Projects**:
- **SDK**: [`axionax-sdk-ts`](../axionax-sdk-ts) - TypeScript SDK
- **Docs**: [`axionax-docs`](../axionax-docs) - Documentation
- **Deploy**: [`axionax-deploy`](../axionax-deploy) - Backend infrastructure

---

## Features

---

## �📖 About

This is the **official web interface** for the AxionAX Protocol - a
next-generation Layer-1 blockchain designed for high-performance decentralized
compute markets.

### Part of axionax Ecosystem

This web interface connects to the core axionax Protocol:

- **Protocol Core**: [`axionax-core`](https://github.com/axionaxprotocol/axionax-core) - Rust/Python blockchain implementation
- **SDK**: [`axionax-sdk-ts`](https://github.com/axionaxprotocol/axionax-sdk-ts) - TypeScript SDK (used by this interface)
- **Documentation**: [`axionax-docs`](https://github.com/axionaxprotocol/axionax-docs) - Protocol documentation
- **Deployment**: [`axionax-deploy`](https://github.com/axionaxprotocol/axionax-deploy) - Infrastructure for RPC/Explorer/Faucet
- **DevTools**: [`axionax-devtools`](https://github.com/axionaxprotocol/axionax-devtools) - Development & testing utilities
- **Marketplace**: [`axionax-marketplace`](https://github.com/axionaxprotocol/axionax-marketplace) - Compute marketplace dApp
- **Issue Manager**: [`issue-manager`](https://github.com/axionaxprotocol/issue-manager) - Multi-repo task tracking

**GitHub Organization**: https://github.com/axionaxprotocol

**Current Status**: ✅ Ready - Production build ready, awaiting testnet launch

---

## 🌟 Features

- **Landing Page** - Protocol overview and key features
- **Block Explorer** - Real-time blockchain data visualization
  - Block and transaction search
  - Account history and balances
  - Network statistics
- **Testnet Faucet** - Easy AXX token distribution
- **API Docs** - Interactive API documentation
- **Wallet Integration** - MetaMask and Web3 wallet support
- **Compute Marketplace** - Browse compute resources

---

## 🏗️ Tech Stack

### Frontend

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) - React
  framework
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type safety
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: Custom React components
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Web3 Integration

- **SDK**: [`@axionax/sdk`](../axionax-sdk-ts) - Official TypeScript SDK
- **RPC**: JSON-RPC 2.0 connection to AxionAX nodes
- **WebSocket**: Real-time blockchain updates
- **Wallet**: MetaMask and Web3 wallet support

### Development Tools

- **Build**: Vite / Next.js build system
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel, Netlify, GitHub Pages, or VPS

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- (Optional) Docker & Docker Compose for full stack deployment

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/axionaxprotocol/axionax-web.git
   cd axionax-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open browser** Navigate to [http://localhost:3000](http://localhost:3000)

---

## 💻 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run tests
npm test

# Type checking
npm run type-check

# Format code
npm run format
```

### Project Structure

```
axionax-web/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── page.tsx        # Home page
│   │   ├── explorer/       # Block explorer
│   │   ├── faucet/         # Testnet faucet
│   │   └── docs/           # Documentation
│   ├── components/         # React components
│   │   ├── ui/            # UI components (Button, Card, etc.)
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── home/          # Home page components
│   ├── lib/               # Utility functions
│   └── styles/            # Global styles
├── public/                # Static assets
├── docker-compose.yml     # Docker services configuration
├── Dockerfile            # Web app container
├── nginx/                # Nginx configuration
├── .github/              # GitHub Actions workflows
└── docs/                 # Documentation files
```

### Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run linting before committing:

```bash
npm run lint
npm run format
```

---

## 🚢 Deployment

### Option 1: Static Export (Recommended)

Build and export as static site:

```bash
npm run build
# Output in ./out directory
```

Deploy to:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Any static hosting

### Option 2: Docker Deployment

For full-stack local development:

```bash
# Build and start web interface
docker-compose up -d web

# View logs
docker-compose logs -f web
```

### Option 3: Production VPS Deployment

For production deployment with full backend stack (RPC, Explorer API, Faucet), see:

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete VPS deployment guide
- **[DNS Setup Guide](docs/DNS_SETUP.md)** - Domain configuration
- **[axionax-deploy](../axionax-deploy)** - Backend infrastructure

---

## 🏛️ Web Architecture

### Frontend Architecture

```
┌─────────────────────────────────────┐
│     AxionAX Web Interface           │
│         (Next.js 15)                │
└────────┬────────────────────────────┘
         │
         ├── Pages/Routes
         │   ├── Home (/)
         │   ├── Explorer (/explorer)
         │   ├── Faucet (/faucet)
         │   └── Docs (/docs)
         │
         ├── Components
         │   ├── UI Components
         │   ├── Layout (Navbar, Footer)
         │   └── Feature Components
         │
         └── Integration
             ├── AxionAX SDK
             ├── RPC Client
             ├── WebSocket
             └── Web3 Wallet
```

### Component Structure

| Layer              | Technology         | Purpose                    |
| ------------------ | ------------------ | -------------------------- |
| **UI Layer**       | React + Tailwind   | User interface             |
| **State**          | React Hooks        | State management           |
| **API Client**     | @axionax/sdk       | Blockchain interaction     |
| **Web3**           | ethers.js          | Wallet connection          |
| **Build**          | Next.js            | SSR/SSG optimization       |

---

## � Integration

### Using AxionAX SDK

```typescript
import { AxionAXClient } from '@axionax/sdk';

// Connect to AxionAX network
const client = new AxionAXClient({
  rpcUrl: 'https://rpc.axionax.org',
  chainId: 86137 // Testnet
});

// Get latest block
const block = await client.getLatestBlock();

// Get transaction
const tx = await client.getTransaction(txHash);
```

### Connecting Wallet

```typescript
import { ethers } from 'ethers';

// Connect MetaMask
const provider = new ethers.BrowserProvider(window.ethereum);
await provider.send('eth_requestAccounts', []);

// Add AxionAX network
await provider.send('wallet_addEthereumChain', [{
  chainId: '0x15079', // 86137 in hex
  chainName: 'AxionAX Testnet',
  rpcUrls: ['https://rpc.axionax.org'],
  nativeCurrency: {
    name: 'AXX',
    symbol: 'AXX',
    decimals: 18
  },
  blockExplorerUrls: ['https://explorer.axionax.org']
}]);
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_RPC_URL=https://rpc.axionax.org
NEXT_PUBLIC_CHAIN_ID=86137
NEXT_PUBLIC_EXPLORER_URL=https://explorer.axionax.org
NEXT_PUBLIC_API_URL=https://api.axionax.org
```

Full API documentation: [docs.axionax.org/api](https://docs.axionax.org/api)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

---

## 🔒 Security

### Security Best Practices

- Regular dependency updates
- Security audits with Snyk
- Input validation and sanitization
- Rate limiting on APIs
- SSL/TLS encryption
- Environment variable protection

### Reporting Security Issues

If you discover a security vulnerability, please email: **security@axionax.org**

Do not open public issues for security vulnerabilities.

---

## 🔗 Links & Resources

### AxionAX Protocol

| Component            | Description               | Location                                         | Status     |
| -------------------- | ------------------------- | ------------------------------------------------ | ---------- |
| **Web** (this repo)  | Official website          | `axionax-web/`                                   | ✅ Ready   |
| **Core**             | Blockchain implementation | [`../axionax-core`](../axionax-core)             | ✅ Ready   |
| **SDK**              | TypeScript developer SDK  | [`../axionax-sdk-ts`](../axionax-sdk-ts)         | ✅ Ready   |
| **Docs**             | Protocol documentation    | [`../axionax-docs`](../axionax-docs)             | 📝 Active  |
| **Marketplace**      | Compute marketplace dApp  | [`../axionax-marketplace`](../axionax-marketplace) | 🚧 Beta  |
| **DevTools**         | Development utilities     | [`../axionax-devtools`](../axionax-devtools)     | ✅ Ready   |
| **Deploy**           | Infrastructure            | [`../axionax-deploy`](../axionax-deploy)         | 🔥 Testing |
| **Issue Manager**    | Task automation           | [`../issue-manager`](../issue-manager)           | 🎉 New!    |

**GitHub Organization**: https://github.com/axionaxprotocol

### axionax Network

- **Testnet RPC**: [rpc.axionax.org](https://rpc.axionax.org)
- **Block Explorer**: [explorer.axionax.org](https://explorer.axionax.org)
- **Testnet Faucet**: [faucet.axionax.org](https://faucet.axionax.org)
- **Documentation**: [docs.axionax.org](https://docs.axionax.org)

### Development Resources

- **SDK Docs**: [docs.axionax.org/sdk](https://docs.axionax.org/sdk)
- **API Reference**: [docs.axionax.org/api](https://docs.axionax.org/api)
- **Contributing**: See [CONTRIBUTING.md](../axionax-docs/CONTRIBUTING.md)

### Community (Coming Q1 2026)

- **Twitter**: [@AxionAX](https://twitter.com/axionaxprotocol)
- **Discord**: [discord.gg/axionax](https://discord.gg/axionax)
- **Telegram**: [t.me/axionax](https://t.me/axionax)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Note**: The AxionAX Protocol Core uses AGPLv3. See [`../axionax-core/LICENSE`](../axionax-core/LICENSE).

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Hosting and deployment platform
- **AxionAX Community** - Feedback and support

---

<div align="center">

**Part of the AxionAX Protocol Ecosystem**

Built with ❤️ by the Axionax Team

**Last Updated**: November 7, 2025

</div>
