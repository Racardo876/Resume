import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "yaadhelp.com", pathname: "/**" },
      { protocol: "https", hostname: "www.yaadhelp.com", pathname: "/**" },
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
