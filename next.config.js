/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          /** Rewrite for Elo voting */
          source: '/vote/voting',
          destination: '/vote/elo',
        },
        {
          /** Rewrite for Elo voting */
          source: '/vote',
          destination: '/vote/landing',
        },
        {
          source: "/2025/:path*", // The new public route
          destination: "/shh-dont-look-here/:path*", // The actual path in the file system
        },
    ]}
  },
  compiler: {
    emotion: true,
  },
  async redirects() {
      return [
          {
              source: '/conference-feedback',
              destination: 'https://forms.office.com/Pages/ResponsePage.aspx?id=1Fl-EtxArEOMrZBBUn5pErlWr-nATeFBhEyYDe7_oeFUMzI4OTIyMFU0UVZaOExGOThYME9KNldGMy4u',
              permanent: false,
          },
          {
              source: '/feedback/:session',
              destination: 'https://forms.office.com/Pages/ResponsePage.aspx?id=1Fl-EtxArEOMrZBBUn5pErlWr-nATeFBhEyYDe7_oeFUMzFTWDY4T1pFOVdYWlE2NU9MMjdSVlpWTy4u&rade9feed4a6746d4bcc8ac412a5a5246=:session',
              permanent: false,
          },
      ]
  }
}

if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(config)
} else {
  module.exports = config
}
