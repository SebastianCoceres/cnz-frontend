/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["http://admin.clubnauticozaragoza.com:1337"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://admin.clubnauticozaragoza.com",
        port: "1337",
      },
    ],
  },
};

module.exports = nextConfig;
