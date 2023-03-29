const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const directoryToJSON = (dir, filelist = []) => {
	const files = fs.readdirSync(dir);
	// eslint-disable-next-line no-restricted-syntax
	for (const file of files) {
		const dirFile = path.join(dir, file);
		if (file.includes('.html')) {
			filelist.push({
				name: file,
				ext: path.extname(dirFile)
			});
		}
	}
	return filelist;
};

const htmlfiles = directoryToJSON('./src/pages/');
const filenames = [];

const HTMLPages = htmlfiles.map((page) => {
	filenames.push({
		path: page.name,
		name: page.name.replace('.html', '')
	});
	return [
		new HtmlWebpackPlugin({
			inject: false,
			filename: `./${page.name}`,
			template: `${__dirname}/src/pages/${page.name}`,
      minify: false,
			// resourcePath: process.env.ASSET_PATH || '/',
		}),
	];
});

module.exports = (abs, env) => {
  const devMode = env.mode !== 'development';
  return {
    entry: './src/es/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].[contenthash:4].bundle.js',
      assetModuleFilename: '[name][ext][query]'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            devMode ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            devMode ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            "css-unicode-loader", // Convert double-byte character to unicode encoding.
            'sass-loader',
          ]
        },
        {
          test: /\.html$/,
          loader: 'ejs-loader',
          options: {
            esModule: false
          }
        }
      ]
    },
    plugins: [
      /* new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: false,
        filename: 'index.html',
      }), */
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      
    ].concat(...HTMLPages),
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      compress: true,
      port: 9000,
      open: true,
    },
    devtool: devMode ? false : 'eval',
    //...snip
    "resolve": { 
      "alias": { 
        "react": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",     // Must be below test-utils
        "react/jsx-runtime": "preact/jsx-runtime"
      },
      extensions: ['.js', '.jsx'],
    }
  };
};