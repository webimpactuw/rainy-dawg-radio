/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**.mzstatic.com'
      }
    ],
    domains: ['cdn.sanity.io', 'spinitron.com'],
  },
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://rainydawg.sanity.studio',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/audio",
        destination: "http://166.62.119.4:8000/stream",
      },
    ];
  },
};

export default nextConfig;
