/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: 'http://localhost:3000/',
      },
    ];
  },
};

module.exports = nextConfig;
