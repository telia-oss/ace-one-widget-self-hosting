const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    if (env.production && env.build) {
        console.info('💾 Building production bundle 💾');
    } else if (env.development && env.build) {
        console.info('🔨 Building development bundle 🔨');
    }

    const entry = [__dirname + '/index.js'];

    const output = {
        filename: 'ace-knowledge-embed.js',
        chunkFilename: 'ace-knowledge-[name].js',
        path: __dirname + '/dist',
    };

    const plugins = [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ];

    if (env.production && env.build) {
        output.filename = 'ace-knowledge-embed.min.js';
        output.chunkFilename = 'ace-knowledge-[name].min.js';
    }

    if (!env.build) {
        plugins.push(new HtmlWebpackPlugin({ template: __dirname + '/public/index.html' }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    const module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { modules: false }]],
                    },
                },
            },
        ],
    };

    const devServer = {
        open: true,
    };
    const resolve = {
        alias: {
            react: path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
            '@telia-ace/knowledge-widget-adapters': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-adapters'
            ),
            '@telia-ace/knowledge-widget-bot-provider': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-bot-provider'
            ),
            '@telia-ace/knowledge-widget-callback': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-callback'
            ),
            '@telia-ace/knowledge-widget-core': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-core'
            ),
            '@telia-ace/knowledge-widget-plugins': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-plugins'
            ),
            '@telia-ace/knowledge-widget-types-grid': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-types-grid'
            ),
            '@telia-ace/knowledge-widget-ui': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-ui'
            ),
            '@telia-ace/knowledge-widget-components-breadcrumbs': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-breadcrumbs'
            ),
            '@telia-ace/knowledge-widget-components-contact-link': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-contact-link'
            ),
            '@telia-ace/knowledge-widget-components-contact-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-contact-list'
            ),
            '@telia-ace/knowledge-widget-components-contact-method': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-contact-method'
            ),
            '@telia-ace/knowledge-widget-components-guide-category-browser': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-guide-category-browser'
            ),
            '@telia-ace/knowledge-widget-components-guide-category-dropdown': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-guide-category-dropdown'
            ),
            '@telia-ace/knowledge-widget-components-guide-category-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-guide-category-list'
            ),
            '@telia-ace/knowledge-widget-components-guide-category-tree': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-guide-category-tree'
            ),
            '@telia-ace/knowledge-widget-components-guide-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-guide-list'
            ),
            '@telia-ace/knowledge-widget-components-guide': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-guide'
            ),
            '@telia-ace/knowledge-widget-components-notification-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-notification-list'
            ),
            '@telia-ace/knowledge-widget-components-notification-row': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-notification-row'
            ),
            '@telia-ace/knowledge-widget-components-related-guide-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-related-guide-list'
            ),
            '@telia-ace/knowledge-widget-components-related-tag-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-related-tag-list'
            ),
            '@telia-ace/knowledge-widget-components-search': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-search'
            ),
            '@telia-ace/knowledge-widget-components-settings': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-settings'
            ),
            '@telia-ace/knowledge-widget-components-tag-list': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-components-tag-list'
            ),
            '@telia-ace/knowledge-widget-component-utilities': path.resolve(
                __dirname,
                'node_modules/@telia-ace/knowledge-widget-component-utilities'
            ),
            '@telia-ace/widget-components-area': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-area'
            ),
            '@telia-ace/widget-components-back-link': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-back-link'
            ),
            '@telia-ace/widget-components-close-button': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-close-button'
            ),
            '@telia-ace/widget-components-copyright': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-copyright'
            ),
            '@telia-ace/widget-components-embedded-widget': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-embedded-widget'
            ),
            '@telia-ace/widget-components-grid': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-grid'
            ),
            '@telia-ace/widget-components-header': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-header'
            ),
            '@telia-ace/widget-components-image-link': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-image-link'
            ),
            '@telia-ace/widget-components-not-found': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-not-found'
            ),
            '@telia-ace/widget-components-tab-stop': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-tab-stop'
            ),
            '@telia-ace/widget-components-widget-header': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-components-widget-header'
            ),
            '@telia-ace/widget-analytics': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-analytics'
            ),
            '@telia-ace/widget-conversation': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-conversation'
            ),
            '@telia-ace/widget-core': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-core'
            ),
            '@telia-ace/widget-forms': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-forms'
            ),
            '@telia-ace/widget-plugins': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-plugins'
            ),
            '@telia-ace/widget-routing': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-routing'
            ),
            '@telia-ace/widget-services': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-services'
            ),
            '@telia-ace/widget-tracking': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-tracking'
            ),
            '@telia-ace/widget-types-grid': path.resolve(
                __dirname,
                'node_modules/@telia-ace/widget-types-grid'
            ),
            '@telia-ace/widget-ui': path.resolve(__dirname, 'node_modules/@telia-ace/widget-ui'),
        },
    };

    return {
        entry,
        resolve,
        output,
        plugins,
        module,
        devServer,
    };
};
