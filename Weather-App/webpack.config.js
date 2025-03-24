const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"), // 🔥 Output in "public"
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    watchFiles: ["./index.html", "./src/**/*.js"],
    compress: true,
    port: 3080, // 🔥 Changed to avoid conflicts
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html", // Ensure correct output
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // 🔥 Store images in "public/images"
        },
      },
    ],
  },
};
