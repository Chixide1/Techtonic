import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.ckdoestech.com',
            port: '',
            pathname: '/**',
          },
        ]
      },
}

export default withPayload(nextConfig)
