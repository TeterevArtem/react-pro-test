import webpack from "webpack"

export const buildLoaders = ():webpack.RuleSetRule[] => {

  const typescriptLoader = {
    //если нативный JS или React то нужен babel-transpiler
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [ typescriptLoader ]
}