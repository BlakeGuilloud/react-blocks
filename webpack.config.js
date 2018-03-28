const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css',
});

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
  js: path.resolve(__dirname, 'src/js'),
};

module.exports = (env = {}) => ({
  devtool: env.activateSourceMaps ? 'cheap-module-eval-source-map' : undefined,
  entry: path.join(paths.js, 'index.js'),
  output: {
    path: paths.dist,
    filename: `app.bundle.${Date.now()}.js`,
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
      favicon: 'src/favicon.ico',
    }),
    extractPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: ['last 2 versions'],
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true,
                includePaths: [path.resolve(__dirname, './src')],
              },
            },
          ],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
