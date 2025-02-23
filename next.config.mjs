import withBundleAnalyzer from '@next/bundle-analyzer';
import { withAxiom } from 'next-axiom';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  experimental: {
    // Advanced features
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizeCss: true,
    scrollRestoration: true,
    typedRoutes: true,
    mdxRs: true,
    
    // Turbo features
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
        '.png': ['url-loader'],
        '.jpg': ['url-loader'],
      },
      resolveAlias: {
        '@': './src',
        '@ui': './src/components/ui',
        '@lib': './src/lib',
      },
    },
  },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.mistral.ai',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Add SVGR support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optimize packages
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
        },
      };
    }

    return config;
  },
};

// Compose with plugins
export default withAxiom(
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(nextConfig)
);