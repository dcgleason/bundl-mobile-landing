module.exports = {
    siteUrl: 'https://www.givebundl.com',
    generateRobotsTxt: true, // (optional)
    exclude: [
      '/idea-generator', // Replace 'path1' with the actual path you want to exclude
      '/playlist-generator', // Replace 'path2' with the actual path you want to exclude
    ],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.givebundl.com/sitemap.xml', // Replace with your actual sitemap URL
      ],
    },
  };