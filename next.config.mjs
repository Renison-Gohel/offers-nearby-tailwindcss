/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
      experimental: {
        serverActions: {
          // edit: updated to new key. Was previously `allowedForwardedHosts`
          allowedOrigins: ['k47pfhpw-3000.inc1.devtunnels.ms','localhost:3000'],
        },
      },
};

export default nextConfig;
