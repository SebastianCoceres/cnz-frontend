/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["http://admin.clubnauticozaragoza.com:1337"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
