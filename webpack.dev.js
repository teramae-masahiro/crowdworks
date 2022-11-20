const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = () => merge(commonConf({ outputFile,assetFile }),{
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: `images/${assetFile}.[ext]`,
        }
      },
    ]
  },
  devServer: {
    static: {
      directory: './public',
    },
    watchFiles: ['src/**/*', 'public/**/*'],
    open: true,
    compress: true,
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
});
