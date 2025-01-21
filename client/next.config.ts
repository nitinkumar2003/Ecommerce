import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    customKey: 'my-value',
    API_BASE_URL:"http://localhost:8000/"
  },
};

export default nextConfig;
