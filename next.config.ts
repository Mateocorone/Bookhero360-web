import type { NextConfig } from 'next';

// `EXPORT=1 npm run build` genera el sitio estático en /out (HTML listo para subir a cualquier hosting).
const isExport = process.env.EXPORT === '1';

const nextConfig: NextConfig = {
  ...(isExport ? { output: 'export' as const, trailingSlash: true } : {}),
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
    ...(isExport ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
