const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 4040,
    historyApiFallback: true,
  },
};
