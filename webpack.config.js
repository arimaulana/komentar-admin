const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        // compress: true,
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        inline: true
    },

    mode: "development",
    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",

    entry: {
        main: "./src/index.tsx"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Komentar Admin',
            template: path.resolve(__dirname, "./src/index.html")
        })
    ],

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { enforce: "pre", test: /\.tsx?$/, exclude: /node_modules/, loader: "eslint-loader", options: { fix: true } },

            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // // When importing a module whose path matches one of the following, just
    // // assume a corresponding global variable exists and use that instead.
    // // This is important because it allows us to avoid bundling all of our
    // // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
