/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
            },
            {
                protocol: "https",
                hostname: "static.jakmall.id"
            }
        ]
    }, 
};

export default nextConfig;
