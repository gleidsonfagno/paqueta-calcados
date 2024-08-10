/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.brchallenges.com"],
  },
  reactStrictMode: true, // Ativa o modo estrito do React para detectar problemas
  swcMinify: true, // Habilita a minificação usando o SWC
};

export default nextConfig;
