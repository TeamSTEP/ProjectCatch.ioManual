const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

// only if the content is served through a subdirectory (ex: https://www.page.com/content)
const baseUrl = '';

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    reactStrictMode: true,
    images: {
      domains: ['witchone.io', 'www.witchone.io']
    },

    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: true,
              svgoConfig: {
                plugins:[{ removeViewBox: false }]
              },
              titleProp: true
            }
        });

        return config;
    },
});
