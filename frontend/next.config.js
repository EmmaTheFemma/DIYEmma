/** @type {import('next').NextConfig} */

const nextConfig = {
    /* output: 'export', */
    reactStrictMode: true,
      experimental: {
        appDir: true,
      },
      images: {
        domains: ['imgurl.com'], // Whitelisted domains.
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
