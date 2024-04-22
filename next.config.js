/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images : {
        domains: ["firebasestorage.googleapis.com", "m.media-amazon.com", "lh3.googleusercontent.com"], 
    },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: '**',
    //       },
    //     ],
    //   },
}

module.exports = nextConfig
