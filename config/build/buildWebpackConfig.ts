import webpack from "webpack";
import { BuildOptions } from "./types/config"
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./bluildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
  };
} 