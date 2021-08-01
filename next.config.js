const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

// only if the content is served through a subdirectory (ex: https://www.page.com/content)
const baseUrl = '';

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
        baseUrl: baseUrl,
    },
    webpack5: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['preact', 'env'],
                    },
                },
                { loader: '@svgr/webpack' },
            ],
        });
        return config;
    },
    future: {
        webpack5: true,
    },
});
