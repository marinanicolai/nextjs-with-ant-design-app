/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  ...(isProd && { assetPrefix: "/nextjs-with-ant-design-app" }),
};

module.exports = nextConfig;
