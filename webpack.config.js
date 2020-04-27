const path = require('path');
const webpack = require('webpack');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  getControllers,
  getPresenters
} = require('./webpack.utils');

module.exports = {
  mode: 'production',
  entry: {
    ...getControllers()
  },

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './dist')
  },

  optimization: {
    minimize: false
    // splitChunks: {
    //   chunks: 'all'
    // }
  },

  performance: {
    maxEntrypointSize: 1048576, // Tamaño máximo para los 'entrypoints': 1 MB
    maxAssetSize: 1048576 // Tamaño máximo para los 'assets' de salida: 1 MB
  },

  resolve: {
    alias: {
      '@common': path.resolve(__dirname, 'app/common/'),
      '@assets': path.resolve(__dirname, 'app/assets/'),
      'global': path.resolve(__dirname, 'app/common/global.js')
    }
  },

  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    // new MiniCssExtractPlugin({
    //   moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.min.css`,
    //   // filename: '[name].min.css',
    //   // chunkFilename: 'a[id].min.css',
    //   ignoreOrder: false // Enable to remove warnings about conflicting order
    // }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      'global': 'global'
    }),
    new CopyPlugin([{
      from: 'app/containers/*/assets/*',
      to: path.resolve(__dirname, './dist'),
      transformPath(targetPath, absolutePath) {
        return targetPath.replace(/src\\/, '');
      }
    }], {
      ignore: ['*.js', '*.css']
    }),
  ]
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const path = require('path');
// const glob = require('glob');

// // console.log(glob.sync('./app/**/**.trigger.js'))

// let entries = {};
// const triggers = glob.sync('./app/**.project.js');

// triggers.forEach((ct, it, ob) => {
//     const splitted = ct.split('/');

//     const proyecto = splitted[splitted.length - 1].split('.')[0];
//     entries[proyecto] = ct;
// });

// // console.log(entries);

// module.exports = {
//     mode: 'production',
//     entry: entries,
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, './app')
//     }
// };