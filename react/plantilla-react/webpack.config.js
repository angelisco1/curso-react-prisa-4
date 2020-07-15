const path = require('path');
const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(entryPath, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
}