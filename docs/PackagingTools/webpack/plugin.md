# 打包成2进制形式

```
const path = require('path');
const WebpackObfuscator = require('webpack-obfuscator');
const webpack = require("webpack");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new WebpackObfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      IdentifierNamesGenerator:'hexadecimal',
    }, [])
  ]
};
```
