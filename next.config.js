/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable all caching on Vercel
  onDemandEntries: {
    maxInactiveAge: 1000, // 1 second
    pagesBufferLength: 1,
  },
  // Force fresh deployment
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
