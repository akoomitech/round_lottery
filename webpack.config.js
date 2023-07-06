const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'round_lottery.development.js',
  },

  //enable dev source map
  devtool: 'source-map',

  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader'},
          { 
            loader: 'babel-loader',
            options: {
              babelrc: false,
              "plugins": [
                ["@babel/plugin-syntax-typescript",
                  {
                    isTSX: true
                  }
                ],
                "@babel/plugin-syntax-jsx",
                [
                  "babel-plugin-react-css-modules",
                  {
                    "handleMissingStyleName": "throw",
                    "generateScopedName": "[local]-[hash:base64:12]",
                    "filetypes": {
                      ".less": {
                        "syntax": "postcss-less"
                      }
                    }
                  }
                ]
              ]
            }
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 3,
            sourceMap: true,
            modules: true,
            localIdentName: "[local]-[hash:base64:12]",
          }
        }, {
          loader: 'less-loader', options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'), 
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ],

  externals: {
    mobx: 'mobx',
    react: 'React',
    'react-dom': 'ReactDOM',
    'mobx-react': 'mobxReact',
    'mobx-react-lite': 'mobxReactLite',
    '@imoka/imoka-react': 'imokaReact',
    '@imoka/imoka-mobweb-reactor': 'imokaMobwebReactor',
    '@imoka/imoka-mobweb-reactor-support': 'imokaMobwebReactorSupport',
  }
}