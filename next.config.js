// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['upload.wikimedia.org'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/wikipedia/commons/6/66/Bundlbook.jpg', // Adjust the path as needed
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  