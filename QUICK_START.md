# 🚀 Quick Start Guide - axionax-web

## Overview

**axionax-web** เป็น official website และ dashboard สำหรับ axionax protocol โดยใช้ Next.js, React และ TypeScript

**Repository:** https://github.com/axionaxprotocol/axionax-web

---

## 📋 Prerequisites

```bash
# Required
- Node.js 18+
- npm/yarn/pnpm
- Git

# Recommended
- VS Code with React/Next.js extensions
- Chrome/Firefox with React DevTools
```

---

## 🔧 Installation

### 1. Clone Repository

```bash
git clone https://github.com/axionaxprotocol/axionax-web.git
cd axionax-web
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Setup Environment Variables

```bash
# Copy example env file
cp .env.example .env.local

# Edit .env.local with your values
# NEXT_PUBLIC_RPC_URL=http://localhost:8545
# NEXT_PUBLIC_CHAIN_ID=1337
# NEXT_PUBLIC_EXPLORER_URL=http://localhost:3000
```

---

## 🏃 Running Development Server

```bash
# Start development server
npm run dev

# Server will start at http://localhost:3000

# Open in browser
# - Website: http://localhost:3000
# - Dashboard: http://localhost:3000/dashboard
# - Explorer: http://localhost:3000/explorer
```

### Other Run Modes

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Fix lint issues
npm run lint:fix

# Format code
npm run format
```

---

## ✅ Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage

# Run E2E tests (requires Playwright)
npm run test:e2e

# Run E2E tests in UI mode
npm run test:e2e:ui
```

---

## 🏗️ Project Structure

```
axionax-web/
├── app/                        # Next.js 14 app directory
│   ├── page.tsx                # Home page
│   ├── layout.tsx              # Root layout
│   ├── dashboard/              # Dashboard pages
│   ├── explorer/               # Block explorer
│   ├── docs/                   # Documentation pages
│   └── api/                    # API routes
│
├── components/                 # React components
│   ├── ui/                     # UI components
│   ├── layout/                 # Layout components
│   ├── dashboard/              # Dashboard components
│   └── explorer/               # Explorer components
│
├── lib/                        # Utility functions
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Helper functions
│   └── api/                    # API clients
│
├── public/                     # Static files
│   ├── images/                 # Images
│   ├── fonts/                  # Fonts
│   └── favicon.ico             # Favicon
│
├── styles/                     # Global styles
│   └── globals.css             # Global CSS
│
├── types/                      # TypeScript types
├── tests/                      # Test files
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind CSS config
└── package.json                # Dependencies
```

---

## 🎨 Key Features

### 1. Home Page (`app/page.tsx`)

- Protocol overview
- Key features showcase
- Testnet launch information
- Community links

### 2. Dashboard (`app/dashboard/`)

- Wallet connection
- Account balance
- Transaction history
- Network statistics

### 3. Block Explorer (`app/explorer/`)

- Block list and details
- Transaction list and details
- Address lookup
- Search functionality

### 4. Documentation (`app/docs/`)

- Protocol documentation
- API references
- Tutorials and guides

---

## 🔨 Common Development Tasks

### Add New Page

```bash
# 1. Create new page file
mkdir -p app/staking
touch app/staking/page.tsx

# 2. Add page content
# app/staking/page.tsx
export default function StakingPage() {
  return <div>Staking Page</div>
}

# 3. Add navigation link in layout
# app/layout.tsx

# 4. Test the page
npm run dev
# Visit http://localhost:3000/staking
```

### Add New Component

```bash
# 1. Create component file
mkdir -p components/staking
touch components/staking/StakingCard.tsx

# 2. Write component
export function StakingCard({ amount, reward }: Props) {
  return (
    <div className="card">
      <h3>Staked: {amount}</h3>
      <p>Rewards: {reward}</p>
    </div>
  )
}

# 3. Export from index
touch components/staking/index.ts
export { StakingCard } from './StakingCard'

# 4. Use in page
import { StakingCard } from '@/components/staking'
```

### Add New API Route

```bash
# 1. Create API route
mkdir -p app/api/stats
touch app/api/stats/route.ts

# 2. Implement handler
import { NextResponse } from 'next/server'

export async function GET() {
  const stats = await fetchStats()
  return NextResponse.json(stats)
}

