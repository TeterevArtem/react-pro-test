import {ResolveOptions} from "webpack";

export const buildResolvers = (): ResolveOptions => {
  const typescriptExtensions =  {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  }
  return typescriptExtensions
}