module.exports = {
    reactStrictMode: true,
    env: {
        dir: '/',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vercel.app',
                pathname: '/api/**'
            },
            {
                protocol: 'https',
                hostname: '**.shields.io',
                pathname: '/badges/**'
            },
            {
                protocol: 'https',
                hostname: '**.shields.io',
                pathname: '/github/**'
            },
            {
                protocol: 'https',
                hostname:'**.githubusercontent.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: '**.medium.com',
                pathname: '/**'
            }
        ]
            }
}