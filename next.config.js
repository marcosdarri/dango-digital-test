/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: ["via.placeholder.com"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        }
      ],
    },
  }
