/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/StyleAI',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
