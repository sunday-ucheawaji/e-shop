/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
    images : {
        domains: ["firebasestorage.googleapis.com", "m.media-amazon.com", "lh3.googleusercontent.com"], 
    }
}

module.exports = nextConfig