# 3. Test endpoint
# http://localhost:3000/api/stats
```

### Connect to axionax-core

```typescript
// lib/api/client.ts
import { AxionaxClient } from '@axionax/sdk'

export const client = new AxionaxClient(
  process.env.NEXT_PUBLIC_RPC_URL || 'http://localhost:8545'
)

// Use in components
import { client } from '@/lib/api/client'

export default function Dashboard() {
  const [balance, setBalance] = useState('0')
  
  useEffect(() => {
    client.getBalance(address).then(setBalance)
  }, [address])
  
  return <div>Balance: {balance}</div>
}
```

---

## 🔌 Integration with Other Repos

### With axionax-sdk-ts

```json
// package.json
{
  "dependencies": {
    "@axionax/sdk": "file:../axionax-sdk-ts"
  }
}
```

```typescript
// Use SDK in components
import { AxionaxClient, Wallet } from '@axionax/sdk'

const client = new AxionaxClient(process.env.NEXT_PUBLIC_RPC_URL)
```

### With axionax-core

```typescript
// Make sure axionax-core is running on localhost:8545
const client = new AxionaxClient('http://localhost:8545')

// Fetch data from core node
const blockNumber = await client.getBlockNumber()
const block = await client.getBlock(blockNumber)
```

### With axionax-docs

```typescript
// Link to documentation
import Link from 'next/link'

<Link href="https://axionaxprotocol.github.io/axionax-docs/">
  View Documentation
</Link>
```

---

## 🎨 Styling

### Tailwind CSS

```typescript
// Use Tailwind utility classes
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold">Welcome</h1>
</div>
```

### Custom Styles

```css
/* styles/globals.css */
.custom-button {
  @apply bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded;
}
```

### Dark Mode

```typescript
// Use next-themes for dark mode
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

---

## 📱 Responsive Design

```typescript
// Use Tailwind responsive prefixes
<div className="
  w-full           /* Mobile: full width */
  md:w-1/2         /* Tablet: half width */
  lg:w-1/3         /* Desktop: one-third width */
  p-4 md:p-6 lg:p-8  /* Responsive padding */
">
  Content
</div>
```

---

## 🚀 Deployment

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Test production build locally
npm run start

# Check bundle size
npm run analyze
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Other Platforms

```bash
# Docker deployment
docker build -t axionax-web .
docker run -p 3000:3000 axionax-web

# Static export (if applicable)
npm run export
```

---

## 🐛 Debugging

### Enable Debug Mode

```bash
# Set debug environment variable
NODE_OPTIONS='--inspect' npm run dev

# Open Chrome DevTools
# chrome://inspect
```

### React DevTools

```bash
# Install React DevTools browser extension
# Available for Chrome, Firefox, Edge

# Use in development mode
npm run dev
# Open DevTools > React tab
```

### Next.js Debug

```json
// next.config.js
module.exports = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

---

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Hydration Errors

```typescript
// Use dynamic imports for client-only components
import dynamic from 'next/dynamic'

const ClientComponent = dynamic(() => import('./ClientComponent'), {
  ssr: false
})
```

### Environment Variables Not Working

```bash
# Restart development server after changing .env.local
# Next.js only loads env vars on startup

# Make sure to prefix with NEXT_PUBLIC_ for client-side access
NEXT_PUBLIC_RPC_URL=http://localhost:8545  # ✅ Accessible in browser
RPC_URL=http://localhost:8545              # ❌ Only on server
```

---

## 📝 Configuration

### Next.js Config: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['axionax.org'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
```

### Tailwind Config: `tailwind.config.js`

```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#7928ca',
      },
    },
  },
  plugins: [],
}
```

---

## 📚 Additional Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **axionax Documentation:** https://axionaxprotocol.github.io/axionax-docs/

---

## 🤝 Getting Help

- **Issues:** Report bugs on [GitHub Issues](https://github.com/axionaxprotocol/axionax-web/issues)
- **Documentation:** Check [axionax-docs](https://github.com/axionaxprotocol/axionax-docs)
- **SDK:** See [axionax-sdk-ts](https://github.com/axionaxprotocol/axionax-sdk-ts)

---

## 📄 License

MIT - See [LICENSE](LICENSE) file for details

---

<p align="center">
  <sub>Built with ❤️ by the axionax protocol Team</sub>
</p>
