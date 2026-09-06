module.exports = {
  async redirects() {
    return [
      {
        destination: `/sprouts-and-spill`,
        permanent: true,
        source: `/sproutsandspill`,
      },
    ];
  },
  images: {
    domains: [`images.ctfassets.net`],
  },
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
};
