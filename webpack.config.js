const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{
				test:/\.html$/,
				loader: 'html-loader'
			},
			{
				test:/\.css$/,
				loaders: ['style-loader','css-loader']
			},
			{
				test:/\.hbs$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};

