/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ["github.com"]
  },
  expermiental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
