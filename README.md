# 🚀 AxionAX - Next Generation Blockchain Platform

<div align="center">

![AxionAX Logo](public/logo.svg)

**Scalable • Secure • Sustainable**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

[Website](https://axionax.org) • [Documentation](https://docs.axionax.org) • [Explorer](https://explorer.axionax.org) • [Faucet](https://faucet.axionax.org)

</div>

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 About

AxionAX is a next-generation blockchain platform designed for scalability, security, and sustainability. Built with cutting-edge technology, AxionAX provides:

- ⚡ **High Performance**: 10,000+ TPS with sub-second finality
- 🔒 **Enterprise Security**: Advanced cryptography and formal verification
- 🌱 **Eco-Friendly**: Energy-efficient Proof of Stake consensus
- 🛠️ **Developer Tools**: Comprehensive SDK and APIs
- 🌐 **Interoperability**: Cross-chain bridges and standards

---

## ✨ Features

### 🎯 Core Features

- **Block Explorer** - Real-time blockchain data visualization
- **Testnet Faucet** - Easy token distribution for testing
- **RPC Endpoint** - Full node access for developers
- **Wallet Integration** - Connect with popular Web3 wallets
- **Smart Contracts** - EVM-compatible execution environment
- **Staking Dashboard** - Participate in network consensus

### 🛠️ Developer Tools

- **REST API** - RESTful APIs for blockchain data
- **WebSocket API** - Real-time event subscriptions
- **SDK & Libraries** - Official SDKs for multiple languages
- **Documentation** - Comprehensive guides and tutorials
- **Code Examples** - Ready-to-use code snippets

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components**: Custom React components
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Backend Services
- **Explorer API**: Node.js + Express
- **Faucet API**: Node.js + Express
- **RPC Node**: Go Ethereum (Geth)
- **Database**: PostgreSQL 15
- **Cache**: Redis 7

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana

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

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed VPS deployment guide.

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

Includes setup for:
- Ubuntu/Debian VPS
- Docker environment
- Nginx reverse proxy
- SSL certificates (Let's Encrypt)
- Multiple subdomains
- Database management
- Monitoring tools

---

## 🏛️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Nginx (Port 80/443)              │
│              Reverse Proxy & Load Balancer          │
└───────┬──────────┬──────────┬──────────┬───────────┘
        │          │          │          │
        ▼          ▼          ▼          ▼
    ┌───────┐ ┌──────────┐ ┌────────┐ ┌─────┐
    │  Web  │ │ Explorer │ │Faucet  │ │ RPC │
    │(Next) │ │   API    │ │  API   │ │Node │
    └───┬───┘ └────┬─────┘ └───┬────┘ └──┬──┘
        │          │            │          │
        └──────────┴────────────┴──────────┘
                   │            │
              ┌────▼────┐  ┌───▼───┐
              │  Redis  │  │  DB   │
              │  Cache  │  │(Postgres)│
              └─────────┘  └───────┘
```

### Service Components

| Service | Technology | Purpose |
|---------|-----------|---------|
| **Web** | Next.js 15 | Frontend UI & Static Pages |
| **Explorer API** | Node.js + Express | Blockchain data API |
| **Faucet API** | Node.js + Express | Testnet token distribution |
| **RPC Node** | Geth | Blockchain node & RPC endpoint |
| **PostgreSQL** | PostgreSQL 15 | Persistent data storage |
| **Redis** | Redis 7 | Caching & session management |
| **Nginx** | Nginx latest | Reverse proxy & SSL termination |

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

If you discover a security vulnerability, please email:
**security@axionax.org**

Do not open public issues for security vulnerabilities.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Website**: [axionax.org](https://axionax.org)
- **Documentation**: [docs.axionax.org](https://docs.axionax.org)
- **Block Explorer**: [explorer.axionax.org](https://explorer.axionax.org)
- **Testnet Faucet**: [faucet.axionax.org](https://faucet.axionax.org)
- **GitHub**: [github.com/axionaxprotocol](https://github.com/axionaxprotocol)
- **Twitter**: [@AxionAX](https://twitter.com/AxionAX)
- **Discord**: [discord.gg/axionax](https://discord.gg/axionax)
- **Telegram**: [t.me/axionax](https://t.me/axionax)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- The Ethereum community for inspiration
- All contributors and supporters

---

## 📊 Project Status

![GitHub stars](https://img.shields.io/github/stars/axionaxprotocol/axionax-web?style=social)
![GitHub forks](https://img.shields.io/github/forks/axionaxprotocol/axionax-web?style=social)
![GitHub issues](https://img.shields.io/github/issues/axionaxprotocol/axionax-web)
![GitHub pull requests](https://img.shields.io/github/issues-pr/axionaxprotocol/axionax-web)
![GitHub last commit](https://img.shields.io/github/last-commit/axionaxprotocol/axionax-web)

---

<div align="center">

**Built with ❤️ by the AxionAX Team**

</div>