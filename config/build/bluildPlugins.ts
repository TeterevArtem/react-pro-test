import webpack, { WebpackPluginInstance } from 'webpack'; //to access built-in plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';


export const buildPlugins = ({paths}:BuildOptions):WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
          template: paths.html
        }),
        new webpack.ProgressPlugin(),
  ]
}