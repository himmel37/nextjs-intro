/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/movies",
  //         destination: ``,
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
