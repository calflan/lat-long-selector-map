const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = [
  {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
      filename: "scripts/index.js",
      path: path.join(__dirname, "web")
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }])
    ],
    devServer: {
      contentBase: path.resolve("web")
    }
  }
];
