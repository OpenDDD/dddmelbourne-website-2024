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
