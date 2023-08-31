/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
    env:{
        LIVEKIT_API_KEY:"APIxxxxx",
        LIVEKIT_API_SECRET:"IssJxx",
        LIVEKIT_WS_URL:"https://chat.whstu.link/",
        UMAMI_URL:"https://xxx/script.js",
        UMAMI_ID:"xxx-xx-xx-xx-25d559c0b33d"
    }
};

module.exports = nextConfig;
