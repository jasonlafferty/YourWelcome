import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const GRAPHQL_PORT = 8088;

const compiler = webpack({
  entry: path.resolve(__dirname, 'app', 'app.js'),
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  output: { filename: 'app.js', path: '/' },
});

const app = new WebpackDevServer(compiler, {
  compress: true,
  contentBase: '/lib/public/',
  disableHostCheck: true,
  proxy: { '/graphql': `http://localhost:${GRAPHQL_PORT}` },
  publicPath: '/lib/app/',
  stats: { colors: true },
});

export default app;
