import { BuildOptions } from './types/config';
import {ResolveOptions} from "webpack";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  const typescriptExtensions =  {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
  return typescriptExtensions
}