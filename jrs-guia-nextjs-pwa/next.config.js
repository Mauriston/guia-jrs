/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // Basic runtime caching defaults; sufficient for this static-ish guide.
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
