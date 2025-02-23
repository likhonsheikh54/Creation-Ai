/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponents: true,
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'huggingface.co',
      'cdn.creation.v4os.org'
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_HF_TOKEN: process.env.NEXT_PUBLIC_HF_TOKEN,
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
}

module.exports = nextConfig