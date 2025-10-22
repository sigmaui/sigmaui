/**
 * Next.js configuration for the monorepo.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['ts', 'tsx'],

  experimental: {
    externalDir: true,
  },

  // Transpile packages từ monorepo
  transpilePackages: ['@sigma-ui-kit/components', '@sigma-ui-kit/theme', '@sigma-ui-kit/icons'],
};

export default nextConfig;
