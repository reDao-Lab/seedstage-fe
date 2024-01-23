/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api.b.army'
      }
    ]
  },
};

export default nextConfig;
