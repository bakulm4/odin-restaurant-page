const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode:'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename :'style.css'
    }),
  ],
  module: {
    rules: [
        {
          test:/\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type:'asset/resource'
       },
      ],
  }
};