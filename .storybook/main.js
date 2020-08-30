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

        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', {
            loader: 'css-loader',
            options: {
                modules: true,
                    localIdentName: "[local]___[hash:base64:5]"
            }},
    'less-loader'
    ],
        include: path.resolve(__dirname, '../src'),
    });
        return config;

        // return {
        //     ...config,
        //     module: {
        //         ...config.module,
        //         rules: [
        //             ...(config.module.rules || []),
        //             {
        //                 test: /\.less$/,
        //                 use: [
        //                     {
        //                         loader: 'style-loader',
        //                     },
        //                     {
        //                         loader: 'css-loader',
        //                     },
        //                     {
        //                         loader: 'less-loader',
        //                         options: {
        //                             modules: true,
        //                             modifyVars: {'@primary-color': '#ad46d8'},
        //                             javascriptEnabled: true,
        //                         },
        //                     },
        //                 ],
        //             },
        //         ],
        //     },
        // }
    }
}