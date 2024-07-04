/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
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

export default withPlaiceholder(nextConfig);
