const path = require('path');
module.exports = {
   entry: path.join(__dirname, 'src/js', 'app.js'),
   output: {
      path: 'build/js',
      filename: 'bundle.js',
   },
   module: {
      loaders: [
         {  test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader' 
         },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]',
                exclude: /node_modules/
            },
        ],
    },
}; 