var path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/App.jsx"),
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        host: "0.0.0.0",
        open: true,
        overlay: true
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    }
};
