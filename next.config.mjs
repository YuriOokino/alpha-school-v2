/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverActions: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
