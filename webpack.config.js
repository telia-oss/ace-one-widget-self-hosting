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

    return {
        entry,
        output,
        plugins,
        module,
        devServer,
    };
};
