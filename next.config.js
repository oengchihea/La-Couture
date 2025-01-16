/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Only apply Preact optimization for client-side production builds
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    // Add support for importing .node files
    config.resolve.extensions.push('.node');

    return config;
  },
  // Ensure proper transpilation of dependencies
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-separator',
    '@radix-ui/react-slot',
    'lucide-react'
  ]
}

module.exports = nextConfig