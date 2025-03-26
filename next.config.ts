import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/w7-design-flooring",
        destination: "/",
        permanent: true,
      },
      {
        source: "/w7design-flooring",
        destination: "/",
        permanent: true,
      },
      {
        source: "/w7designflooring",
        destination: "/",
        permanent: true,
      },
      {
        source: "/w7-design",
        destination: "/",
        permanent: true,
      },
      {
        source: "/w7design",
        destination: "/",
        permanent: true,
      },
      {
        source: "/design-flooring",
        destination: "/",
        permanent: true,
      },
      {
        source: "/designflooring",
        destination: "/",
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },
};

export default nextConfig;
