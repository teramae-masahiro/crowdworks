const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = ({outputFile,assetFile}) => ({
  entry:{
    app: './src/js/app.js',
    sub: './src/js/sub.js',
  },
  output: {
    path: path.resolve(__dirname,'public'),
    filename: `js/${outputFile}.js`,
    chunkFilename: `js/${outputFile}.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader:'postcss-loader',
          },
          'sass-loader'
        ],

      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: `images/${assetFile}.[ext]`,
        }
      },
      {
        test:/\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        //以前の使い方
        // use: ["raw-loader"],
        type: "asset/source",
        generator: {
          filename: "textures/[name][ext]",
        }

      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: `css/${outputFile}.css`
    }),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      utils: [path.resolve(__dirname, 'src/js/utils'), 'default']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        utils :{
            name: "utils",
            test: /src[\\/]js/,
            chunks: 'async',
        },

        default: false,
      },
    },
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@imgs': path.resolve(__dirname, 'src/images'),
    },
    extensions: ['.js', '.scss'],
    modules: [path.resolve(__dirname, 'src'),'node_modules']
    //node_modules or src
  }
});
