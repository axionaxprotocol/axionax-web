# AxionAX Protocol - Web Interface 🌐

<div align="center">

![AxionAX Logo](public/logo.svg)

**Official Web Interface for AxionAX Blockchain Protocol**

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
*Landing page showcasing AxionAX Protocol features and roadmap*

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

## �📖 About

This is the **official web interface** for the AxionAX Protocol - a
next-generation Layer-1 blockchain designed for high-performance decentralized
compute markets.

### Part of AxionAX Ecosystem

This web interface connects to the core AxionAX Protocol:

- **Protocol Core**: [`../axionax-core`](../axionax-core) - Rust/Python blockchain implementation
- **SDK**: [`../axionax-sdk-ts`](../axionax-sdk-ts) - TypeScript SDK (used by this interface)
- **Documentation**: [`../axionax-docs`](../axionax-docs) - Protocol documentation
- **Deployment**: [`../axionax-deploy`](../axionax-deploy) - Infrastructure for RPC/Explorer/Faucet
- **DevTools**: [`../axionax-devtools`](../axionax-devtools) - Development & testing utilities
- **Marketplace**: [`../axionax-marketplace`](../axionax-marketplace) - Compute marketplace dApp
- **Issue Manager**: [`../issue-manager`](../issue-manager) - Multi-repo task tracking

