const {resolve} = require('path');

module.exports = {

    entry: {
        tQuery: './tQuery/src/main.js'
    },

    output: {
        path: resolve(__dirname + '/js/'),
        filename: '[name].js',
        library: 'tQuery',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-runtime' ,'add-module-exports'],
                        presets: ['es2015']
                    }
                }
            }
        ]
    }

};