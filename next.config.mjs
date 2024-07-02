/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          bodySizeLimit: '2mb',
        },
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.discordapp.com",
          },
          {
            protocol: "https",
            hostname: "www.pixar.com",
          },
        ]
}};

export default nextConfig;
