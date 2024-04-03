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
};

export default nextConfig;
