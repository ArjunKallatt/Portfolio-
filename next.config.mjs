/** @type {import('next').NextConfig} */
const repoName = "Portfolio-";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
