const path = require('path');

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],
    webpackFinal: async (config, {configType}) => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...(config.module.rules || []),
                    {
                        test: /\.less$/,
                        use: [
                            {
                                loader: 'style-loader',
                            },
                            {
                                loader: 'css-loader',
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    modules: true,
                                    modifyVars: {'@primary-color': '#ad46d8'},
                                    javascriptEnabled: true,
                                },
                            },
                        ],
                    },
                ],
            },
        }
    }
}