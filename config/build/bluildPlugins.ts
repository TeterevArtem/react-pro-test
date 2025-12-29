import { MiniCssExtractPluginCompilationHooks } from './../../node_modules/mini-css-extract-plugin/types/hooks.d';
import webpack, { WebpackPluginInstance } from 'webpack'; //to access built-in plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config';


export const buildPlugins = ({paths}:BuildOptions):WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
          template: paths.html
        }),
        new webpack.ProgressPlugin(),
    
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}