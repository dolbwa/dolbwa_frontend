/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
