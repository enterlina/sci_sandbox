const webpack         = require("webpack");
const path       = require("path");
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"],
    },
    entry:   [
        "./index.js" // the entry point of our app
    ],
    output:  {
        filename:   "bundle.js", // the output bundle
        path:       path.join(__dirname, "dist")
    },

    context:  path.join(__dirname, "src"),
    devtool: "inline-source-map",


    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                use:     ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:  ["style-loader", "css-loader?modules", "postcss-loader",],
            },
            {
                test:    /\.scss$/,
                loaders: ["style-loader", "css-loader?modules", "postcss-loader", "sass-loader"]
            },
            {
                test:    /\.(jpe?g|png|gif|svg|ttf|woff|eot)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
                ]
            }
        ],
    },

    plugins:     [
        new StyleLintPlugin(),
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        new webpack.ProvidePlugin({
          "React": "react",
        }),

    ],
    externals:   {
        "react":     "React",
        "react-dom": "ReactDOM"
    }
};
