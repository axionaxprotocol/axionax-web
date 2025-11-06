/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Optional: Add a basePath if you are deploying to a subdirectory
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
