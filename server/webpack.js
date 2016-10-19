import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config.babel';

const PORT_NUMBER = 3001;
const PROXY = 3000;

let _webpack = webpack (webpackConfig);
let _webpackDevServer = new webpackDevServer (_webpack, {
  publicPath: '/',
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true
  },
  proxy: {
    '*': 'http://localhost:' + PROXY
  }
});

_webpackDevServer.listen (PORT_NUMBER, 'localhost', (error, result) => {
  if (error) {
    console.log (error);
  } else {
    console.log ('Webpack is listening to port', PORT_NUMBER);
  }
});
