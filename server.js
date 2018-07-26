var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler);

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});