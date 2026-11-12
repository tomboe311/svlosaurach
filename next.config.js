/** @type {import('next').NextConfig} */
// Static export is only enabled for the GitHub Pages build (served from the
// root of sv-losaurach.de, so no basePath is needed). `next dev` stays dynamic.
const isGhPagesBuild = process.env.GH_PAGES === "1";

const nextConfig = {
  ...(isGhPagesBuild
      ? {
          output: "export",
          trailingSlash: true,
        }
      : {}),
  images: {
    ...(isGhPagesBuild ? {unoptimized: true} : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
