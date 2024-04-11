/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images : {
        domains: ["firebasestorage.googleapis.com", "m.media-amazon.com", "lh3.googleusercontent.com"], 
    }
}

module.exports = nextConfig
