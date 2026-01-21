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
              destination: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=1Fl-EtxArEOMrZBBUn5pErlWr-nATeFBhEyYDe7_oeFUMUs3TzFQU0lOUzVSS0U2UzVLNUs1TUpNSy4u',
              permanent: false,
          },
          {
              source: '/feedback/:session',
              destination: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=1Fl-EtxArEOMrZBBUn5pErlWr-nATeFBhEyYDe7_oeFUNUE4OVNPWkVPRU45OVVQRDRWSTM2U0w3Ti4u&r668ebe4ef1754bc0abeaf4a9bd318451=:session',
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
