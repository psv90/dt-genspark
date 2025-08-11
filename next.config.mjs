import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@components': path.resolve(process.cwd(), 'components'),
      '@lib': path.resolve(process.cwd(), 'lib'),
      '@store': path.resolve(process.cwd(), 'store'),
      '@types': path.resolve(process.cwd(), 'types'),
      '@utils': path.resolve(process.cwd(), 'utils'),
    };
    return config;
  },
};

export default nextConfig;