**Main Repository**:
[axionaxprotocol/axionaxiues](https://github.com/axionaxprotocol/axionaxiues)

**Current Status**: ✅ Ready - Production build ready, awaiting testnet launch

---

## 🌟 Features

### Core Web Features

- **Landing Page** - Protocol overview and key features
- **Block Explorer** - Real-time blockchain data visualization
  - Block and transaction search
  - Account history and balances
  - Network statistics
- **Testnet Faucet** - Easy AXX token distribution for testing
- **RPC Documentation** - Interactive API documentation
- **Wallet Integration** - Connect with Web3 wallets
- **Compute Marketplace** - Browse and purchase compute resources

### AxionAX Protocol Integration

- **Protocol-Aware**: Displays PoPC consensus data
- **Real-Time Updates**: WebSocket connection to AxionAX nodes
- **Network Status**: Shows testnet/mainnet health
- **DAO Governance**: Community voting interface (coming soon)

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

### AxionAX Protocol Integration

- **SDK**: [`@axionax/sdk`](../sdk) - Official TypeScript SDK
- **RPC**: JSON-RPC 2.0 connection to AxionAX nodes
- **WebSocket**: Real-time blockchain updates
- **Web3**: Wallet connection and transaction signing

### Backend Services (via [`../deploy`](../deploy))

- **Explorer API**: Node.js + Express (blockchain data)
- **Faucet API**: Node.js + Express (testnet tokens)
- **RPC Node**: AxionAX Protocol Core
- **Database**: PostgreSQL 15
- **Cache**: Redis 7

### Infrastructure

- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages (static) + VPS (dynamic services)

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

### Option 1: Docker Deployment (Recommended)

Deploy the entire stack with Docker Compose:

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

Services will be available at:

- Web: http://localhost
- Explorer API: http://localhost:3001
- Faucet API: http://localhost:3002
- RPC: http://localhost:8545

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed VPS deployment guide (supports both Linux and Windows).

### Option 2: Static Export

Build and export as static site:

```bash
npm run build
# Output in ./out directory
```

Deploy to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting

### Option 3: VPS Deployment

Complete guide for VPS deployment available in [DEPLOYMENT.md](DEPLOYMENT.md).

**Supports Both Platforms:**
- 🐧 **Linux**: Ubuntu 20.04+, Debian 11+, CentOS 8+
- 🪟 **Windows**: Server 2019+, Windows 10/11 Pro

**Includes setup for:**
- Docker environment (Linux/Windows)
- Nginx reverse proxy
- SSL certificates (Let's Encrypt/win-acme)
- Multiple subdomains
- Database management
- Firewall configuration (UFW/Windows Firewall)
- Platform-specific monitoring tools
- Performance tuning tips

---

## 🏛️ Architecture

### System Architecture - AxionAX Protocol Stack

```
┌─────────────────────────────────────────────────────┐
│              Nginx (Port 80/443)                    │
│         Reverse Proxy & Load Balancer               │
└───────┬──────────┬──────────┬──────────┬───────────┘
        │          │          │          │
        ▼          ▼          ▼          ▼
    ┌───────┐ ┌──────────┐ ┌────────┐ ┌─────────┐
    │  Web  │ │ Explorer │ │Faucet  │ │AxionAX  │
    │(Next) │ │   API    │ │  API   │ │Protocol │
    │       │ │          │ │        │ │RPC Node │
    └───┬───┘ └────┬─────┘ └───┬────┘ └────┬────┘
        │          │            │           │
        │          └────────────┴───────────┘
        │                   │
        │              ┌────▼────┐
        │              │AxionAX  │
        │              │Protocol │
        │              │  Core   │
        │              │(Rust)   │
        │              └────┬────┘
        │                   │
        └───────────────────┘
                   │
              ┌────▼────┐  ┌───────┐
              │  Redis  │  │  DB   │
              │  Cache  │  │(Postgres)│
              └─────────┘  └───────┘
```

### Service Components - Connected to AxionAX Protocol

| Service          | Technology    | Purpose             | Protocol Integration  |
| ---------------- | ------------- | ------------------- | --------------------- |
| **Web**          | Next.js 15    | Frontend UI         | Uses AxionAX SDK      |
| **Explorer API** | Node.js       | Blockchain data API | Queries AxionAX Core  |
| **Faucet API**   | Node.js       | Token distribution  | Sends tx to AxionAX   |
| **RPC Node**     | AxionAX Core  | Protocol node       | Native implementation |
| **PostgreSQL**   | PostgreSQL 15 | Data storage        | Indexes blockchain    |
| **Redis**        | Redis 7       | Caching             | Performance layer     |
| **Nginx**        | Nginx latest  | Reverse proxy       | SSL termination       |

**All services work together to provide the complete AxionAX Protocol
experience.**

---

## 📡 API Documentation

### Explorer API

Base URL: `https://api.axionax.org`

#### Get Latest Blocks

```http
GET /api/blocks?limit=10
```

#### Get Block by Number

```http
GET /api/block/:number
```

#### Get Transaction

```http
GET /api/tx/:hash
```

#### Get Address

```http
GET /api/address/:address
```

### Faucet API

Base URL: `https://faucet-api.axionax.org`

#### Request Tokens

```http
POST /api/faucet
Content-Type: application/json

{
  "address": "0x...",
  "captcha": "token"
}
```

#### Check Faucet Status

```http
GET /api/faucet/status
```

### RPC Endpoint

Base URL: `https://rpc.axionax.org`

Standard JSON-RPC 2.0 interface compatible with Ethereum:

```javascript
// Example: Get latest block
curl -X POST https://rpc.axionax.org \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
  }'
```

Full API documentation: [docs.axionax.org/api](https://docs.axionax.org/api)

---

## 🌐 VPS Deployment Specifications

### Minimum Requirements

```
CPU:     2 vCPU cores
RAM:     4 GB
Storage: 50 GB SSD
Traffic: 2 TB/month
OS:      Ubuntu 22.04 LTS
Cost:    ~$10-20/month
```

### Recommended for Production

```
CPU:     4 vCPU cores
RAM:     8 GB
Storage: 160 GB NVMe SSD
Traffic: 4 TB/month
OS:      Ubuntu 22.04 LTS
Cost:    ~$40-60/month
```

### Recommended VPS Providers

1. **Hetzner** (Best Value) - €9-30/month
   - Excellent performance
   - Competitive pricing
   - Datacenter in Europe

2. **Linode/Akamai** (Balanced) - $36-72/month
   - Global datacenters
   - Stable performance
   - Great support

3. **Vultr** (Best for Asia) - $48-96/month
   - Bangkok datacenter available
   - High-frequency compute
   - Good for low latency in SEA

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed comparison.

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

##  Links & AxionAX Protocol Ecosystem

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

**Main Repository**: https://github.com/axionaxprotocol/axionaxiues

### Network Endpoints

- **Website**: [axionax.org](https://axionax.org)
- **Block Explorer**: [explorer.axionax.org](https://explorer.axionax.org)
- **Testnet Faucet**: [faucet.axionax.org](https://faucet.axionax.org)
- **RPC Endpoint**: [rpc.axionax.org](https://rpc.axionax.org)

### Development

- **GitHub**: [github.com/axionaxprotocol](https://github.com/axionaxprotocol)
- **Issues**: [Report bugs](https://github.com/axionaxprotocol/axionaxiues/issues)
- **Contributing**: See [CONTRIBUTING.md](../axionax-docs/CONTRIBUTING.md)
- **Issue Tracking**: Use [Issue Manager](../issue-manager) for task automation

### Community (Coming Q1 2026)

- **Twitter**: [@AxionAX](https://twitter.com/axionaxprotocol)
- **Discord**: [discord.gg/axionax](https://discord.gg/axionax)
- **Telegram**: [t.me/axionax](https://t.me/axionax)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Note**: The AxionAX Protocol Core uses AGPLv3. See [`../axionax-core/LICENSE`](../axionax-core/LICENSE).

---

## � Acknowledgments

- **AxionAX Protocol Team** - Core blockchain development
- Next.js team - Amazing React framework
- Tailwind CSS - Utility-first CSS
- The blockchain community - Inspiration and support

---

<div align="center">

**Part of the AxionAX Protocol Ecosystem**

Built with ❤️ by the AxionAX Team

**Last Updated**: November 7, 2025

</div>
