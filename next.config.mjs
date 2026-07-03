/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
  async redirects() {
    // Keep previously shared resume links working; everything points at the
    // stable /resume URL so the link never changes when the PDF is updated.
    return [
      {
        source: "/Harish's Resume.pdf",
        destination: "/resume",
        permanent: true,
      },
      {
        source: "/Harish_Chaurasia_Resume.pdf",
        destination: "/resume",
        permanent: true,
      },
      {
        source: "/Resume2025.pdf",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
