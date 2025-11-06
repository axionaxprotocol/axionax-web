# AxionAX VPS Deployment Guide

## 🚀 Complete Setup for VPS Deployment

This guide will help you deploy the entire AxionAX infrastructure on a VPS, including:
- Web Frontend
- Block Explorer API
- Faucet API
- RPC Node
- PostgreSQL Database
- Redis Cache

---

## 📋 Prerequisites

### On Your VPS:
- Ubuntu 20.04+ or similar Linux distribution
- At least 4GB RAM
- Docker and Docker Compose installed
- Domain name pointing to your VPS IP

### Install Docker on VPS:
```bash
# Update packages
sudo apt update
sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add your user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

---

## 🛠️ Deployment Steps

### 1. Clone Repository on VPS
```bash
cd /opt
sudo git clone https://github.com/axionaxprotocol/axionax-web.git
cd axionax-web
sudo chown -R $USER:$USER .
```

### 2. Configure Environment Variables
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env
```

### 3. Update DNS Records
Point these subdomains to your VPS IP:
- `axionax.org` → Your VPS IP
- `api.axionax.org` → Your VPS IP
- `faucet-api.axionax.org` → Your VPS IP
- `rpc.axionax.org` → Your VPS IP

### 4. Deploy Services
```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

---

## 🔒 Setup SSL Certificates (Recommended)

### Using Let's Encrypt (Free):
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get certificates for all domains
sudo certbot certonly --standalone -d axionax.org -d www.axionax.org
sudo certbot certonly --standalone -d api.axionax.org
sudo certbot certonly --standalone -d faucet-api.axionax.org
sudo certbot certonly --standalone -d rpc.axionax.org

# Copy certificates to nginx directory
sudo cp /etc/letsencrypt/live/axionax.org/fullchain.pem ./nginx/ssl/
sudo cp /etc/letsencrypt/live/axionax.org/privkey.pem ./nginx/ssl/

# Update nginx config to use HTTPS (uncomment SSL sections in axionax.conf)

# Restart nginx
docker-compose restart nginx
```

---

## 📊 Service URLs

After deployment, services will be available at:

| Service | URL | Port |
|---------|-----|------|
| Website | http://axionax.org | 80/443 |
| Explorer API | http://api.axionax.org | - |
| Faucet API | http://faucet-api.axionax.org | - |
| RPC Node | http://rpc.axionax.org | - |
| PostgreSQL | Internal | 5432 |
| Redis | Internal | 6379 |

---

## 🐳 Docker Commands

### View all services:
```bash
docker-compose ps
```

### View logs:
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f web
docker-compose logs -f nginx
```

### Restart services:
```bash
# All services
docker-compose restart

# Specific service
docker-compose restart web
```

### Stop all services:
```bash
docker-compose down
```

### Rebuild and restart:
```bash
docker-compose up -d --build
```

---

## 🔄 Update Deployment

To update to latest code:
```bash
git pull origin main
docker-compose up -d --build
```

Or use the deployment script:
```bash
./deploy.sh
```

---

## 🗃️ Database Management

### Access PostgreSQL:
```bash
docker-compose exec postgres psql -U axionax -d axionax
```

### Backup Database:
```bash
docker-compose exec postgres pg_dump -U axionax axionax > backup.sql
```

### Restore Database:
```bash
cat backup.sql | docker-compose exec -T postgres psql -U axionax axionax
```

---

## 📝 Environment Variables

Create a `.env` file with these variables:

```env
# Database
POSTGRES_DB=axionax
POSTGRES_USER=axionax
POSTGRES_PASSWORD=your_secure_password_here

# API Keys
EXPLORER_API_KEY=your_explorer_api_key
FAUCET_API_KEY=your_faucet_api_key

# RPC Configuration
RPC_NETWORK=testnet
RPC_CHAIN_ID=1337

# Frontend
NEXT_PUBLIC_API_URL=https://api.axionax.org
NEXT_PUBLIC_RPC_URL=https://rpc.axionax.org
NEXT_PUBLIC_FAUCET_URL=https://faucet-api.axionax.org
```

---

## 🔥 Firewall Configuration

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow SSH (if not already allowed)
sudo ufw allow 22/tcp

# Enable firewall
sudo ufw enable
```

---

## 🚨 Troubleshooting

### Service won't start:
```bash
# Check logs
docker-compose logs service-name

# Check if port is already in use
sudo netstat -tulpn | grep :80
```

### Out of disk space:
```bash
# Clean up Docker
docker system prune -a

# Remove old images
docker image prune -a
```

### Permission issues:
```bash
# Fix ownership
sudo chown -R $USER:$USER .

# Restart Docker
sudo systemctl restart docker
```

---

## 📈 Monitoring

### Install monitoring tools:
```bash
# Add monitoring service to docker-compose.yml
# Options: Grafana, Prometheus, Portainer
```

### Check resource usage:
```bash
docker stats
```

---

## 🎯 Next Steps

1. **Implement Backend APIs**
   - Create Explorer backend in `explorer-backend/`
   - Create Faucet backend in `faucet-backend/`
   - Implement RPC node

2. **Setup Monitoring**
   - Add Grafana for metrics
   - Configure alerts

3. **Setup Backups**
   - Database backups
   - Config backups

4. **Security Hardening**
   - Setup firewall rules
   - Configure fail2ban
   - Enable rate limiting

---

## 📞 Support

For issues or questions:
- GitHub: https://github.com/axionaxprotocol
- Discord: https://discord.gg/axionax
- Docs: https://axionax.org/docs

---

**Happy Deploying! 🚀**
