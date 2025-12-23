import webpack from "webpack"

export const buildLoaders = ():webpack.RuleSetRule[] => {

  const typescriptLoader = {
    //если нативный JS или React то нужен babel-transpiler
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [ typescriptLoader, cssLoader ]
}