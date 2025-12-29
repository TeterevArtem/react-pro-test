import webpack from "webpack";
import { BuildOptions } from "./types/config"
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./bluildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined
  };
} 