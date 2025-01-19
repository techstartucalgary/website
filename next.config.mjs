/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        pathname: "",
        port: "",
        protocol: "https",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
