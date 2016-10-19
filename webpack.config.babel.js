import { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';
import { resolve } from 'path';

const BUILD_DIR = resolve (__dirname, 'dist');
const APP_DIR = resolve (__dirname, 'src');

export default {
  entry: [
    'webpack/hot/dev-server',
    resolve (APP_DIR, 'index.html'),
    resolve (APP_DIR, 'index.jsx')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    root: APP_DIR,
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HotModuleReplacementPlugin (),
    // new NoErrorsPlugin ()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=300000&name=[name]-[hash].[ext]&root=.'
      }
    ]
  }
};
