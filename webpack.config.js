var webpack = require('webpack');

module.exports = {
  /**
  * Define the root context of source to avoid long path: './root/to/src/client'
  */
  context: __dirname + "/src/client",

  /**
  * Define our modules.
  * The <strong>common</strong> is put into an array to workaround a weird issue.
  * https://github.com/webpack/webpack/issues/300
  */
  entry: {
    'common': ['./common'],
    'admin': './admin',
    'shop': './shop'
  },
  output: {
    path: './src/static/script',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },

  /**
   * Normally, we shall have duplication source code of <strong>common</strong>
   * in <strong>admin</strong> and <strong>shop</strong>
   * because of dependencies.
   * Using this optimization to avoid that.
   */
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })
  ]
}
