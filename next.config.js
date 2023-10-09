/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: ["plus.unsplash.com", "images.unsplash.com"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com'
        }
      ],
    },
  }
