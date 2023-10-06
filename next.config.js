const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

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
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    // Existing font loader
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts/',
          publicPath: '/static/fonts/',
        },
      },
    });
    
    // Add loader for .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // Stub fs module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        canvas: false
      };
    }

    // Your added configuration
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = withMDX(nextConfig);
