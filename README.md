# Axionax Website

Official landing page for Axionax Protocol, deployed on GitHub Pages.

##  Live Site

**https://axionax.org**

## Architecture

- **Hosting**: GitHub Pages (static site)
- **Source**: public/ directory on main branch
- **Custom Domain**: axionax.org (configured via CNAME)

## Project Structure

\\\
public/
  index.html       # Main landing page
  CNAME            # Custom domain config (axionax.org)
  .nojekyll        # Disable Jekyll processing
  *.ico, *.png     # Favicons and assets
\\\

## Local Development

To preview the site locally:

\\\ash
# Simple HTTP server
cd public
python -m http.server 8000

# Or using Node.js
npx serve public
\\\

Open [http://localhost:8000](http://localhost:8000)

## Deployment

The site deploys automatically when changes are pushed to main branch:

1. Edit files in public/
2. Commit and push to GitHub
3. GitHub Pages rebuilds automatically
4. Live in 2-5 minutes at https://axionax.org

## GitHub Pages Setup

Configured at: https://github.com/axionaxprotocol/axionax-web/settings/pages

- **Source**: Deploy from a branch
- **Branch**: main
- **Folder**: /public

## DNS Configuration

For custom domain (axionax.org):

\\\
# A records for GitHub Pages
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# CNAME for www
www  axionaxprotocol.github.io
\\\

## Future Development

The Next.js app in src/ is prepared for future migration to a full-featured site:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- SDK integration

To develop with Next.js:

\\\ash
npm install
npm run dev
\\\

## Related Services

- **RPC Node**: https://rpc.axionax.org (VPS hosted)
- **Explorer**: https://explorer.axionax.org (VPS hosted)
- **Faucet**: https://faucet.axionax.org (VPS hosted)

## License

MIT License
